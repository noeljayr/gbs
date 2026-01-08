import { format } from "date-fns";

export function formatDate(dateInput: string | Date | null): string {
  if (!dateInput) return "";
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  return format(date, "MMM d, yyyy");
}

export function formatDate2(
  isoDate: string,
  locale = navigator.language
): string {
  const date = new Date(isoDate);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);

  if (diffSec < 60) {
    return "less than 1 min";
  }

  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) {
    return `${diffMin} minute${diffMin !== 1 ? "s" : ""} ago`;
  }

  const diffHrs = Math.floor(diffMin / 60);
  if (diffHrs < 24) {
    return `${diffHrs} hour${diffHrs !== 1 ? "s" : ""} ago`;
  }

  const diffDays = Math.floor(diffHrs / 24);
  if (diffDays < 7) {
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  }

  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 2) {
    return `${diffWeeks} week${diffWeeks !== 1 ? "s" : ""} ago`;
  }

  // Older than two weeks: return formatted date
  return (
    "on " +
    date.toLocaleDateString(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  );
}

export function toInputDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
}
