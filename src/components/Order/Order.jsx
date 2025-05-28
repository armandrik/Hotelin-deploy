import { useNavigate } from "react-router-dom";
import { DatePicker, TravellerCount ,DisCountInput } from "src/components";

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
        <DatePicker />
        <h3 className="text-h-light text-lg font-medium mb-5 dark:text-h-dark">
          Travellers
        </h3>
        <div className="space-y-5 mb-5">
          <TravellerCount ageRange="Adults" desc="After 12" />
          <TravellerCount ageRange="Children" desc="0-12 Years" />
        </div>
        <DisCountInput/>
      </div>
      <button className="w-full px-3.5 py-3 cursor-pointer rounded-md text-white bg-secondary dark:bg-primary">
        Order Now - $89.99
      </button>
    </div>
  );
};
