import { Link } from "react-router-dom";

export const FavoriteCard = () => {
  return (
    <div className="relative min-w-3xs">
      <Link to="/hotel/2">
        <img
          className="rounded-md"
          src="https://safarmarket.com/blog/data/uploaded_files/95217dce1c3db906f03a16a5.jpg"
          alt="favorite hotel"
          loading="lazy"
          width={256}
          height={100}
        />
      </Link>
      <div className="absolute -bottom-10 right-0 left-0 mx-auto w-40 flex items-center justify-between rounded-md bg-white shadow-xs p-3 dark:bg-secondary-dark">
        <div>
          <h3 className="text-h-light text-lg font-medium dark:text-h-dark">
            Sulawesi
          </h3>
          <p className="text-p-light text-sm dark:text-p-dark">Indonesia</p>
        </div>
        <p className="text-secondary dark:text-accesnt">$79</p>
      </div>
    </div>
  );
};
