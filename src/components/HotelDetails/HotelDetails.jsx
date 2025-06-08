import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TripPlan, OrderButton, HotelDetailsSkeleton } from "src/components";
import { fetchHotelDetails } from "src/api";

export const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["hotelDetail", id],
    queryFn: () => fetchHotelDetails(id),
    enabled: !!id,
  });

  useEffect(() => {
    if (!id || isError || (!isLoading && !data)) {
      navigate("/notfound");
    }
  }, [id, isError, data, isLoading, navigate]);

  const scrollByAmount = (amount) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  if (isLoading) return <HotelDetailsSkeleton />;

  return (
    <div className="py-4 relative">
      {/* Header */}
      <div className="sticky top-4 px-4">
        <div className="w-full mx-auto left-0 right-0 mb-5 bg-white shadow-sm rounded-full flex items-center py-2 px-4 dark:bg-accesnt-dark">
          <div
            onClick={() => navigate(-1)}
            className="w-6 h-6 cursor-pointer flex items-center justify-center dark:text-white"
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

      {/* Image */}
      <div className="px-4">
        <img
          className="rounded-md mb-5 mx-auto"
          src={data?.image || "https://via.placeholder.com/483x300"}
          alt={data?.name}
          loading="lazy"
          width={483}
          height={300}
        />
      </div>

      {/* Title & Price */}
      <div className="flex items-center justify-between mb-5 px-4">
        <div>
          <h1 className="text-h-light text-3xl font-medium mb-2 dark:text-h-dark">
            {data?.name}
          </h1>
          <p className="text-p-light dark:text-p-dark">{data?.country}</p>
        </div>
        <div>
          <p className="text-2xl text-secondary font-medium dark:text-accesnt">
            ${data?.pricePerDay}
          </p>
          <span className="text-xs text-p-light dark:text-p-dark">per day</span>
        </div>
      </div>

      {/* Trip Plan */}
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

      {/* Description */}
      <h3 className="text-h-light px-4 text-xl font-medium mb-2 dark:text-h-dark">
        Description
      </h3>
      <p className="text-p-light mb-5 px-4 dark:text-p-dark">
        {data?.description}
      </p>

      {/* Order Button */}
      <OrderButton price={data?.pricePerDay} />
    </div>
  );
};
