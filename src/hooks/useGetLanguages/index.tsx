import { api } from "@/config/axios";
import { languageService } from "@/services/Languages";
import { ILanguage } from "@/types/ILanguage";
import React, { useEffect, useState } from "react";

export const useGetLanguages = (access?: string) => {
  const [state, setState] = useState<{
    languages: ILanguage[];
    isLoading: boolean;
  }>({ languages: [], isLoading: true });

  const _setLoading = (boolean: boolean) =>
    setState((prev) => ({ ...prev, isLoading: boolean }));

  useEffect(() => {
    if (!access) return _setLoading(false);
    (async () => {
      const data = await languageService.list(access);
      setState((prev) => ({
        ...prev,
        languages: data.results,
      }));
      _setLoading(false);
    })();
  }, [access]);

  return { isLoading: state.isLoading, languages: state.languages };
};
