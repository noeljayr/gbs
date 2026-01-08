"use client";

import { IconChevronRight } from "@tabler/icons-react";
import { useReservationStore } from "@/utils/reservationStore";

interface ReserveButtonProps {
  from: string;
  destination: string;
}

function ReserveButton({ from, destination }: ReserveButtonProps) {
  const setReservationData = useReservationStore(
    (state) => state.setReservationData
  );

  const handleReserveClick = () => {
    setReservationData(from, destination);

    // Scroll to the reserve ticket section
    const reserveSection = document.getElementById("reserve-ticket");
    if (reserveSection) {
      reserveSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleReserveClick}
      className="flex items-center md:font-p3 max-md:font-p1 max-md:h-10 max-md:w-full max-md:justify-center max-md:rounded-xl max-dm:font-p1 bg-[#FAFAFA] rounded-[0.4rem] px-2 py-1.5 border border-(--black)/10"
    >
      Reserve
      <IconChevronRight className="h-3 w-3 max-md:h-4 max-md:w-4 opacity-50" />
    </button>
  );
}

export default ReserveButton;
