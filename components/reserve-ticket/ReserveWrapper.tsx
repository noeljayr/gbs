"use client";

import ReserveTicket from "../reserve-ticket/ReserveTicket";
import { IconClock } from "@tabler/icons-react";
import IconTicket from "../Icons/IconTicket";
import {separateNumber } from "@/utils/formatNumber";
import { busSchedule } from "@/data/schedule";
import { useState } from "react";
import NumberFlow from "@number-flow/react";

function ReserveTicketWrapper() {
  const [reservationData, setReservationData] = useState({
    from: "",
    destination: "",
    date: null as Date | null,
    travelers: 1,
  });

  // Find matching schedule based on from and destination
  const matchingSchedule = busSchedule.find(
    (schedule) =>
      schedule.from === reservationData.from &&
      schedule.destination === reservationData.destination
  );

  const hourDifference = matchingSchedule?.hourDifference || 7;
  const totalPrice = matchingSchedule
    ? matchingSchedule.fare * reservationData.travelers
    : 39999.0;
  return (
    <div className="flex flex-col space-y-1 5">
      <ReserveTicket onReserve={setReservationData} />

      <div
        className={`flex [transition:0.35s] max-[720px]:mx-auto items-center space-x-5 px-1.5 ${
          reservationData.from && reservationData.destination
            ? "opacity-75"
            : "opacity-0"
        }`}
      >
        <span className="space-x-1.5 flex items-center font-p3">
          <IconClock className="h-3 w-3 opacity-50" />
          <span className="flex items-center space-x-0.5">
            <span>
              <NumberFlow value={hourDifference} />
            </span>
            <span className="opacity-50">Hours</span>
          </span>
        </span>

        <span className="space-x-1.5  flex items-center font-p3">
          <IconTicket className="h-3 w-3 opacity-50" />
          <span className="flex items-center space-x-0.5">
            <span>
              K
              <span>
                <NumberFlow
                  value={parseInt(separateNumber(totalPrice.toFixed(2)).whole)}
                />
              </span>
              <span className="opacity-50">
                {separateNumber(totalPrice.toFixed(2)).decimal}
              </span>
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default ReserveTicketWrapper;
