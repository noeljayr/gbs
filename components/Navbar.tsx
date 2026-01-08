"use client";

import { setUrlParam } from "@/utils/url-functions";
import {
  IconChevronDown,
  IconChevronRight,
  IconMenu,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  if (pathname.startsWith("/checkout")) {
    return <></>;
  }
  return (
    <div className="fixed w-screen bg-white z-50 top-0 left-0 px-10 max-sm:px-4 min-[1440px]:px-[14vw] py-6 flex items-center justify-center">
      <Link href={"/"} className="font-bold  ">
        Gian{`’`}s Bus Services
      </Link>

      <div className="flex ml-auto space-x-6">
        <div className="flex items-center max-[720px]:hidden space-x-6">
          <Link className="font-medium " href={"/"}>
            Home
          </Link>
          <Link className="font-medium " href={"/#schedule"}>
            Schedule
          </Link>
          <Link className=" font-medium" href={"/contact"}>
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <a
            className="font-bold flex items-center space-x-1.5 max-[720px]:hidden"
            href={"tel:+265881234567"}
          >
            Call us

            <IconChevronRight className="h-3 w-3 opacity-50" />
          </a>

          <Link href="/#reserve-ticket" className="cta">
            Reserve A ticket
          </Link>

          <div className="min-[720px]:hidden">
            <button
              onClick={() => setUrlParam("mobile-navigation", "true")}
              className="h-7 w-7 flex items-center justify-center rounded-[0.35rem] ml-auto  bg-[#1E1E1E]/5 border  border-[#1E1E1E]/10"
            >
              <IconMenu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
