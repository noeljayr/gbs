import Reasons from "@/components/Reasons";
import ScheduleTable from "@/components/ScheduleTable";
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/hero/Hero";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";




export default function Home() {
  return (
    <main className="flex flex-col space-y-20">
      <Hero />
      <ScheduleTable />
      <Reasons />
      <Testimonials />
      <div className="w-full flex justify-center p-8 max-sm:px-4 bg-[#FCFCFC] border border-[#E6E6E6] rounded-2xl">
        <div className="flex flex-col items-center  w-[48ch] max-sm:w-full">
          <h4 className="text-center max-sm:full">
            Travel smarter, reserve your seat today
          </h4>
          <p className="w-full text-center opacity-75 max-sm:w-full">
            Join others on your trip using premium bus service for less of your
            money without comprising comfort and quality.
          </p>

          <div className="flex items-center space-x-4 mt-4">
            <Link href="/#reserve-ticket" className="cta">
              Reserve A ticket
            </Link>

            <a
              className="font-semibold flex items-center space-x-1.5"
              href={"tel:+265881234567"}
            >
              Call us
              <IconChevronRight className="h-3 w-3 opacity-50" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
