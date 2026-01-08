"use client";
import { cities } from "@/data/schedule";
import IconMapPin2 from "../Icons/IconMapPin2";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { useClickOutside } from "@/utils/clickOutSide";

interface DestinationProps {
  value: string;
  onChange: (value: string) => void;
  excludeCity?: string;
}

function Destination({ value, onChange, excludeCity }: DestinationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useClickOutside<HTMLDivElement>(containerRef, () => {
    if (show) setShow(false);
  });

  return (
    <div ref={containerRef} className="flex relative">
      <div
        onClick={() => setShow(!show)}
        className="w-full relative z-1 border cursor-pointer py-1 px-1.5 border-[#EDEDED] rounded-[0.48rem] bg-[#F5F5F5] flex flex-col space-y-1.5"
      >
        <span className="flex items-center opacity-50 font-p3">
          <IconMapPin2 className="h-2.5 w-2.5 opacity-50 mr-0.5" />
          Destination
        </span>

        <div className="w-full flex items-center">
          <span className="text-[calc(var(--p2)*0.9)] max-[720px]:font-p2">
            {value || "Where to"}
          </span>
          <IconChevronDown
            strokeWidth={1.5}
            className="h-3 w-3 opacity-50 ml-auto"
          />
        </div>
      </div>

      {show && (
        <div className="popup min-[720px]:left-0 max-[720px]:right-0 w-40 absolute">
          <span className="w-full font-medium opacity-50 border-b border-b-(--border) py-2 px-3 font-p2 mb-1">
            Choose a city
          </span>

          {cities &&
            cities
              .filter((c) => !excludeCity || c.name !== excludeCity)
              .map((c) => (
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

export default Destination;
