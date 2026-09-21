import { useEffect, useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useAuth } from "../../../context/AuthContex";
import { useNavigate } from "react-router-dom";

interface LoginTypes {
  email: string;
  password: string;
}

export default function AdminLogin() {
  const navigate = useNavigate();

  const { user, login, isloggedIn } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState<LoginTypes>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    await login(data);
    
  } catch (error) {
    console.error("Login failed:", error);
  }
};
  useEffect(() => {
    if (isloggedIn && user) {
      navigate("/admin/dashboard");
    }
  }, [isloggedIn, user, navigate]);

  return (
    <div className="min-h-screen bg-linear-to-br from-violet-900 via-indigo-900 to-black flex items-center justify-center px-4">
      {/* Background Blur */}
      <div className="absolute w-80 h-80 bg-indigo-600 rounded-full blur-[120px] opacity-30 top-20 left-10" />

      <div className="absolute w-80 h-80 bg-blue-500 rounded-full blur-[120px] opacity-20 bottom-10 right-10" />

      <div className="relative w-full max-w-md px-10">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 py-20">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-white">
            Welcome Back
          </h1>

          <p className="text-center text-gray-300 mt-2 mb-8">
            Sign in to continue
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="relative mb-5">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Password */}
            <div className="relative mb-3">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full pl-12 pr-12 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Login */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:scale-[1.02] active:scale-95 transition duration-300 shadow-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
