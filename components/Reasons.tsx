import carseat from "@/public/car-seat.png";
import wallet from "@/public/wallet.png";
import security from "@/public/security.png";
import stopwatch from "@/public/stopwatch.png";
import Image from "next/image";

function Reasons() {
  return (
    <div className="flex flex-col space-y-8  p-8 max-sm:px-4 bg-[#FCFCFC] border border-[#E6E6E6] rounded-2xl">
      <div className="flex flex-col items-center">
        <h3>Reasons to travel with us.</h3>
        <p className="opacity-75 w-[54ch] text-center max-sm:w-full">
          We put you at the center of everything: safe, fast and comfortable
          travel at fares that fit your budget.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 w-full overflow-x-auto max-sm:grid-flow-col">
        <div className="flex flex-col space-y-4 max-sm:w-[16rem] max-sm:p-2 max-sm:bg-[#1E1E1E]/2 rounded-xl max-sm:border  border-[#1E1E1E]/5">
          <span className="h-10 w-10 bg-[#F6ECFF] rounded-[0.4rem] flex items-center justify-center">
            <Image src={wallet} alt="wallet icon" className="h-6 w-6" />
          </span>

          <div className="flex flex-col space-y-1.5">
            <span className="font-p1 font-medium">Save more</span>
            <p className="opacity-75 text-[calc(var(--p2)*0.9)]">
              Enjoy premium travel experiences at prices that fit your pocket
              without compromising on quality.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-4 max-sm:w-[16rem] max-sm:p-2 max-sm:bg-[#1E1E1E]/2 rounded-xl max-sm:border  border-[#1E1E1E]/5">
          <span className="h-10 w-10 bg-[#E9F2FF] rounded-[0.4rem] flex items-center justify-center">
            <Image src={stopwatch} alt="wallet icon" className="h-6 w-6" />
          </span>

          <div className="flex flex-col space-y-1.5">
            <span className="font-p1 font-medium">Travel Faster</span>
            <p className="opacity-75 text-[calc(var(--p2)*0.85)]">
              We value your time. Experience optimized travel paths and punctual
              schedules to get you there faster.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-4 max-sm:w-[16rem] max-sm:p-2 max-sm:bg-[#1E1E1E]/2 rounded-xl max-sm:border  border-[#1E1E1E]/5">
          <span className="h-10 w-10 bg-[#E5FAEE] rounded-[0.4rem]  flex items-center justify-center">
             <Image src={carseat} alt="wallet icon" className="h-6 w-6" />
          </span>

          <div className="flex flex-col space-y-1.5">
            <span className="font-p1 font-medium">Travel with comfort</span>
            <p className="opacity-75 text-[calc(var(--p2)*0.9)]">
              Relax in spacious, climate-controlled interiors designed to make
              your journey as smooth as the destination
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-4 max-sm:w-[16rem] max-sm:p-2 max-sm:bg-[#1E1E1E]/2 rounded-xl max-sm:border  border-[#1E1E1E]/5">
          <span className="h-10 w-10 bg-[#FFF0E5]  rounded-[0.4rem]  flex items-center justify-center">
             <Image src={security} alt="wallet icon" className="h-6 w-6" />
          </span>

          <div className="flex flex-col space-y-1.5">
            <span className="font-p1 font-medium">Your Safety First</span>
            <p className="opacity-75 text-[calc(var(--p2)*0.9)]">
              Travel with peace of mind. Our fleet undergoes daily inspections
              and our drivers are professionally certified and vetted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
