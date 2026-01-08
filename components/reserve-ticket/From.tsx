"use client";

import { IconCheck, IconChevronDown } from "@tabler/icons-react";
import IconMapPin from "../Icons/IconMapPin";
import { useRef, useState } from "react";
import { cities } from "@/data/schedule";
import { useClickOutside } from "@/utils/clickOutSide";

interface FromProps {
  value: string;
  onChange: (value: string) => void;
}

function From({ value, onChange }: FromProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useClickOutside<HTMLDivElement>(containerRef, () => {
    if (show) setShow(false);
  });

  
  return (
    <div ref={containerRef} className="relative flex">
      <div
        
        className="w-full border relative z-1 cursor-pointer py-1 px-1.5 border-[#EDEDED] rounded-[0.48rem] bg-[#F5F5F5] flex flex-col space-y-1"
      >
        <span className="flex items-center opacity-50 font-p3">
          <IconMapPin className="h-2.5 w-2.5 opacity-50 mr-0.5" />
          From
        </span>

        <div
          onClick={() => setShow(!show)}
          className="w-full flex items-center"
        >
          <span className="text-[calc(var(--p2)*0.9)] max-[720px]:font-p2">
            {value || "Departing from"}
          </span>
          <IconChevronDown
            strokeWidth={1.5}
            className={`h-3 w-3 ${
              show ? "rotate-180" : "rotate-0"
            } opacity-50 ml-auto [transition:ease_0.35s]`}
          />
        </div>
      </div>
      {show && (
        <div className="popup left-0 w-40 absolute">
          <span className="w-full font-medium opacity-50 border-b border-b-(--border) py-2 px-3 font-p2 mb-1">
            Choose a city
          </span>

          {cities &&
            cities.map((c) => (
              <span
                key={c.id}
                onClick={() => {
                  onChange(c.name);
                  setShow(false);
                }}
                className="option w-[95%] relative rounded-[0.35rem] mx-auto space-x-2 font-p2 px-2 py-[0.35rem] cursor-pointer bg-white hover:brightness-90 flex items-center"
              >
                <span className="opacity-75">{c.name}</span>

                {c.name === value && (
                  <span className="absolute right-0">
                    <IconCheck
                      stroke={2}
                      color={"var(--icon-black)"}
                      className="h-4 w-4 opacity-65"
                    />
                  </span>
                )}
              </span>
            ))}
        </div>
      )}
    </div>
  );
}

export default From;
