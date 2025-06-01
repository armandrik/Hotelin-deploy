import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TripPlan } from "src/components";
import { OrderButton } from "src/components";

export const HotelDetails = () => {
  const naviagte = useNavigate();

  const scrollRef = useRef(null);

  const scrollByAmount = (amount) => {
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="py-4 relative">
      <div className="sticky top-4 px-4">
        <div className="w-full mx-auto left-0 right-0 mb-5 bg-white shadow-sm rounded-full flex items-center py-2 px-4 dark:bg-accesnt-dark">
          <div
            onClick={() => naviagte(-1)}
            className=" w-6 h-6 cursor-pointer flex items-center justify-center dark:text-white"
          >
            <svg className="size-5 rotate-180">
              <use href="/sprite.svg#arrow-right" />
            </svg>
          </div>
          <h1 className="text-h-light font-medium w-[80%] text-center text-xl dark:text-h-dark">
            Details
          </h1>
        </div>
      </div>
      <div className="px-4">
        <img
          className="rounded-md mb-5 mx-auto"
          src="https://safarmarket.com/blog/data/uploaded_files/95217dce1c3db906f03a16a5.jpg"
          loading="lazy"
          width={483}
          height={300}
        />
      </div>
      <div className="flex items-center justify-between mb-5 px-4">
        <div>
          <h1 className="text-h-light text-3xl font-medium mb-2 dark:text-h-dark">
            Ijen Crater Lake
          </h1>
          <p className="text-p-light dark:text-p-dark">Java,Indonesia</p>
        </div>
        <div>
          <p className="text-2xl text-secondary font-medium dark:text-accesnt">
            $89
          </p>
          <span className="text-xs text-p-light dark:text-p-dark">per day</span>
        </div>
      </div>
      <h3 className="text-h-light text-xl px-4 font-medium mb-5 flex items-center justify-between dark:text-h-dark">
        Trip Plan
        <div className="flex items-center justify-end gap-2">
          <button
            className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-xs dark:bg-secondary-dark"
            onClick={() => scrollByAmount(-200)}
          >
            <svg className="size-6 rotate-180 cursor-pointer text-secondary dark:text-accesnt">
              <use href="/sprite.svg#arrow-right" />
            </svg>
          </button>
          <button
            className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-xs dark:bg-secondary-dark"
            onClick={() => scrollByAmount(200)}
          >
            <svg className="size-6 cursor-pointer text-secondary dark:text-accesnt">
              <use href="/sprite.svg#arrow-right" />
            </svg>
          </button>
        </div>
      </h3>
      <div
        ref={scrollRef}
        className="mb-5 flex snap-x snap-mandatory px-4 gap-x-[14px] no-scrollbar overflow-x-auto scroll-smooth"
      >
        {new Array(4).fill(null).map((_, index) => (
          <TripPlan key={index} />
        ))}
      </div>
      <h3 className="text-h-light px-4 text-xl font-medium mb-5 dark:text-h-dark">
        Description
      </h3>
      <p className="text-p-light mb-5 px-4 dark:text-p-dark">
        The Ijen volcano complex is a group of composite volcanoes located on
        the border between Banyuwangi Regency and Bondowoso Regency of East
        Java, Indonesia. It is known for its blue fire, acidic crater lake, and
        labour-intensive sulfur mining.
      </p>
      <OrderButton />
    </div>
  );
};
