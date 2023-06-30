import { api } from "@/config/axios";
import { ILanguage } from "@/types/ILanguage";

class LanguageService {
  async list(access: string) {
    const { data } = await api.get<{ count: number; results: ILanguage[] }>(
      `/languages`,
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }
    );
    return data;
  }
}

export const languageService = new LanguageService();
