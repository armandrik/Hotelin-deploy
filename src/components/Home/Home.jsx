import { useRef } from "react";
import { motion } from "framer-motion";
import { HomeCardHotel } from "src/components";
import { FavoriteCard } from "src/components";

export const Home = () => {
  const scrollRef = useRef(null);

  const scrollByAmount = (amount) => {
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div>
      <h1 className="text-h-light text-4xl pt-2.5 px-5 font-bold mb-4 flex items-center justify-between dark:text-h-dark">
        Let's pack for <br /> your trip
        <svg width={40} height={40}>
          <use href="/sprite.svg#hotelin-logo" />
        </svg>
      </h1>
      <p className="text-p-light text-sm pt-2.5 px-5 font-medium mb-4">
        Use one of our suggestions or make a <br /> list of what a pack
      </p>
      <div className="relative mb-4 pt-2.5 px-5">
        <input
          type="text"
          placeholder="Search location"
          className="w-full text-sm text-p-light px-2.5 outline-none h-12 rounded-lg border-none dark:text-h-dark bg-white shadow-sm dark:bg-secondary-dark"
        />
        <svg
          strokeWidth={1.5}
          className="size-6 absolute right-6.5 top-5.5 text-p-light cursor-pointer dark:text-h-dark"
        >
          <use href="/sprite.svg#search-icon" />
        </svg>
      </div>
      <h3 className="text-h-light text-xl pt-2.5 px-5 font-medium mb-5 flex items-center justify-between dark:text-h-dark">
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
      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="show"
        ref={scrollRef}
        className="h-56 pt-2.5 px-5 flex snap-x snap-mandatory gap-x-[14px] no-scrollbar overflow-x-auto scroll-smooth"
      >
        {new Array(4).fill(null).map((_, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x: 50 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.3, ease: "easeOut" },
              },
            }}
          >
            <FavoriteCard />
          </motion.div>
        ))}
      </motion.div>
      <h3 className="text-h-light text-xl pt-2.5 px-5 font-medium mb-5 dark:text-h-dark">
        You might like
      </h3>
      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="space-y-5 pt-2.5 px-5"
      >
        {new Array(8).fill(null).map((_, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.2, ease: "easeOut" },
              },
            }}
          >
            <HomeCardHotel />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
