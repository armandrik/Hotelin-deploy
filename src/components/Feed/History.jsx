import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { HomeCardHotel } from "src/components";
import history from "src/assets/History.json";

export const History = () => {
  return (
    <div>
      <div className="flex items-center justify-start -mt-3 mb-4">
        <div className="w-14 h-14">
          <Lottie animationData={history} />
        </div>
        <h3 className="text-h-light text-xl font-medium dark:text-h-dark">
          History Reservation
        </h3>
      </div>
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
