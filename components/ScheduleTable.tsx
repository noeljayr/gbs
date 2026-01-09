import { busSchedule } from "@/data/schedule";
import { formatNumber } from "@/utils/formatNumber";
import ReserveButton from "./ReserveButton";
import MobileScheduleSwiper from "./MobileScheduleSwiper";

function ScheduleTable() {
  return (
    <div id="models" className="flex flex-col space-y-6">
      <div className="flex flex-col items-center">
        <h3>Where Are You Traveling Today?</h3>
        <p className="opacity-75 w-[54ch] text-center max-sm:w-full">
          Take a look at our routes, bus stops, schedules and estimated arrival
          time for your journey across Malawi.
        </p>
      </div>

      {/* Desktop Table View */}
      <div className="w-full flex-col hidden md:flex">
        <div className="grid grid-cols-[45%_1fr_5rem] border-b border-b-(--border) pb-2">
          <div className="w-full grid grid-cols-[2rem_1fr_1fr_1fr] opacity-50">
            <span className="font-medium"></span>
            <span className="font-medium">From</span>
            <span className="font-medium">Destination</span>
            <span className="font-medium">Price</span>
          </div>
          <div className="w-full grid grid-cols-[1fr_20%_20%] opacity-50">
            <span className="font-medium">Bus stops</span>
            <span className="font-medium">Depature time</span>
            <span className="font-medium">Arrival time</span>
          </div>
          <span className="font-medium"></span>
        </div>

        {busSchedule.map((s) => (
          <div
            key={s.id}
            className="grid grid-cols-[45%_1fr_5rem] border-b py-2 border-b-(--border)"
          >
            <div className="w-full grid grid-cols-[2rem_1fr_1fr_1fr]">
              <span
                style={{
                  WebkitTextStrokeWidth: 1,
                  WebkitTextStrokeColor: "var(--black)",
                }}
                className=" text-white opacity-10 font-bold flex items-center font-h2"
              >
                {s.id}
              </span>
              <span className="flex items-center opacity-75">{s.from}</span>
              <span className="flex items-center opacity-75">
                {s.destination}
              </span>
              <span className="flex items-center font-p3">
                <span className="p-1 bg-[#F5F5F5] border rounded-[0.45rem] border-[#E3E3E3] w-fit">
                  <span className="opacity-85 font-medium">
                    K{" "}
                    <span className="mr-0.5 font-medium">
                      {formatNumber(s.fare.toFixed(2))}
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="w-full grid grid-cols-[1fr_20%_20%] items-center">
              <span className="flex items-center overflow-x-auto pr-2 opacity-75">
                {s.busStops.map((t, index) => (
                  <span
                    key={index}
                    className="last:after:content-[''] after:content-[','] mr-1 last:mr-0"
                  >
                    {t}
                  </span>
                ))}
              </span>
              <span className="flex items-center opacity-75">
                {s.departureTime}
              </span>
              <span className="flex items-center opacity-75">
                {s.arrivalTime}
              </span>
            </div>
            <div className="flex items-center">
              <ReserveButton from={s.from} destination={s.destination} />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Card View with Swiper */}
      <MobileScheduleSwiper />
    </div>
  );
}

export default ScheduleTable;
