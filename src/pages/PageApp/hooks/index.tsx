import { useAuth } from "@/contexts/useAuth";
import { useGetLanguages } from "@/hooks/useGetLanguages";
import { useState } from "react";

export const usePageApp = () => {
  const { access } = useAuth();
  const { languages, isLoading } = useGetLanguages(access);

  const [state, setState] = useState({ search: "" });

  const handleChangeState = (key: "search", value: string) =>
    setState((prev) => ({ ...prev, [key]: value }));

  const handleResetSearch = () => {
    setState((prev) => ({ ...prev, search: "" }));
  };

  const filteredLanguages = languages.filter((lang) =>
    lang.countries.join("").toLowerCase().includes(state.search)
  );

  const isResetSearchEnabled = !!state.search;

  return {
    state: {
      languages: languages,
      isLoading: isLoading,
      search: state.search,
      filteredLanguages: filteredLanguages,
      isResetSearchEnabled: isResetSearchEnabled,
    },
    methods: {
      handleChangeState: handleChangeState,
      handleResetSearch: handleResetSearch,
    },
  };
};
