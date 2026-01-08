"use client";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/checkout")) {
    return <></>;
  }

  return (
    <div className="flex flex-col py-10">
      <div className="w-full flex max-sm:flex-col max-sm:gap-10 justify-between">
        <div className="flex flex-col">
          <span className="font-bold font-p1">Gian’s Bus Services</span>
          <span className="font-normal mt-1 opacity-75 font-p3">
            Malawi’s affordable bus service
          </span>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="font-semibold">Quick Links</span>
          <Link
            className="opacity-75 hover:underline decoration-dashed decoration-(--primary)"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="opacity-75 hover:underline  decoration-(--primary) decoration-dashed "
            href={"/#schedule"}
          >
            Schedule
          </Link>
          <Link
            className="opacity-75 hover:underline decoration-dashed decoration-(--primary)"
            href={"/contact"}
          >
            Contact
          </Link>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="font-semibold">Company </span>
          <Link
            className="opacity-75 hover:underline decoration-dashed decoration-(--primary)"
            href={"/about"}
          >
            About us
          </Link>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="font-semibold">Travel with us </span>
          <Link
            className="opacity-75 hover:underline decoration-dashed decoration-(--primary)"
            href="/#reserve-ticket"
          >
            Reserve a ticket
          </Link>
          <Link
            className="opacity-75 hover:underline decoration-dashed decoration-(--primary)"
            href={"tel:+265881234567"}
          >
            Call us
          </Link>
        </div>
      </div>

      <div className="flex items-center w-full mt-6">
        <div className="flex space-x-2">
          <span className="font-normal">© 2025</span>

          {/* <span className="opacity-25">•</span>

          <span className="font-normal opacity-65">Terms</span>

          <span className="opacity-25">•</span>

          <span className="font-normal opacity-65">Privacy</span> */}
        </div>

        <div className="flex item-center space-x-2 ml-auto mt-6">
          <IconBrandInstagram
            strokeWidth={1.5}
            className="h-5 w-5 opacity-75"
          />
          <IconBrandFacebook strokeWidth={1.5} className="h-5 w-5 opacity-75" />
          <IconBrandX strokeWidth={1.5} className="h-5 w-5 opacity-75" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
