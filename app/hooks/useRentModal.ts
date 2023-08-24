import { create } from 'zustand';

interface RentModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useRentModal = create<RentModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
