import Image from "next/image";
import bus from "@/public/bus.png";
import ReserveTicketWrapper from "../reserve-ticket/ReserveWrapper";

function Hero() {
  return (
    <div
      id="reserve-ticket"
      className="bg-[#F2F2F2] border border-[#D4D4D4]/65 rounded-2xl relative px-10 max-sm:px-6 max-sm:py-20 py-30"
    >
      <div className="flex flex-col relative z-1">
        <h2 className="font-normal max-[720px]:w-full max-[720px]:text-center">
          Travel Across Malawi for Less
        </h2>
        <p className="opacity-80 pl-1 mt-1  max-[720px]:w-full max-[720px]:text-center">
          We offer affordable bus tickets for your next trip.
        </p>

        <ReserveTicketWrapper />
      </div>

      <div className="w-full h-full grid absolute z-0 overflow-hidden top-0 left-0">
        <Image
          src={bus}
          alt="illustration of a bus"
          className="absolute w-fit h-120 max-[720px]:h-[unset] max-[720px]:w-scree max-[720px]:scale-[1.25] object-contain -right-30 top-2 max-[720px]:top-[33%] max-[720px]:-right-15 opacity-10 z-0"
        />
      </div>
    </div>
  );
}

export default Hero;
