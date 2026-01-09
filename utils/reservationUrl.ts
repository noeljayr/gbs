// This file is deprecated - reservation data is now handled via cookies in reservationStore.ts
// Keeping for backward compatibility, but these functions are no longer used

export interface ReservationUrlData {
  from: string;
  destination: string;
  date: Date;
  travelers: number;
}

// Deprecated: Use useReservationStore instead
export const encodeReservationToUrl = (data: ReservationUrlData): string => {
  console.warn(
    "encodeReservationToUrl is deprecated. Use cookies via reservationStore instead."
  );
  const params = new URLSearchParams();
  params.set("from", data.from);
  params.set("destination", data.destination);
  params.set("date", data.date.toISOString());
  params.set("travelers", data.travelers.toString());
  return params.toString();
};

// Deprecated: Use useReservationStore instead
export const decodeReservationFromUrl = (
  searchParams: URLSearchParams
): ReservationUrlData | null => {
  console.warn(
    "decodeReservationFromUrl is deprecated. Use cookies via reservationStore instead."
  );
  const from = searchParams.get("from");
  const destination = searchParams.get("destination");
  const dateStr = searchParams.get("date");
  const travelersStr = searchParams.get("travelers");

  if (!from || !destination || !dateStr || !travelersStr) {
    return null;
  }

  const date = new Date(dateStr);
  const travelers = parseInt(travelersStr, 10);

  if (isNaN(date.getTime()) || isNaN(travelers) || travelers < 1) {
    return null;
  }

  return {
    from,
    destination,
    date,
    travelers,
  };
};

// Deprecated: Use useReservationStore instead
export const formatReservationForDisplay = (data: ReservationUrlData) => {
  console.warn(
    "formatReservationForDisplay is deprecated. Use cookies via reservationStore instead."
  );
  return {
    from: data.from,
    destination: data.destination,
    date: data.date.toLocaleDateString(),
    travelers: data.travelers,
  };
};
