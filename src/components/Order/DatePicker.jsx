import { Calendar } from "primereact/calendar";
import { useState } from "react";

export const DatePicker = () => {
  const [dates, setDates] = useState(null);

  return (
    <div className="relative mb-5 border-b border-border-light dark:border-border-dark pb-5">
      <Calendar
        value={dates}
        onChange={(e) => setDates(e.value)}
        selectionMode="range"
        readOnlyInput
        hideOnRangeSelection
        className="w-full bg-accesnt-light text-sm text-p-light p-2 rounded-md dark:bg-accesnt-dark dark:text-p-dark"
        placeholder="schedule your trip"
        panelClassName="mt-3 p-2 bg-white text-p-light mb-2 rounded-md dark:bg-secondary-dark shadow-sm dark:text-p-dark"
      />
      <svg
        strokeWidth={1.5}
        className="size-6 absolute top-1 right-2 text-p-light dark:text-p-dark"
      >
        <use href="/sprite.svg#calendar-icon" />
      </svg>
    </div>
  );
};
