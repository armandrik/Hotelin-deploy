import { useRef } from "react";
import { motion } from "framer-motion";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useQuery } from "@tanstack/react-query";
import {
  HomeCardHotel,
  FavoriteCard,
  HotelSkeleton,
  FavHotelSkeleton,
  HeaderSection,
  SearchInput,
} from "src/components";
import { fetchHotels } from "src/api";

export const Home = () => {
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

  const scrollRef = useRef(null);
  const listRef = useRef(null);

  const scrollByAmount = (amount) => {
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const rowVirtualizer = useVirtualizer({
    count: hotels?.length ?? 0,
    getScrollElement: () => listRef.current,
    estimateSize: () => 100,
    overscan: 5,
  });

  return (
    <div>
      <HeaderSection />
      <SearchInput />

      <h3 className="text-h-light text-xl pt-2.5 px-3 font-medium mb-5 flex items-center justify-between dark:text-h-dark">
        Favorite Place
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
      {isLoading ? (
        <div className="pt-2.5 px-3 flex snap-x snap-mandatory gap-x-[14px] no-scrollbar overflow-x-auto scroll-smooth">
          {new Array(2).fill(null).map((_, index) => (
            <FavHotelSkeleton key={index} />
          ))}
        </div>
      ) : (
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="show"
          ref={scrollRef}
          className="h-56 pt-2.5 px-3 flex snap-x snap-mandatory gap-x-[14px] no-scrollbar overflow-x-auto scroll-smooth"
        >
          {hotels.slice(15, 20).map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: 50 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.1, ease: "easeOut" },
                },
              }}
            >
              <FavoriteCard data={item} />
            </motion.div>
          ))}
        </motion.div>
      )}
      <h3 className="text-h-light text-xl pt-2.5 px-5 font-medium mb-5 dark:text-h-dark">
        You might like
      </h3>
      {isLoading ? (
        <div className="space-y-5 pt-2.5 px-3">
          {new Array(3).fill(null).map((_, index) => (
            <HotelSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div
          ref={listRef}
          className="pt-2.5 px-3 no-scrollbar h-[800px]"
          style={{
            boxSizing: "border-box",
            overflowY: "auto",
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
