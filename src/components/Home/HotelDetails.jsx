import { useNavigate } from "react-router-dom";
import { TripPlan } from "src/components";
import { OrderButton } from "src/components";

export const HotelDetails = () => {
  const naviagte = useNavigate();

  return (
    <div className="p-4">
      <div className="flex items-center mb-5">
        <div
          onClick={() => naviagte(-1)}
          className="bg-accesnt-light w-10 h-10 rounded-full shadow-xs cursor-pointer flex items-center justify-center dark:bg-secondary-dark dark:text-white"
        >
          <svg className="size-6 rotate-180">
            <use href="/sprite.svg#arrow-right" />
          </svg>
        </div>
        <h1 className="text-h-light font-medium w-[80%] text-center text-xl dark:text-h-dark">
          Details
        </h1>
      </div>
      <img
        className="rounded-md mb-5"
        src="https://safarmarket.com/blog/data/uploaded_files/95217dce1c3db906f03a16a5.jpg"
        loading="lazy"
        width={483}
        height={300}
      />
      <div className="flex items-center justify-between mb-5">
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
      <h3 className="text-h-light text-xl font-medium mb-5 dark:text-h-dark">
        Trip Plan
      </h3>
      <div className="mb-5 flex snap-x snap-mandatory gap-x-[14px] no-scrollbar overflow-x-auto scroll-smooth">
        {new Array(4).fill(null).map((_, index) => (
          <TripPlan key={index} />
        ))}
      </div>
      <h3 className="text-h-light text-xl font-medium mb-5 dark:text-h-dark">
        Description
      </h3>
      <p className="text-p-light mb-5 dark:text-p-dark">
        The Ijen volcano complex is a group of composite volcanoes located on
        the border between Banyuwangi Regency and Bondowoso Regency of East
        Java, Indonesia. It is known for its blue fire, acidic crater lake, and
        labour-intensive sulfur mining.
      </p>
      <OrderButton />
    </div>
  );
};
