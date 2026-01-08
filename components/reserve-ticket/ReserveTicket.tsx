"use client";
import Travelers from "./Travelers";
import Date from "./Date";
import Destination from "./Destination";
import From from "./From";
import { useState } from "react";

interface ReserveTicketProps {
  onReserve?: (data: {
    from: string;
    destination: string;
    date: string;
    travelers: number;
  }) => void;
}

function ReserveTicket({ onReserve }: ReserveTicketProps) {
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState(1);

  const handleReserve = () => {
    const reservationData = {
      from,
      destination,
      date,
      travelers,
    };

    if (onReserve) {
      onReserve(reservationData);
    } else {
      console.log("Reservation data:", reservationData);
    }
  };

  const isFormValid = from && destination && date && travelers > 0;

  return (
    <div
      id="reserve-ticket"
      className="mt-6 w-130 max-[720px]:w-full grid gap-1 grid-cols-[1fr_auto] max-[720px]:grid-cols-1 bg-white rounded-[0.55rem] border border-[#1E1E1E]/10 p-1"
    >
      <div className="flex flex-col space-y-2">
        <div className="grid relative z-2 grid-cols-[1fr_1fr_6rem_5rem] max-[720px]:w-full max-[720px]:grid-cols-2 gap-1">
          <From value={from} onChange={setFrom} />
          <Destination value={destination} onChange={setDestination} />
          <Date value={date} onChange={setDate} />
          <Travelers value={travelers} onChange={setTravelers} />
        </div>
      </div>
      <button
        onClick={handleReserve}
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
