import { create } from "zustand";

const useContextStore = create((set) => ({
  expanded: true,
  handleExpandedClose: () => set((state) => ({ expanded: true })),
  handleExpandedOpene: () => set((state) => ({ expanded: false })),
  handleExpanded: () => set((state) => ({ expanded: !state.expanded })),
}));
export default useContextStore;
