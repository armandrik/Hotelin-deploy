import { useState } from "react";

export const TravellerCount = ({ ageRange, desc }) => {
  const [travellerCount, setTravellerCount] = useState(0);

  const reduceTravellerNumber = () => {
    if (travellerCount === 0) return;
    setTravellerCount(travellerCount - 1);
  };

  const increasTravellerNumber = () => {
    if (travellerCount === 5) return;
    setTravellerCount(travellerCount + 1);
  };

  return (
    <div className="flex items-center justify-between px-3 py-4 w-full bg-accesnt-light text-sm text-p-light p-2 rounded-md dark:bg-accesnt-dark dark:text-p-dark">
      <div className="text-center">
        <p className="text-h-light text-lg font-medium mb-1 dark:text-h-dark">
          {ageRange}
        </p>
        <p className="text-sm">{desc}</p>
      </div>
      <div className="flex items-center justify-around">
        <button
          onClick={reduceTravellerNumber}
          className="flex items-center justify-center w-7 h-7 cursor-pointer border border-secondary dark:border-primary rounded-full"
        >
          <svg
            strokeWidth={1.5}
            className="size-5 text-secondary dark:text-primary"
          >
            <use href="/sprite.svg#minus-icon" />
          </svg>
        </button>
        <span className="text-center w-7 text-xl text-h-light font-medium dark:text-white">
          {travellerCount}
        </span>
        <button
          onClick={increasTravellerNumber}
          className="flex items-center justify-center w-7 h-7 cursor-pointer border border-secondary dark:border-primary rounded-full"
        >
          <svg
            strokeWidth={1.5}
            className="size-5 text-secondary dark:text-primary"
          >
            <use href="/sprite.svg#plus-icon" />
          </svg>
        </button>
      </div>
    </div>
  );
};
