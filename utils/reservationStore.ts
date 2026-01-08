import { create } from "zustand";

interface ReservationState {
  from: string;
  destination: string;
  setReservationData: (from: string, destination: string) => void;
  clearReservationData: () => void;
}

export const useReservationStore = create<ReservationState>((set) => ({
  from: "",
  destination: "",
  setReservationData: (from: string, destination: string) =>
    set({ from, destination }),
  clearReservationData: () => set({ from: "", destination: "" }),
}));
