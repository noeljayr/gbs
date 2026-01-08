"use client";

import { useRef, useState } from "react";
import IconUser from "../Icons/IconUser";
import { useClickOutside } from "@/utils/clickOutSide";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useNumericInput } from "@/utils/userNumericInput";
import NumberFlow from "@number-flow/react";


interface TravelersProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

function Travelers({ value, onChange }: TravelersProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useClickOutside<HTMLDivElement>(containerRef, () => {
    if (show) setShow(false);
  });

  const numericInput = useNumericInput({
    initialValue: value.toString(),
    min: 1, // At least 1 traveler
    max: 5, // Maximum 99 travelers
  });

  // Update parent when numeric input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    numericInput.handleChange(e);
    const numValue = parseInt(e.target.value) || 0;
    if (numValue > 0) {
      onChange(numValue);
    }
  };

  // Handle increment button
  const handleIncrement = () => {
    numericInput.increment();
    const newValue = (numericInput.numericValue || 0) + 1;
    onChange(newValue);
  };

  // Handle decrement button
  const handleDecrement = () => {
    numericInput.decrement();
    const newValue = (numericInput.numericValue || 0) - 1;
    onChange(newValue);
  };

  return (
    <div ref={containerRef} className="flex relative">
      <div  onClick={() => setShow(!show)} className="w-full border relative z-1 cursor-pointer py-1 px-1.5 border-[#EDEDED] rounded-[0.48rem] bg-[#F5F5F5] flex flex-col space-y-1">
        <span className="flex items-center opacity-50 font-p3">
          <IconUser className="h-2.5 w-2.5 opacity-50 mr-0.5" />
          Travelers
        </span>

        <div className="w-full flex items-center">
          <span className="w-full outline-0 border-0 bg-transparent text-[calc(var(--p2)*0.9)] max-[720px]:font-p2">
           <NumberFlow style={{
            fontSize: 'calc(var(--p2) * 0.9)'
           }} value={value} />
          </span>
        </div>
      </div>

      {show && (
        <div className="popup min-[720px]:left-0 max-[720px]:right-0 w-40 absolute">
          <span className="w-full font-medium opacity-50 border-b border-b-(--border) py-2 px-3 font-p2 mb-1">
            How many tickets?
          </span>

          <div className="px-3 grid grid-cols-[auto_1fr_auto] gap-1">
            <button
              onClick={handleDecrement}
              disabled={!numericInput.canDecrement}
              className="h-[1.6rem] w-[1.6rem] bg-black/5 border border-black/5 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/10 transition-colors"
            >
              <IconMinus className="h-3 w-3 opacity-75" />
            </button>
            <input
              className="w-full h-[1.6rem] rounded-full text-center bg-[#F9F8F7]/85 border border-[#E7E7E7] outline-0  text-[calc(var(--p2)*0.9)] max-[720px]:font-p2"
              type="text"
              inputMode="numeric"
              value={numericInput.value}
              onChange={handleInputChange}
              onKeyDown={numericInput.handleKeyDown}
              onPaste={numericInput.handlePaste}
              onBlur={(e) => {
                if (!e.target.value || e.target.value.trim().length == 0) {
                  onChange(1);
                  numericInput.setValue("1");
                } else {
                  const numValue = parseInt(e.target.value);
                  if (numValue > 0) {
                    onChange(numValue);
                  } else {
                    onChange(1);
                    numericInput.setValue("1");
                  }
                }
              }}
            />
            <button
              onClick={handleIncrement}
              disabled={!numericInput.canIncrement}
              className="h-[1.6rem] w-[1.6rem] bg-black/5 border border-black/5 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/10 transition-colors"
            >
              <IconPlus className="h-3 w-3 opacity-75" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Travelers;
