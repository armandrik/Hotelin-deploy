import { Link } from "react-router-dom";

export const FavoriteCard = ({ data }) => {
  return (
    <div className="relative min-w-3xs">
      <Link to={`/hotel/${data?.id}`}>
        <img
          className="rounded-md h-40"
          src={data?.image}
          alt="favorite hotel"
          loading="lazy"
          width={256}
          height={100}
        />
      </Link>
      <div className="absolute -bottom-10 right-0 left-0 mx-auto w-40 flex items-center justify-between rounded-md bg-white shadow-xs p-3 dark:bg-secondary-dark">
        <div>
          <h3 className="text-h-light text-lg font-medium dark:text-h-dark">
            {data?.name}
          </h3>
          <p className="text-p-light text-sm dark:text-p-dark">
            {data?.country}
          </p>
        </div>
        <p className="text-secondary dark:text-accesnt">${data?.pricePerDay}</p>
      </div>
    </div>
  );
};
