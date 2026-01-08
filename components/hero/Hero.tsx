import ReserveTicket from "../reserve-ticket/ReserveTicket";
import Image from "next/image";
import bus from "@/public/bus.png";
import { IconClock } from "@tabler/icons-react";
import IconTicket from "../Icons/IconTicket";
import { formatNumber, separateNumber } from "@/utils/formatNumber";

function Hero() {
  return (
    <div className="bg-[#F2F2F2] border border-[#D4D4D4]/65 rounded-2xl relative px-10 max-sm:px-6 max-sm:py-20 py-30 overflow-hidden">
      <div className="flex flex-col relative z-1">
        <h2 className="font-normal max-[720px]:w-full max-[720px]:text-center">
          Travel Across Malawi for Less
        </h2>
        <p className="opacity-80 pl-1 mt-1  max-[720px]:w-full max-[720px]:text-center">
          We offer affordable bus tickets for your next trip.
        </p>

        <div className="flex flex-col space-y-1 5">
          <ReserveTicket />
          <div className="flex max-[720px]:mx-auto items-center space-x-5 px-1.5 opacity-75">
            <span className="space-x-1.5 flex items-center font-p3">
              <IconClock className="h-3 w-3 opacity-50" />
              <span className="flex items-center space-x-0.5">
                <span>7</span>
                <span className="opacity-50">Hours</span>
              </span>
            </span>

            <span className="space-x-1.5  flex items-center font-p3">
              <IconTicket className="h-3 w-3 opacity-50" />
              <span className="flex items-center space-x-0.5">
                <span>
                  <span>{formatNumber(separateNumber("39999.00").whole)}</span>
                  <span className="opacity-50">{separateNumber("39999.00").decimal}</span>
                </span>
                <span className="opacity-50">Hours</span>
              </span>
            </span>
          </div>
        </div>
      </div>

      <Image
        src={bus}
        alt="illustration of a bus"
        className="absolute w-fit h-120 max-[720px]:hidden -right-30 top-2 opacity-10 z-0"
      />
    </div>
  );
}

export default Hero;
