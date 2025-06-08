import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useQuery } from "@tanstack/react-query";
import { PulseEffect, HotelSkeleton, HomeCardHotel } from "src/components";
import { fetchHotels } from "src/api";

export const Reserve = () => {
  const { data: hotels, isLoading } = useQuery({
    queryFn: () => fetchHotels(),
    queryKey: ["hotels"],
    staleTime: 1000 * 60 * 60 * 4,
    gcTime: 1000 * 60 * 60 * 4,
    initialData: () => {
      // Try to read from localStorage cache first
      const cached = localStorage.getItem("hotels-cache");
      return cached ? JSON.parse(cached) : undefined;
    },
    onSuccess: (data) => {
      // Save fresh data to localStorage cache
      localStorage.setItem("hotels-cache", JSON.stringify(data));
    },
    onError: (error) => {
      console.error("Failed fetching hotels:", error);
    },
  });

  const listRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: hotels?.length ?? 0,
    getScrollElement: () => listRef.current,
    estimateSize: () => 100,
    overscan: 5,
  });

  return (
    <div>
      <div className="flex items-center justify-start gap-4 mb-7 pl-2">
        <PulseEffect />
        <h3 className="text-h-light text-xl font-medium dark:text-h-dark">
          Active Reservation
        </h3>
      </div>

      {isLoading ? (
        new Array(3).fill(null).map((_, index) => <HotelSkeleton key={index} />)
      ) : (
        <div
          ref={listRef}
          className="no-scrollbar"
          style={{
            height: "100dvh",
            overflowY: "auto",
            position: "relative",
          }}
        >
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              position: "relative",
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const item = hotels[virtualRow.index];
              return (
                <div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    top: virtualRow.start,
                    left: 0,
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <HomeCardHotel data={item} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
