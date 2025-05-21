import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function SplashScreen() {
  const [fading, setFading] = useState(false);
  const text = "HOTELIN";
  const letters = text.split("").reverse();

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 2000); // Start fade at 1.5s
    return () => clearTimeout(fadeTimer);
  }, []);

  return (
    <div
      className={`relative h-dvh bg-light dark:bg-dark flex items-center justify-center text-2xl transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <motion.img
        src="/hotelin-logo.svg"
        alt="Logo"
        initial={{ scale: 0.2, x: 170, opacity: 0 }}
        animate={{
          scale: 1,
          x: 0,
          opacity: 1,
          rotate: 360,
          transition: {
            scale: { duration: 0.4, ease: "easeOut" },
            x: { delay: 0.3, duration: 0.7, ease: "easeOut" },
            opacity: { duration: 0.4 },
            rotate: { duration: 1, ease: "easeInOut" },
          },
        }}
        className="w-20 h-20 mr-2"
      />

      {/* Animated Text */}
      <div className="flex space-x-">
        {
          letters
            .map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: (index + 2) * 0.2,
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="text-4xl font-bold text-h-light dark:text-h-dark"
              >
                {char}
              </motion.span>
            ))
            .reverse() /* Reverse back so it's rendered left-to-right */
        }
      </div>
    </div>
  );
}

export default SplashScreen;
