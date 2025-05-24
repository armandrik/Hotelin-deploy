import {HomeCardHotel} from "src/components";

export const Home = () => {
  return (
    <div className="pt-2.5 px-5">
      <h1 className="text-h-light text-4xl font-bold mb-4 dark:text-h-dark">
        Let's pack for <br /> your trip
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
        You might like
      </h3>
      <HomeCardHotel />
      <HomeCardHotel />
      <HomeCardHotel />
      <HomeCardHotel />
      <HomeCardHotel />
      <HomeCardHotel />
      <HomeCardHotel />
    </div>
  );
};
