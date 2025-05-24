import { Link, Outlet, useLocation } from "react-router-dom";

export const HomeLayout = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const iconClass = (path) =>
    `size-6 ${
      isActive(path)
        ? "text-secondary dark:text-accesnt" // Active color
        : "text-nav-icon-light dark:text-nav-icon-dark" // Default color
    }`;

  const pathTitleClass = (path) =>
    `${
      isActive(path)
        ? "text-xs text-secondary dark:text-accesnt" // Active color
        : "text-xs text-p-light dark:text-p-dark" // Default color
    }`;

  return (
    <div className="relative min-h-dvh pb-20 shadow-xs">
      <Outlet />

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-transparent">
        <nav className="max-w-lg mx-auto w-full flex justify-between items-center gap-2.5 bg-white h-[73px] px-6 py-4 rounded-tr-4xl rounded-tl-4xl dark:bg-accesnt-dark shadow-md">
          <Link to="/" className="flex flex-col items-center">
            <svg width="24" height="24" className={iconClass("/")}>
              <use href="/sprite.svg#hotelin-logo" />
            </svg>
            <p className={pathTitleClass("/")}>Home</p>
          </Link>
          <Link to="/feed" className="flex flex-col items-center">
            <svg strokeWidth={1.7} className={iconClass("/feed")}>
              <use href="/sprite.svg#feed" />
            </svg>
            <p className={pathTitleClass("/feed")}>Feed</p>
          </Link>
          <Link to="/map" className="flex flex-col items-center">
            <svg strokeWidth={1.7} className={iconClass("/map")}>
              <use href="/sprite.svg#map" />
            </svg>
            <p className={pathTitleClass("/map")}>Map</p>
          </Link>
          <Link to="/profile" className="flex flex-col items-center">
            <svg strokeWidth={1.7} className={iconClass("/profile")}>
              <use href="/sprite.svg#profile" />
            </svg>
            <p className={pathTitleClass("/profile")}>Profile</p>
          </Link>
        </nav>
      </div>
    </div>
  );
};
