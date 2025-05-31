import { useNavigate } from "react-router-dom";
import { OrderForm } from "src/components";

export const Order = () => {
  const naviagte = useNavigate();

  return (
    <div className="p-4">
      <div className="sticky top-4 z-50">
        <div className="w-full mx-auto left-0 right-0 mb-5 bg-white shadow-sm rounded-md flex items-center py-2 px-4 dark:bg-accesnt-dark">
          <div
            onClick={() => naviagte(-1)}
            className=" w-6 h-6 cursor-pointer flex items-center justify-center dark:text-white"
          >
            <svg className="size-5 rotate-180">
              <use href="/sprite.svg#arrow-right" />
            </svg>
          </div>
          <h1 className="text-h-light font-medium w-[80%] text-center text-xl dark:text-h-dark">
            Hotel name
          </h1>
        </div>
      </div>

      <OrderForm />
    </div>
  );
};
