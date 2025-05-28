import { Calendar } from "primereact/calendar";
import { useEffect } from "react";
import { switchPrimeReactTheme } from "src/components";
import { useTheme } from "src/context/ThemeContext";

export const DatePicker = ({ value, onChange }) => {
  const { theme } = useTheme();

  useEffect(() => {
    switchPrimeReactTheme(theme);
  }, [theme]);

  return (
    <div className="relative mb-5 border-b border-border-light dark:border-border-dark pb-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-h-light text-lg font-medium dark:text-h-dark">
          Dates
        </h3>
        <p
          onClick={() => onChange(null)}
          className="text-secondary text-sm font-medium cursor-pointer dark:text-primary"
        >
          Clear
        </p>
      </div>
      <div className="relative">
        <Calendar
          value={value}
          onChange={(e) => onChange(e.value)}
          selectionMode="range"
          readOnlyInput
          hideOnRangeSelection
          className="w-full"
          placeholder="schedule your trip"
        />
        <svg
          strokeWidth={1.5}
          className="size-6 absolute top-3 right-2 text-p-light dark:text-p-dark"
        >
          <use href="/sprite.svg#calendar-icon" />
        </svg>
      </div>
    </div>
  );
};
