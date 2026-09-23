"use client";

import { ArrowUpRight, Mail, MapPin, Send, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import React, {useState } from "react";
import api from "../../api/api";
import toast from "react-hot-toast";
export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name : '',
    email : '',
    subject : '',
    message : ''
  })

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name] : value}))
  }
  const handleFromData = async (e : React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();

  try {
    setIsSending(true)
    const response = await api.post('/api/Contact', formData)
    console.log(response.data)
    toast.success(response.data.message)
     setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error : any) {
    console.error(error);
    toast.error("Something wrong....")
  }  
  finally {
    setIsSending(false);
  }  
  }
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 md:px-16 lg:px-24 xl:px-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 size-112.5 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 size-75 rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Heading */}
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
          <Sparkles className="size-4" />
          Let's Connect
        </div>

        <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
          Have an idea?
          <br />
          <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-violet-600 bg-clip-text text-transparent">
            Let's build it together.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg dark:text-slate-400">
          Have a project, question, or just want to say hello? I'd love to hear
          from you. Send me a message and let's start a conversation.
        </p>
      </motion.div>

      {/* Contact Container */}
      <motion.div
        className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 shadow-2xl shadow-blue-500/5 backdrop-blur-xl dark:border-white/8 dark:bg-slate-950/60"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.7 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Left Side */}
          <div className="relative overflow-hidden p-8 sm:p-10 md:col-span-2">
            {/* Glow */}
            <div className="absolute -left-20 -top-20 size-60 rounded-full bg-blue-500/20 blur-[100px]" />

            <div className="relative z-10">
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                CONTACT
              </p>

              <h3 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                Let's talk.
              </h3>

              <p className="mt-4 leading-7 text-slate-500 dark:text-slate-400">
                I'm always open to discussing new projects, creative ideas, or
                opportunities.
              </p>

              <div className="mt-10 space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Mail className="size-5" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <a
                      href="mailto:your@email.com"
                      className="mt-1 block text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                    >
                      ajinkyabisht75@email.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    <MapPin className="size-5" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                      Dehradun, uttarkhand
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Gradient */}
              <div className="mt-12 h-px w-full bg-linear-to-r from-blue-500/40 via-violet-500/30 to-transparent" />

              <p className="mt-6 text-sm text-slate-400">
                Usually responds within 24 hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="border-t border-slate-200/70 p-8 sm:p-10 md:col-span-3 md:border-l md:border-t-0 dark:border-white/8">
            <form  onSubmit={handleFromData} className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                      disabled={isSending}

                    placeholder="John Doe"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/8 dark:bg-white/3 dark:text-white dark:placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                     value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/8 dark:bg-white/3 dark:text-white dark:placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                   value={formData.subject}
                    onChange={handleChange}
                  placeholder="How can I help you?"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/8 dark:bg-white/3 dark:text-white dark:placeholder:text-slate-600"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                   value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about your project..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/8 dark:bg-white/3 dark:text-white dark:placeholder:text-slate-600"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/20"
              >
                {isSending ? "Sending..." : "Send Message"}
                <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        className="mx-auto mt-16 flex max-w-5xl flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200/70 bg-white/50 p-6 sm:flex-row dark:border-white/8 dark:bg-white/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div>
          <h3 className="font-medium text-slate-800 dark:text-white">
            Prefer connecting through social platforms?
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Check out my profiles and let's connect.
          </p>
        </div>

        <a
          href="#"
          className="group flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400"
        >
          View my profiles
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </motion.div>
    </section>
  );
}
