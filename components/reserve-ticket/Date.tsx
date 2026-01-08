"use client";

import "@/css/calendar.css";
import { formatDate } from "@/utils/formatdate.utils";
import IconCalendar from "../Icons/IconCalendar";
import { useEffect, useMemo, useRef, useState } from "react";
import { useClickOutside } from "@/utils/clickOutSide";

import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  format,
  isSameDay,
  isBefore,
  startOfDay,
} from "date-fns";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface DateProps {
  value: Date | null;
  onChange: (value: Date | null) => void;
}

type PresetType = "tomorrow" | "week" | "twoWeeks";

const shortWeekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function DatePicker({ value, onChange }: DateProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useClickOutside<HTMLDivElement>(containerRef, () => {
    if (show) setShow(false);
  });
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState<Date>(startOfMonth(today));

  useEffect(() => {
    if (value) {
      setCurrentMonth(startOfMonth(value));
    }
  }, [value]);

  const calendarDays = useMemo<Date[]>(() => {
    const start = startOfWeek(startOfMonth(currentMonth), {
      weekStartsOn: 1,
    });
    const end = endOfWeek(endOfMonth(currentMonth), {
      weekStartsOn: 1,
    });
    const days: Date[] = [];
    let cursor = start;
    while (cursor <= end) {
      days.push(cursor);
      cursor = addDays(cursor, 1);
    }
    return days;
  }, [currentMonth]);

  const goToPrevMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const selectDate = (day: Date) => {
    onChange(day);
    setShow(false);
  };

  const getPresetDate = (type: PresetType): Date => {
    switch (type) {
      case "tomorrow":
        return addDays(today, 1);
      case "week":
        return addDays(today, 7);
      case "twoWeeks":
        return addDays(today, 14);
      default:
        return today;
    }
  };

  const isPresetActive = (type: PresetType): boolean => {
    return value !== null && isSameDay(value, getPresetDate(type));
  };

  const selectPreset = (type: PresetType) => {
    const d = getPresetDate(type);
    selectDate(d);
    setCurrentMonth(startOfMonth(d));
  };

  return (
    <div ref={containerRef} className="relative flex">
      <div  onClick={() => setShow(!show)} className="w-full border relative z-1 cursor-pointer py-1 px-1.5 border-[#EDEDED] rounded-[0.48rem] bg-[#F5F5F5] flex flex-col space-y-1.5">
        <span className="flex items-center opacity-50 font-p3">
          <IconCalendar className="h-2.5 w-2.5 opacity-50 mr-0.5" />
          Date
        </span>

        <div className="w-full flex items-center">
          <span
            className="w-full cursor-pointer text-[calc(var(--p2)*0.9)] max-[720px]:font-p2"
            onClick={() => setShow(!show)}
          >
            {value ? formatDate(value) : "Departure date"}
          </span>
        </div>
      </div>

      {show && (
        <div className="popup w-82 max-sm:w-[calc(100vw-5.45rem)] font-p2">
          <span className="w-full font-medium opacity-50 border-b border-b-(--border) py-2 px-4 font-p2 mb-1">
            When are you traveling?
          </span>
          <div className="flex flex-col w-full px-2 mt-1">
            <div className="presets gap-2 font-p3">
              <button
                type="button"
                onClick={() => selectPreset("tomorrow")}
                className={isPresetActive("tomorrow") ? "active" : ""}
              >
                Tomorrow
              </button>
              <button
                type="button"
                onClick={() => selectPreset("week")}
                className={isPresetActive("week") ? "active" : ""}
              >
                In a week
              </button>
              <button
                type="button"
                onClick={() => selectPreset("twoWeeks")}
                className={isPresetActive("twoWeeks") ? "active" : ""}
              >
                In two weeks
              </button>
            </div>

            <div className="flex flex-col gap-2 mt-1">
              <div className="month-nav">
                <button type="button" onClick={goToPrevMonth}>
                  <IconChevronLeft className="h-3 w-3" />
                </button>
                <span className="month-title opacity-75">
                  {format(currentMonth, "MMMM, yyyy")}
                </span>
                <button type="button" onClick={goToNextMonth}>
                  <IconChevronRight className="h-3 w-3" />
                </button>
              </div>

              <div className="weekdays opacity-50 font-p3">
                {shortWeekdays.map((d) => (
                  <div key={d} className="weekday font-semibold">
                    {d}
                  </div>
                ))}
              </div>

              <div className="days-grid">
                {calendarDays.map((day) => {
                  const isDisabledDay = isBefore(
                    startOfDay(day),
                    startOfDay(today)
                  );
                  const isSelected = value !== null && isSameDay(day, value);

                  return (
                    <div
                      key={day.toString()}
                      className={`day sora ${isDisabledDay ? "disabled" : ""} ${
                        isSelected ? "selected" : ""
                      }`}
                      onClick={() => !isDisabledDay && selectDate(day)}
                    >
                      {format(day, "d")}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DatePicker;
