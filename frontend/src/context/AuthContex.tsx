import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import api from "../api/api";
import type { IUser } from "../assets/assets";
import toast from "react-hot-toast";

interface AuthContextProps {
  isloggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: IUser | null;
  setUser: (user: IUser | null) => void;

  login: (user: {
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  isloggedIn: false,
  setIsLoggedIn: () => {},
  user: null,
  setUser: () => {},
  login: async () => {},
  logout: async () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  // LOGIN
 const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { data } = await api.post("/Admin/login", {
      email,
      password,
    });
    toast.success("login successfully...")
    if (data.admin) {
      setUser(data.admin as IUser);
      setIsLoggedIn(true);
    }
  } catch (error: any) {
    console.error("Login API error:", error);
    toast.error("failed to login...")
    throw error;
  }
};
  // LOGOUT
  const logout = async () => {
    try {
      const { data } = await api.post("/Admin/logout");

      console.log(data);
    toast.success("logout successfully...")
      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
      toast.error("Connot logout, please try again !")
      throw error;
    }
  };

  // VERIFY USER
  const fetchUser = async () => {
  try {
    const { data } = await api.get("/Admin/verify");

    console.log("VERIFY RESPONSE:", data.admin);

    if (data.admin) {
      setUser(data.admin);
      setIsLoggedIn(true);
    } else {
      setUser(null);
      setIsLoggedIn(false);
    }
  } catch (error) {
    console.error("Verify error:", error);

    setUser(null);
    setIsLoggedIn(false);
  } 
};

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isloggedIn,
        setIsLoggedIn,
        user,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)