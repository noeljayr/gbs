import fourStars from "@/public/4.png";
import fiveStars from "@/public/5.png";
import { IconRoute } from "@tabler/icons-react";
import Image from "next/image";

const reviews = [
  {
    name: "Sarah T.",
    rating: 5.0,
    route: "Lilongwe to Blantyre",
    review:
      "I usually worry about road safety on long trips, but this service is different. The driver was professional and never exceeded speed limits. It's the first time I’ve felt truly secure traveling to Blantyre. Highly recommended for anyone who values safety.",
  },
  {
    name: "Chimwemwe K.",
    rating: 4.5,
    route: "Mzuzu to Lilongwe",
    review:
      "Best comfort for the price! I took the 7:00 AM bus from Mzuzu and arrived in Lilongwe exactly at 1:00 PM as scheduled. The air conditioning was perfect and the seats were very spacious. A great way to travel without the usual stress.",
  },
  {
    name: "Blessings T.",
    rating: 5.0,
    route: "Blantyre to Mzuzu",
    review:
      "Traveling across the country can be expensive, but the K69,999 fare for the long trip to Mzuzu is very fair for the quality you get. The bus was clean and the staff were incredibly helpful with my luggage. I will definitely book again.",
  },
];

function Testimonials() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col items-center">
        <h3>What fellow travelers are saying.</h3>
      </div>

      <div className="grid min-[800px]:grid-cols-3  max-[800px]:grid-flow-col overflow-x-auto gap-4">
        {reviews.map((r) => (
          <div key={r.name} className="bg-white max-[800px]:w-[40vw] max-sm:w-[80vw] border border-(--black)/10 rounded-xl flex flex-col">
            <div className="flex flex-col space-y-2 p-3 pt-4">
              <div className="flex items-center space-x-2">
                <Image
                  className="w-fit h-2.5"
                  src={r.rating === 5.0 ? fiveStars : fourStars}
                  alt={`${r.rating}`}
                />
                <span className="font-bold font-p3">{r.rating}</span>
              </div>

              <p className="opacity-75">{r.review}</p>
            </div>

            <div className="p-3 flex border-t border-t-(--black)/10">
              <span>{r.name}</span>
              <div className="flex items-center space-x-1.5 opacity-50 ml-auto font-p3">
                <IconRoute className="h-3.5 w-3.5 opacity-50" />
                <span className="">{r.route}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
