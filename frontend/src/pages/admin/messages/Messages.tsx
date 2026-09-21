import { useEffect, useState } from "react";
import axios from "axios";
import {Mail, MailOpen,Trash2,Eye,X,Calendar,User,AtSign,MessageSquare,RefreshCw,} from "lucide-react";
import type { Message } from "../../../assets/assets";
import api from "../../../api/api";


export default function Messages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] =
    useState<Message | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  // Fetch messages
  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await api.get("/Contact/getContactData");
      setMessages(response?.data?.data);   
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    } finally {
      setLoading(false);
    }
  };
  // Mark message as read
  const markAsRead = async (id: string) => {
    try {
      await api.patch(`/Contact/markAsRead/${id}`);
      setMessages((prev) =>
        prev.map((message) =>
          message._id === id
            ? { ...message, isRead: true }
            : message
        )
      );

      if (selectedMessage?._id === id) {
        setSelectedMessage((prev) =>
          prev ? { ...prev, isRead: true } : null
        );
      }
    } catch (error) {
      console.error("Failed to mark message as read:", error);
    }
  };

  // Open message
  const openMessage = async (message: Message) => {
    setSelectedMessage(message);

    if (!message.isRead) {
      await markAsRead(message._id);
    }
  };

  // Delete message
  const deleteMessage = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?");
    if (!confirmDelete) return;
    try {
      await api.delete(`Contact/deleteContact/${id}`)
      setMessages((prev) =>
        prev.filter((message) => message._id !== id)
      );
      if (selectedMessage?._id === id) {
        setSelectedMessage(null);
      }
    } catch (error) {
      console.error("Failed to delete message:", error);
    }
  };

  // Format date
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const unreadCount = messages.filter(
    (message) => !message.isRead
  ).length;

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-400">
              Admin Panel
            </p>

            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">
                Messages
              </h1>

              {unreadCount > 0 && (
                <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold">
                  {unreadCount} Unread
                </span>
              )}
            </div>

            <p className="mt-2 text-sm text-slate-400">
              Manage messages received through your portfolio.
            </p>
          </div>

          {/* Refresh */}
          <button
            onClick={fetchMessages}
            className="
              flex items-center justify-center gap-2
              rounded-lg border border-slate-700
              bg-slate-900 px-4 py-2.5
              text-sm font-medium text-slate-300
              transition
              hover:border-blue-500
              hover:bg-blue-500/10
              hover:text-blue-400
            "
          >
            <RefreshCw size={17} />
            Refresh
          </button>
        </div>

        {/* Messages */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">

          {/* Loading */}
          {loading && (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="flex items-center gap-3 text-slate-400">
                <RefreshCw
                  size={20}
                  className="animate-spin"
                />
                Loading messages...
              </div>
            </div>
          )}

          {/* Empty */}
          {!loading && messages.length === 0 && (
            <div className="flex min-h-[400px] flex-col items-center justify-center px-6 text-center">

              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                <Mail size={28} />
              </div>

              <h2 className="text-lg font-semibold">
                No messages yet
              </h2>

              <p className="mt-2 max-w-sm text-sm text-slate-500">
                When someone contacts you through your portfolio,
                their message will appear here.
              </p>
            </div>
          )}

          {/* Message List */}
          {!loading && messages.length > 0 && (
            <div className="divide-y divide-slate-800">

              {messages.map((message) => (
                <div
                  key={message._id}
                  className={`
                    group flex flex-col gap-4
                    p-5 transition
                    sm:flex-row sm:items-center
                    sm:justify-between
                    ${
                      message.isRead
                        ? "bg-slate-900/30"
                        : "bg-blue-500/[0.04]"
                    }
                    hover:bg-slate-800/50
                  `}
                >

                  {/* Left */}
                  <div className="flex min-w-0 items-start gap-4">

                    {/* Icon */}
                    <div
                      className={`
                        mt-1 flex h-11 w-11
                        shrink-0 items-center justify-center
                        rounded-full
                        ${
                          message.isRead
                            ? "bg-slate-800 text-slate-500"
                            : "bg-blue-500/10 text-blue-400"
                        }
                      `}
                    >
                      {message.isRead ? (
                        <MailOpen size={19} />
                      ) : (
                        <Mail size={19} />
                      )}
                    </div>

                    {/* Message Info */}
                    <div className="min-w-0">

                      <div className="flex flex-wrap items-center gap-2">
                        <h2
                          className={`
                            truncate text-sm
                            ${
                              message.isRead
                                ? "font-medium text-slate-300"
                                : "font-semibold text-white"
                            }
                          `}
                        >
                          {message.name}
                        </h2>

                        {!message.isRead && (
                          <span className="h-2 w-2 rounded-full bg-blue-500" />
                        )}
                      </div>

                      <p className="mt-1 truncate text-xs text-slate-500">
                        {message.email}
                      </p>

                      <p
                        className={`
                          mt-2 truncate text-sm
                          ${
                            message.isRead
                              ? "text-slate-500"
                              : "font-medium text-slate-300"
                          }
                        `}
                      >
                        {message.subject}
                      </p>

                      <p className="mt-1 line-clamp-1 text-xs text-slate-600">
                        {message.message}
                      </p>

                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex shrink-0 items-center gap-2">

                    <div className="mr-2 hidden items-center gap-1 text-xs text-slate-600 md:flex">
                      <Calendar size={13} />
                      {formatDate(message.createdAt)}
                    </div>

                    {/* View */}
                    <button
                      onClick={() => openMessage(message)}
                      className="
                        flex h-9 w-9
                        items-center justify-center
                        rounded-lg border border-slate-700
                        text-slate-400
                        transition
                        hover:border-blue-500
                        hover:bg-blue-500/10
                        hover:text-blue-400
                      "
                      title="View message"
                    >
                      <Eye size={17} />
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => deleteMessage(message._id)}
                      className="
                        flex h-9 w-9
                        items-center justify-center
                        rounded-lg border border-slate-700
                        text-slate-500
                        transition
                        hover:border-red-500/40
                        hover:bg-red-500/10
                        hover:text-red-400
                      "
                      title="Delete message"
                    >
                      <Trash2 size={17} />
                    </button>

                  </div>
                </div>
              ))}

            </div>
          )}
        </div>
      </div>

      {/* Message Modal */}
      {selectedMessage && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/70 p-4 backdrop-blur-sm
          "
          onClick={() => setSelectedMessage(null)}
        >
          <div
            className="
              w-full max-w-2xl
              overflow-hidden rounded-2xl
              border border-slate-800
              bg-slate-900
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 p-5">

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-blue-400">
                  Message
                </p>

                <h2 className="mt-1 text-xl font-semibold">
                  {selectedMessage.subject}
                </h2>
              </div>

              <button
                onClick={() => setSelectedMessage(null)}
                className="
                  flex h-9 w-9 items-center
                  justify-center rounded-lg
                  text-slate-500 transition
                  hover:bg-slate-800
                  hover:text-white
                "
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5">

              {/* User Info */}
              <div className="grid gap-3 sm:grid-cols-2">

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <User size={14} />
                    Name
                  </div>

                  <p className="mt-2 text-sm font-medium text-slate-200">
                    {selectedMessage.name}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <AtSign size={14} />
                    Email
                  </div>

                  <a
                    href={`mailto:${selectedMessage.email}`}
                    className="mt-2 block truncate text-sm font-medium text-blue-400 hover:text-blue-300"
                  >
                    {selectedMessage.email}
                  </a>
                </div>

              </div>

              {/* Date */}
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
                <Calendar size={14} />
                {formatDate(selectedMessage.createdAt)}
              </div>

              {/* Message */}
              <div className="mt-6">

                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-300">
                  <MessageSquare size={17} />
                  Message
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                  <p className="whitespace-pre-wrap text-sm leading-7 text-slate-400">
                    {selectedMessage.message}
                  </p>
                </div>

              </div>

              {/* Modal Actions */}
              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                <button
                  onClick={() => deleteMessage(selectedMessage._id)}
                  className="
                    flex items-center justify-center gap-2
                    rounded-lg border border-red-500/20
                    bg-red-500/5 px-5 py-2.5
                    text-sm font-medium text-red-400
                    transition
                    hover:bg-red-500/10
                  "
                >
                  <Trash2 size={16} />
                  Delete
                </button>

                <a
                  href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                  className="
                    flex items-center justify-center gap-2
                    rounded-lg
                    bg-gradient-to-r
                    from-blue-600 to-indigo-600
                    px-5 py-2.5
                    text-sm font-medium text-white
                    transition
                    hover:from-blue-500
                    hover:to-indigo-500
                  "
                >
                  <Mail size={16} />
                  Reply
                </a>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}