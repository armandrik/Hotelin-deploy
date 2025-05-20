import { Link, Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <Outlet />
      <nav className="w-full flex justify-between items-center gap-2.5 absolute bottom-0 bg-white h-[73px] px-11 py-6 rounded-tr-4xl rounded-tl-4xl dark:bg-accesnt-dark">
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
    </>
  );
}

export default HomeLayout;
