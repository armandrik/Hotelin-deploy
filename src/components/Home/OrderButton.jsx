export const OrderButton = () => {
  return (
    <div className="w-full mx-auto bg-white p-4 rounded-md shadow-md flex items-center justify-between dark:bg-primary">
      <div>
        <p className="text-p-light font-medium dark:text-white">Total Price</p>
        <div className="flex items-center gap-1">
          <h3 className="text-2xl font-medium text-secondary dark:text-accesnt">
            $89
          </h3>
          <p className="text-p-light text-sm dark:text-white"> /person</p>
        </div>
      </div>
      <button className="w-28 px-3.5 py-3 cursor-pointer rounded-md text-white bg-secondary dark:bg-accesnt">
        Order Now
      </button>
    </div>
  );
};
