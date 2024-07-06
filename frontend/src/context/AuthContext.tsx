import { ReactNode, createContext } from "react";
import { useState } from "react";

type User = {
  name: String;
  email: String;
};

type UserAuth = {
  isLoggedIn: false;
  user: User | null;
  login: (email: String, password: String) => Promise<void>;
  signup: (name: String, email: String, password: String) => Promise<void>;
  logout: () => Promise<void>;
};
const AuthContext = createContext<UserAuth | null>(null);
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
};
