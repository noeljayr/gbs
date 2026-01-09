"use client";

import { useState, useEffect, useRef } from "react";
import { IconCheck, IconPalette } from "@tabler/icons-react";

const themes = [
  { name: "Green", color: "#0FC754", value: "green" },
  { name: "Orange", color: "#FFAE05", value: "orange" },
  { name: "Red", color: "#FF2605", value: "red" },
  { name: "Blue", color: "#0169b7", value: "blue" },
];

function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState("blue");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "blue";
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const applyTheme = (theme: string) => {
    const root = document.documentElement;

    switch (theme) {
      case "green":
        root.style.setProperty("--primary", "#0FC754");
        root.style.setProperty("--cta-color", "#ffff");
        break;
      case "Yellow":
        root.style.setProperty("--primary", "#FFAE05");
        root.style.setProperty("--cta-color", "#1E1E1E");
        break;
      case "red":
        root.style.setProperty("--primary", "#FF2605");
        root.style.setProperty("--cta-color", "#ffff");
        break;
      default:
        root.style.setProperty("--primary", "#0169b7");
        root.style.setProperty("--cta-color", "#ffff");
    }
  };

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem("theme", theme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-2 py-1 bg-black/5 border border-black/10 rounded-[0.35rem] opacity-75 hover:opacity-100 transition-opacity"
        aria-label="Change theme"
      >
        <IconPalette strokeWidth={1.5} className="h-3.5 w-3.5" />
        <span className="font-normal">Theme</span>
      </button>

      {isOpen && (
        <div className="theme-switcher-dropdown absolute bottom-full mb-1 left-0 bg-white border border-gray-200 rounded-lg shadow-sm p-1 min-w-[120px]">
          {themes.map((theme) => (
            <button
              key={theme.value}
              onClick={() => handleThemeChange(theme.value)}
              className={`flex items-center space-x-2 w-full p-1.5 text-left hover:bg-gray-50 rounded transition-colors ${
                currentTheme === theme.value ? "bg-gray-50" : ""
              }`}
            >
              <div
                className="w-3 h-3 rounded-full border border-black/20"
                style={{ backgroundColor: theme.color }}
              />
              <span className="font-p3">{theme.name}</span>

              {currentTheme === theme.value && (
                <IconCheck className="ml-auto h-4 w-4 opacity-50" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;
