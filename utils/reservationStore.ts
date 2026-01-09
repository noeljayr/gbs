import { create } from "zustand";
import { getCookie, setCookie, deleteCookie } from "cookies-next";

interface ReservationData {
  from: string;
  destination: string;
  date: Date | null;
  travelers: number;
}

interface ReservationState extends ReservationData {
  setReservationData: (from: string, destination: string) => void;
  setFullReservationData: (data: ReservationData) => void;
  clearReservationData: () => void;
  saveToCookies: () => void;
  loadFromCookies: () => void;
}

const COOKIE_KEY = "reservation_data";

// Helper functions for cookies
const saveReservationToStorage = (data: ReservationData) => {
  try {
    const serializedData = {
      ...data,
      date: data.date ? data.date.toISOString() : null,
    };
    setCookie(COOKIE_KEY, JSON.stringify(serializedData), {
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/", // Ensure cookie is available across all pages
      sameSite: "lax",
    });
    console.log("Reservation saved to cookies:", serializedData);
  } catch (error) {
    console.error("Failed to save reservation to cookies:", error);
  }
};

const loadReservationFromStorage = (): ReservationData | null => {
  try {
    const stored = getCookie(COOKIE_KEY);
    console.log("Loading from cookies:", stored);

    if (!stored || typeof stored !== "string") {
      console.log("No reservation data found in cookies");
      return null;
    }

    const parsed = JSON.parse(stored);
    const result = {
      from: parsed.from || "",
      destination: parsed.destination || "",
      date: parsed.date ? new Date(parsed.date) : null,
      travelers: parsed.travelers || 1,
    };

    console.log("Parsed reservation data:", result);
    return result;
  } catch (error) {
    console.error("Failed to load reservation from cookies:", error);
    return null;
  }
};

const clearReservationFromStorage = () => {
  try {
    deleteCookie(COOKIE_KEY);
  } catch (error) {
    console.error("Failed to clear reservation from cookies:", error);
  }
};

export const useReservationStore = create<ReservationState>((set, get) => ({
  from: "",
  destination: "",
  date: null,
  travelers: 1,

  setReservationData: (from: string, destination: string) => {
    set({ from, destination });
    const state = get();
    saveReservationToStorage({
      from,
      destination,
      date: state.date,
      travelers: state.travelers,
    });
  },

  setFullReservationData: (data) => {
    set({
      from: data.from,
      destination: data.destination,
      date: data.date,
      travelers: data.travelers,
    });
    saveReservationToStorage(data);
  },

  clearReservationData: () => {
    set({ from: "", destination: "", date: null, travelers: 1 });
    clearReservationFromStorage();
  },

  saveToCookies: () => {
    const state = get();
    saveReservationToStorage({
      from: state.from,
      destination: state.destination,
      date: state.date,
      travelers: state.travelers,
    });
  },

  loadFromCookies: () => {
    const stored = loadReservationFromStorage();
    if (stored) {
      set({
        from: stored.from,
        destination: stored.destination,
        date: stored.date,
        travelers: stored.travelers,
      });
    }
  },
}));
