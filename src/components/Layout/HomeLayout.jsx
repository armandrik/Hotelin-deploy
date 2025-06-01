import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const HomeLayout = () => {
  const location = useLocation();
  const [userAuth, setUserAuth] = useState(true);

  // Fix: check if current path starts with the nav path
  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  const iconClass = (path) =>
    `size-6 ${
      isActive(path)
        ? "text-secondary dark:text-accesnt"
        : "text-nav-icon-light dark:text-nav-icon-dark"
    }`;

  const pathTitleClass = (path) =>
    `${
      isActive(path)
        ? "text-xs text-secondary dark:text-accesnt"
        : "text-xs text-p-light dark:text-p-dark"
    }`;

  return (
    <div className="relative min-h-dvh pb-20 shadow-xs">
      <Outlet />

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-transparent">
        <nav className="max-w-lg mx-auto w-full flex justify-between items-center gap-2.5 bg-white min-h-[73px] px-6 pt-4 rounded-tr-4xl rounded-tl-4xl dark:bg-accesnt-dark shadow-md" id="bottom-nav">
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
          {userAuth ? (
            <Link to="/profile" className="flex flex-col items-center">
              <svg strokeWidth={1.7} className={iconClass("/profile")}>
                <use href="/sprite.svg#profile" />
              </svg>
              <p className={pathTitleClass("/profile")}>Profile</p>
            </Link>
          ) : (
            <Link to="/register" className="flex flex-col items-center">
              <svg strokeWidth={1.5} className={iconClass("/login")}>
                <use href="/sprite.svg#login-icon" />
              </svg>

              <p className={pathTitleClass("/login")}>Login</p>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};
