import { motion } from "framer-motion";
import { HomeCardHotel } from "src/components";
import { FavoriteCard } from "src/components";

export const Home = () => {
  return (
    <div className="pt-2.5 px-5">
      <h1 className="text-h-light text-4xl font-bold mb-4 flex items-center justify-between dark:text-h-dark">
        Let's pack for <br /> your trip
        <svg width={40} height={40}>
          <use href="/sprite.svg#hotelin-logo" />
        </svg>
      </h1>
      <p className="text-p-light text-sm font-medium mb-4">
        Use one of our suggestions or make a <br /> list of what a pack
      </p>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search location"
          className="w-full text-sm text-p-light px-2.5 outline-none h-12 rounded-lg border-none dark:text-h-dark bg-white shadow-sm dark:bg-secondary-dark"
        />
        <svg
          strokeWidth={1.5}
          className="size-6 absolute right-2.5 top-3 text-p-light cursor-pointer dark:text-h-dark"
        >
          <use href="/sprite.svg#search-icon" />
        </svg>
      </div>
      <h3 className="text-h-light text-xl font-medium mb-5 dark:text-h-dark">
        Favorite Place
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
        className="mb-6 h-48 flex snap-x snap-mandatory gap-x-[14px] no-scrollbar overflow-x-auto scroll-smooth"
      >
        {new Array(4).fill(null).map((_, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x: 50 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <FavoriteCard />
          </motion.div>
        ))}
      </motion.div>
      <h3 className="text-h-light text-xl font-medium mb-5 dark:text-h-dark">
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
      >
        {new Array(8).fill(null).map((_, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
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
