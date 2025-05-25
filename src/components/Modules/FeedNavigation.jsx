import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const FeedNavigation = () => {
  const [activeTab, setActiveTab] = useState("reserve");

  return (
    <div className="relative flex items-center justify-center bg-gray-200 rounded-lg h-12 px-1 py-2 mb-7 dark:bg-secondary-dark overflow-hidden">
      {/* Animated background */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-0 bottom-0 w-1/2 rounded-md z-0 bg-white dark:bg-primary"
        style={{
          left: activeTab === "reserve" ? "0%" : "50%",
        }}
      />

      {/* Reserve Button */}
      <Link
        to="/feed"
        onClick={() => setActiveTab("reserve")}
        className={`w-1/2 z-10 py-2 rounded-md font-medium text-center transition-colors ${
          activeTab === "reserve"
            ? "text-h-light dark:text-white"
            : "text-h-light/50 dark:text-p-dark/50"
        }`}
      >
        Reserve
      </Link>

      {/* History Button */}
      <Link
        to="history"
        onClick={() => setActiveTab("history")}
        className={`w-1/2 z-10 py-2 rounded-md font-medium text-center transition-colors ${
          activeTab === "history"
            ? "text-h-light dark:text-white"
            : "text-h-light/50 dark:text-p-dark/50"
        }`}
      >
        History
      </Link>
    </div>
  );
};
