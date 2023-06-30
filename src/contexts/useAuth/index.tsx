import { authService } from "@/services/Auth";
import { utils } from "@/utils";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IContext {
  login: (email: string, password: string) => Promise<void>;
  logOut: () => void;
  access: string;
  refresh: string;
  isLoading: boolean;
}

const AuthContext = createContext({} as IContext);

const INITIAL_VALUE = {
  access: "",
  refresh: "",
  isLoading: false,
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(INITIAL_VALUE);

  const handleSetToken = (access: string, refresh: string) =>
    setToken((prev) => ({
      ...prev,
      access: access,
      refresh: refresh,
    }));

  const login = async (email: string, password: string) => {
    try {
      _setLoading(true);
      const data = await authService.login(email, password);
      handleSetToken(data.access, data.refresh);
      utils.navigateTo("/app");
    } catch (e: any) {
      alert("Failed to login");
    } finally {
      _setLoading(false);
    }
  };

  const logOut = () => {
    _setLoading(true);
    setToken(INITIAL_VALUE);
    utils.navigateTo("/");
    _setLoading(false);
  };

  const _setLoading = (boolean: boolean): void =>
    setToken((prev) => ({ ...prev, isLoading: boolean }));

  useEffect(() => {
    if (!token.access) {
      utils.navigateTo("/");
      return;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logOut,
        access: token.access,
        refresh: token.refresh,
        isLoading: token.isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
