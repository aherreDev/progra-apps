import { User } from "firebase/auth";
import { createContext } from "react";
import useAuth from "../hooks/use_auth";

interface AppProviderDefaultValues {
  currentUser: User | null;
  error: string | null;
  login: (email: string, password: string) => Promise<any>;
  signup: (email: string, password: string, userName: string) => Promise<any>;
  logout: () => Promise<any>;
}

const defaultValues: AppProviderDefaultValues = {
  currentUser: null,
  error: null,
  login: () => Promise.resolve(),
  signup: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};

export const AppContext = createContext(defaultValues);

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const { currentUser, error, login, signup, logout } = useAuth();

  return (
    <AppContext.Provider value={{ currentUser, error, login, signup, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
