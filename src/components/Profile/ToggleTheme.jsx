import { useTheme } from "src/context/ThemeContext";
import clickSound from "/sound/ClickSound.mp3";
import { useEffect } from "react";

export const ToggleTheme = ({ onThemeToggle }) => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
    onThemeToggle();

    if (typeof window !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(100);
    }

    const audio = new Audio(clickSound);
    audio.play();
  };

  useEffect(() => {
    const audio = new Audio(clickSound);
    audio.load();
  }, []);

  return (
    <div className="bg-white shadow-xs px-4 py-3 rounded-md mb-4 dark:bg-secondary-dark">
      <div className="flex items-center justify-start gap-4">
        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center dark:bg-primary/10">
          <svg
            strokeWidth={1.5}
            className="size-7 text-secondary dark:text-primary"
          >
            <use href={`/sprite.svg#moon-icon`} />
          </svg>
        </div>
        <div>
          <h3 className="text-h-light font-medium mb-1 dark:text-h-dark">
            Change Theme
          </h3>
        </div>
        <label className="inline-flex items-center cursor-pointer ml-auto">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={handleClick}
            checked={theme === "dark"}
          />
          <div className="relative w-9 h-5 bg-gray-200 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-secondary dark:peer-checked:bg-primary"></div>
        </label>
      </div>
    </div>
  );
};
