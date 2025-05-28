import { useNavigate } from "react-router-dom";
import { OrderForm } from "src/components/order/OrderForm";

export const Order = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <div className="flex items-center mb-5">
        <div
          onClick={() => navigate(-1)}
          className="bg-white w-10 h-10 rounded-full shadow-xs cursor-pointer flex items-center justify-center dark:bg-secondary-dark dark:text-white"
        >
          <svg className="size-6 rotate-180">
            <use href="/sprite.svg#arrow-right" />
          </svg>
        </div>
        <h1 className="text-h-light font-medium w-[80%] text-center text-xl dark:text-h-dark">
          Hotel name
        </h1>
      </div>

      <OrderForm />
    </div>
  );
};
