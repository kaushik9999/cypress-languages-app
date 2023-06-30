import { api } from "@/config/axios";

class AuthService {
  async login(email: string, password: string) {
    const { data } = await api.post<{ access: string; refresh: string }>(
      `/auth`,
      { email: email, password: password }
    );
    return data;
  }
}

export const authService = new AuthService();
