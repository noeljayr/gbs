export interface ReservationUrlData {
  from: string;
  destination: string;
  date: Date;
  travelers: number;
}

export const encodeReservationToUrl = (data: ReservationUrlData): string => {
  const params = new URLSearchParams();
  params.set("from", data.from);
  params.set("destination", data.destination);
  params.set("date", data.date.toISOString());
  params.set("travelers", data.travelers.toString());
  return params.toString();
};

export const decodeReservationFromUrl = (
  searchParams: URLSearchParams
): ReservationUrlData | null => {
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

export const formatReservationForDisplay = (data: ReservationUrlData) => {
  return {
    from: data.from,
    destination: data.destination,
    date: data.date.toLocaleDateString(),
    travelers: data.travelers,
  };
};
