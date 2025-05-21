import { Link, Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className="relative min-h-dvh pb-20">
      <Outlet />

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-transparent">
        <nav className="max-w-lg mx-auto w-full flex justify-between items-center gap-2.5 bg-white h-[73px] px-6 py-4 rounded-tr-4xl rounded-tl-4xl dark:bg-accesnt-dark shadow-md">
          <Link to="/">
            <svg width="24" height="24">
              <use href="./sprite.svg#hotelin-logo" />
            </svg>
          </Link>
          <Link to="/feed">
            <svg
              strokeWidth={1.7}
              className="size-6 text-nav-icon-light dark:text-nav-icon-dark"
            >
              <use href="./sprite.svg#feed" />
            </svg>
          </Link>
          <Link to="/map">
            <svg
              strokeWidth={1.7}
              className="size-6 text-nav-icon-light dark:text-nav-icon-dark"
            >
              <use href="./sprite.svg#map" />
            </svg>
          </Link>
          <Link to="/profile">
            <svg
              strokeWidth={1.7}
              className="size-6 text-nav-icon-light dark:text-nav-icon-dark"
            >
              <use href="./sprite.svg#profile" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default HomeLayout;
