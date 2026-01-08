"use client";

import { IconChevronRight, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { motionTransition } from "@/utils/motion-transition";
import { deleteUrlParam } from "@/utils/url-functions";

function MobileNav() {
  const [open, setOpen] = useState(true);
  const searchParams = useSearchParams();
  const state = searchParams.get("mobile-navigation");

  useEffect(() => {
    if (state && state == "true") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [state]);

  return (
    <>
      {open && (
        <div
          onClick={() => deleteUrlParam("mobile-navigation")}
          className="flex fixed z-100 h-screen w-screen  bg-[#1E1E1E]/10 left-0 top-0 flex-col p-4"
        ></div>
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={motionTransition()}
            className="flex min-[720px]:hidden border-l border-l-black/10 fixed z-101 h-screen w-[75vw] bg-white right-0 top-0 flex-col p-4"
          >
            <div className="flex items-center w-full">
              <span className="font-bold">Gian{`’`}s Bus Services</span>
              <button
                onClick={() => deleteUrlParam("mobile-navigation")}
                className="flex items-center justify-center ml-auto h-7 w-7  bg-[#1E1E1E]/5 border  border-[#1E1E1E]/10 rounded-[0.35rem]"
              >
                <IconX className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col space-y-4 my-10">
              <Link
                onClick={() => deleteUrlParam("mobile-navigation")}
                className=" "
                href={"/"}
              >
                Home
              </Link>
              <Link
                onClick={() => deleteUrlParam("mobile-navigation")}
                className=" "
                href={"/#schedule"}
              >
                Schedule
              </Link>
              <Link
                onClick={() => deleteUrlParam("mobile-navigation")}
                className=" "
                href={"/contact"}
              >
                Contact
              </Link>
              <Link
                onClick={() => deleteUrlParam("mobile-navigation")}
                className=" "
                 href={"tel:+265881234567"}
              >
                Call us
              </Link>
            </div>

            <Link href="/#reserve-ticket" className="cta">
              Reserve a ticket
              <IconChevronRight
                color="var(--white)"
                className="h-4 w-4 opacity-75"
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNav;
