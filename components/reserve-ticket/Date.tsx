"use client";
import IconCalendar from "../Icons/IconCalendar";

interface DateProps {
  value: string;
  onChange: (value: string) => void;
}

function Date({ value, onChange }: DateProps) {
  return (
    <div className="w-full border relative z-1 cursor-pointer py-1 px-1.5 border-[#EDEDED] rounded-[0.48rem] bg-[#F5F5F5] flex flex-col space-y-1">
      <span className="flex items-center opacity-50 font-p3">
        <IconCalendar className="h-2.5 w-2.5 opacity-50 mr-0.5" />
        Date
      </span>

      <div className="w-full flex items-center">
        <span className="w-full cursor-pointer text-[calc(var(--p2)*0.9)] max-[720px]:font-p2">
          {value || "Departure date"}
        </span>
      </div>
    </div>
  );
}

export default Date;
