"use client";
import Travelers from "./Travelers";
import DatePicker from "./Date";
import Destination from "./Destination";
import From from "./From";
import { useState, useEffect } from "react";
import { useReservationStore } from "@/utils/reservationStore";
import { useRouter } from "nextjs-toploader/app";

interface ReserveTicketProps {
  onReserve?: (data: {
    from: string;
    destination: string;
    date: Date | null;
    travelers: number;
  }) => void;
}

function ReserveTicket({ onReserve }: ReserveTicketProps) {
  const router = useRouter();
  const {
    from: storeFrom,
    destination: storeDestination,
    setFullReservationData,
  } = useReservationStore();

  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [travelers, setTravelers] = useState(1);

  // Prepopulate data from store when it changes
  useEffect(() => {
    if (storeFrom && storeDestination) {
      setFrom(storeFrom);
      setDestination(storeDestination);
      // Don't clear the store data here - let it persist for checkout
    }
  }, [storeFrom, storeDestination]);

  // Update parent component whenever form data changes
  useEffect(() => {
    if (onReserve) {
      onReserve({
        from,
        destination,
        date,
        travelers,
      });
    }
  }, [from, destination, date, travelers, onReserve]);

  const handleReserveClick = () => {
    const reservationData = {
      from,
      destination,
      date,
      travelers,
    };

    console.log("ReserveTicket - saving reservation data:", reservationData);

    if (date) {
      // Save reservation data to cookies via store
      setFullReservationData(reservationData);

      // Small delay to ensure cookie is set before navigation
      setTimeout(() => {
        console.log("ReserveTicket - navigating to checkout");
        router.push("/checkout");
      }, 100);
    }
  };

  const isFormValid = from && destination && date && travelers > 0;

  return (
    <div className="mt-6 w-130 max-[720px]:w-full grid gap-1 grid-cols-[1fr_auto] max-[720px]:grid-cols-1 bg-white rounded-[0.55rem] border border-[#1E1E1E]/10 p-1">
      <div className="flex flex-col space-y-2">
        <div className="grid relative z-2 grid-cols-[1fr_1fr_6rem_5rem] max-[720px]:w-full max-[720px]:grid-cols-2 gap-1">
          <From value={from} onChange={setFrom} excludeCity={destination} />
          <Destination
            value={destination}
            onChange={setDestination}
            excludeCity={from}
          />
          <DatePicker value={date} onChange={setDate} />
          <Travelers value={travelers} onChange={setTravelers} />
        </div>
      </div>
      <button
        onClick={handleReserveClick}
        disabled={!isFormValid}
        style={{
          cursor: isFormValid ? "pointer" : "not-allowed",
        }}
        className="cta h-full px-4 max-[720px]:w-full max-[720px]:h-10"
      >
        Reserve
      </button>
    </div>
  );
}

export default ReserveTicket;
