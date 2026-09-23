import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useState,
} from "react";

import { ImagePlus, X, Loader2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../../../api/api";

interface ProjectForm {
  name: string;
  description: string;
  image: File | null;
  skills: string[];
  githubLink: string;
  liveLink: string;
}

interface ProjectResponse {
  _id: string;
  name: string;
  description: string;
  imgUrl: string;
  skills: string[];
  githubLink: string;
  liveLink: string;
}

const initialForm: ProjectForm = {
  name: "",
  description: "",
  image: null,
  skills: [],
  githubLink: "",
  liveLink: "",
};

export default function AddProject() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState<ProjectForm>(initialForm);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [technologyInput, setTechnologyInput] = useState("");

  const [loading, setLoading] = useState(false);
  const [fetchingProject, setFetchingProject] = useState(false);

  // ==============================
  // GET PROJECT FOR EDIT
  // ==============================

  useEffect(() => {
    if (id) {
      getProjectById(id);
    }
  }, [id]);

  const getProjectById = async (projectId: string) => {
    try {
      setFetchingProject(true);

      const response = await api.get(
        `/api/Project/getProjectById/${projectId}`
      );

      const project: ProjectResponse = response.data?.data;

      if (!project) {
        toast.error("Project not found");
        return;
      }

      setFormData({
        name: project.name || "",
        description: project.description || "",
        image: null,
        skills: project.skills || [],
        githubLink: project.githubLink || "",
        liveLink: project.liveLink || "",
      });

      // Existing Cloudinary image
      setImagePreview(project.imgUrl || null);

    } catch (error: any) {
      console.error("Get project error:", error);

      toast.error(
        error.response?.data?.message ||
          "Failed to fetch project"
      );
    } finally {
      setFetchingProject(false);
    }
  };

  // ==============================
  // HANDLE INPUT CHANGE
  // ==============================

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==============================
  // HANDLE IMAGE
  // ==============================

  const handleImageChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Optional validation
    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only PNG, JPG or WEBP images are allowed");
      return;
    }

    // Limit 5MB
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size must be less than 5MB");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

    const previewUrl = URL.createObjectURL(file);

    setImagePreview(previewUrl);
  };

  // ==============================
  // ADD TECHNOLOGY
  // ==============================

  const addTechnology = () => {
    const skill = technologyInput.trim();

    if (!skill) return;

    if (formData.skills.includes(skill)) {
      toast.error("Technology already added");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));

    setTechnologyInput("");
  };

  // ==============================
  // REMOVE TECHNOLOGY
  // ==============================

  const removeTechnology = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter(
        (technology) => technology !== skill
      ),
    }));
  };

  // ==============================
  // ENTER KEY
  // ==============================

  const handleTechnologyKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTechnology();
    }
  };

  // ==============================
  // CREATE FORMDATA
  // ==============================

  const createFormData = () => {
    const data = new FormData();

    data.append("name", formData.name.trim());
    data.append(
      "description",
      formData.description.trim()
    );

    data.append(
      "githubLink",
      formData.githubLink.trim()
    );

    data.append(
      "liveLink",
      formData.liveLink.trim()
    );

    data.append(
      "skills",
      JSON.stringify(formData.skills)
    );

    // Only append image when it's a real File
    if (formData.image instanceof File) {
      data.append("image", formData.image);
    }

    return data;
  };

  // ==============================
  // ADD PROJECT
  // ==============================

  const createProject = async () => {
    try {
      setLoading(true);

      const data = createFormData();

      const response = await api.post(
        "/api/Project/",
        data
      );

      toast.success(
        response.data?.message ||
          "Project added successfully"
      );

      navigate("/admin/dashboard");

    } catch (error: any) {
      console.error("Create project error:", error);

      toast.error(
        error.response?.data?.message ||
          "Failed to create project"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==============================
  // UPDATE PROJECT
  // ==============================

  const updateProject = async () => {
    if (!id) {
      toast.error("Project ID is missing");
      return;
    }

    try {
      setLoading(true);

      const data = createFormData();

      const response = await api.put(
        `/api/Project/updateProject/${id}`,
        data
      );

      toast.success(
        response.data?.message ||
          "Project updated successfully"
      );

      navigate("/admin/dashboard");

    } catch (error: any) {
      console.error("Update project error:", error);

      console.log("Status:", error.response?.status);
      console.log(
        "Response:",
        error.response?.data
      );

      toast.error(
        error.response?.data?.message ||
          "Failed to update project"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==============================
  // SUBMIT
  // ==============================

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Project name is required");
      return;
    }

    if (!formData.description.trim()) {
      toast.error("Project description is required");
      return;
    }

    if (formData.skills.length === 0) {
      toast.error("Add at least one technology");
      return;
    }

    if (!isEditMode && !formData.image) {
      toast.error("Project image is required");
      return;
    }

    if (isEditMode) {
      await updateProject();
    } else {
      await createProject();
    }
  };

  // ==============================
  // RESET FORM
  // ==============================

  const handleCancel = () => {
    setFormData(initialForm);
    setImagePreview(null);
    setTechnologyInput("");

    navigate("/admin/dashboard");
  };

  // ==============================
  // LOADING PROJECT
  // ==============================

  if (fetchingProject) {
    return (
      <div className="flex min-h-screen items-center justify-center text-white">
        <Loader2 className="animate-spin" size={32} />
      </div>
    );
  }

  // ==============================
  // UI
  // ==============================

  return (
    <div className="min-h-screen px-4 py-8 text-white sm:px-6 lg:px-8">

      <div className="mx-auto max-w-3xl">

        {/* HEADER */}
        <div className="mb-8 text-center">

          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-400">
            Admin Panel
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            {isEditMode
              ? "Update Project"
              : "Add Project"}
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            {isEditMode
              ? "Update your project information."
              : "Add a new project to your portfolio."}
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl sm:p-8"
        >

          {/* PROJECT NAME */}
          <div className="mb-6">

            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Project Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter project name"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />

          </div>

          {/* DESCRIPTION */}
          <div className="mb-6">

            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your project..."
              rows={4}
              required
              className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />

          </div>

          {/* IMAGE */}
          <div className="mb-6">

            <label className="mb-2 block text-sm font-medium text-slate-200">
              Project Image
            </label>

            <label
              htmlFor="project-image"
              className="group relative flex min-h-56 cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-slate-700 bg-slate-950 transition hover:border-blue-500/70"
            >

              {imagePreview ? (
                <>
                  <img
                    src={imagePreview}
                    alt="Project preview"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition group-hover:opacity-100">
                    <span className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium">
                      Change Image
                    </span>
                  </div>
                </>
              ) : (
                <div className="text-center">

                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <ImagePlus size={26} />
                  </div>

                  <p className="text-sm font-medium text-slate-300">
                    Upload Image
                  </p>

                  <p className="mt-1 text-xs text-slate-600">
                    PNG, JPG or WEBP · Max 5MB
                  </p>

                </div>
              )}

              <input
                id="project-image"
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleImageChange}
                className="hidden"
              />

            </label>

          </div>

          {/* TECHNOLOGIES */}
          <div className="mb-6">

            <label className="mb-2 block text-sm font-medium text-slate-200">
              Technologies
            </label>

            <div className="flex gap-2">

              <input
                type="text"
                value={technologyInput}
                onChange={(e) =>
                  setTechnologyInput(e.target.value)
                }
                onKeyDown={handleTechnologyKeyDown}
                placeholder="e.g. React"
                className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />

              <button
                type="button"
                onClick={addTechnology}
                className="rounded-lg bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-500"
              >
                Add
              </button>

            </div>

            {formData.skills.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">

                {formData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300"
                  >
                    {skill}

                    <button
                      type="button"
                      onClick={() =>
                        removeTechnology(skill)
                      }
                      className="text-blue-400 hover:text-red-400"
                    >
                      <X size={14} />
                    </button>

                  </span>
                ))}

              </div>
            )}

          </div>

          {/* GITHUB */}
          <div className="mb-6">

            <label
              htmlFor="githubLink"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              GitHub URL
            </label>

            <input
              id="githubLink"
              name="githubLink"
              type="url"
              value={formData.githubLink}
              onChange={handleChange}
              placeholder="https://github.com/username/project"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />

          </div>

          {/* LIVE LINK */}
          <div className="mb-8">

            <label
              htmlFor="liveLink"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Live Demo URL
            </label>

            <input
              id="liveLink"
              name="liveLink"
              type="url"
              value={formData.liveLink}
              onChange={handleChange}
              placeholder="https://yourproject.vercel.app"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />

          </div>

          {/* BUTTONS */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={handleCancel}
              disabled={loading}
              className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:from-blue-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
            >

              {loading && (
                <Loader2
                  size={17}
                  className="animate-spin"
                />
              )}

              {loading
                ? isEditMode
                  ? "Updating..."
                  : "Adding..."
                : isEditMode
                  ? "Update Project"
                  : "Add Project"}

            </button>

          </div>

        </form>

      </div>

    </div>
  );
}