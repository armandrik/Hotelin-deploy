import { Link } from "react-router-dom";

export const OrderButton = ({price}) => {
  return (
    <div className="w-[95%] mx-auto bg-white p-4 rounded-md shadow-md flex items-center justify-between dark:bg-secondary-dark">
      <div>
        <p className="text-p-light font-medium dark:text-white">Total Price</p>
        <div className="flex items-center gap-1">
          <h3 className="text-2xl font-medium text-secondary dark:text-accesnt">
            ${price}
          </h3>
          <p className="text-p-light text-sm dark:text-white"> /person</p>
        </div>
      </div>
      <Link
        to="/order/2"
        className="w-28 px-3.5 py-3 cursor-pointer rounded-md text-white bg-secondary dark:bg-primary"
      >
        Order Now
      </Link>
    </div>
  );
};
