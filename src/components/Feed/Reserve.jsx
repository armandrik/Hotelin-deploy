import { PulseEffect } from "src/components";
import { HomeCardHotel } from "src/components";
import { motion } from "framer-motion";

export const Reserve = () => {
  return (
    <div>
      <div className="flex items-center justify-start gap-4 mb-7 pl-2">
        <PulseEffect />
        <h3 className="text-h-light text-xl font-medium dark:text-h-dark">
          Active Reservation
        </h3>
      </div>
      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="space-y-5"
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
