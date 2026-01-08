import { create } from "zustand";

interface ReservationState {
  from: string;
  destination: string;
  date: Date | null;
  travelers: number;
  setReservationData: (from: string, destination: string) => void;
  setFullReservationData: (data: {
    from: string;
    destination: string;
    date: Date | null;
    travelers: number;
  }) => void;
  clearReservationData: () => void;
}

export const useReservationStore = create<ReservationState>((set) => ({
  from: "",
  destination: "",
  date: null,
  travelers: 1,
  setReservationData: (from: string, destination: string) =>
    set({ from, destination }),
  setFullReservationData: (data) =>
    set({
      from: data.from,
      destination: data.destination,
      date: data.date,
      travelers: data.travelers,
    }),
  clearReservationData: () =>
    set({ from: "", destination: "", date: null, travelers: 1 }),
}));
