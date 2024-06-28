import { defineStore } from "pinia";

export type RootState = {
  query: string;
};

export const useMainStore = defineStore({
  id: "mainStore",
  state: () => ({
    query: "",
  } as RootState),

});