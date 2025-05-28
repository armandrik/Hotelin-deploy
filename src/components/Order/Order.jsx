import { useNavigate } from "react-router-dom";
import { DatePicker, TravellerCount } from "src/components";

export const Order = () => {
  const naviagte = useNavigate();

  return (
    <div className="p-4">
      <div className="flex items-center mb-5">
        <div
          onClick={() => naviagte(-1)}
          className="bg-white w-10 h-10 rounded-full shadow-xs cursor-pointer flex items-center justify-center dark:bg-secondary-dark dark:text-white"
        >
          <svg className="size-6 rotate-180">
            <use href="/sprite.svg#arrow-right" />
          </svg>
        </div>
        <h1 className="text-h-light font-medium w-[80%] text-center text-xl dark:text-h-dark">
          Hotel name
        </h1>
      </div>
      <div className="w-full bg-white shadow-md rounded-md mb-5 px-5 py-6 dark:bg-secondary-dark">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-h-light text-lg font-medium dark:text-h-dark">
            Dates
          </h3>
          <p
            onClick={() => setDates(null)}
            className="text-secondary text-sm font-medium cursor-pointer dark:text-primary"
          >
            Clear
          </p>
        </div>
        <DatePicker />
        <h3 className="text-h-light text-lg font-medium mb-5 dark:text-h-dark">
          Travellers
        </h3>
        <div className="space-y-5 mb-5">
          <TravellerCount ageRange="Adults" desc="After 12" />
          <TravellerCount ageRange="Children" desc="0-12 Years" />
        </div>
        <h3 className="flex items-center justify-start gap-1 mb-3 text-h-light text-lg font-medium dark:text-h-dark">
          Use discount code
          <svg strokeWidth={1.5} className="size-6 mt-1">
            <use href="/sprite.svg#discount-icon" />
          </svg>
        </h3>
        <input
          className="w-full p-2 text-p-light dark:text-p-dark rounded-md outline-secondary dark:outline-primary text-sm border border-border-light dark:border-border-dark"
          type="text"
          placeholder="Enter code here"
        />
      </div>
      <button className="w-full px-3.5 py-3 cursor-pointer rounded-md text-white bg-secondary dark:bg-primary">
        Order Now - $89.99
      </button>
    </div>
  );
};
