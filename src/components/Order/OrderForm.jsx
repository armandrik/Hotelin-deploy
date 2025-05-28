import { useForm } from "react-hook-form";
import {
  Discount,
  OrderTravellerSection,
  OrderDatePickerSection,
} from "src/components";

export const OrderForm = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      dates: null,
      adults: 0,
      children: 0,
    },
  });

  const dates = watch("dates");
  const adults = watch("adults");
  const children = watch("children");

  const isButtonDisabled =
    !Array.isArray(dates) ||
    dates.length !== 2 ||
    !dates[0] ||
    !dates[1] ||
    adults + children === 0;

  return (
    <div className="w-full bg-white shadow-md rounded-md mb-5 px-5 py-6 dark:bg-secondary-dark">
      <OrderDatePickerSection control={control} errors={errors} />
      <OrderTravellerSection control={control} />
      <Discount />
      <button
        disabled={isButtonDisabled}
        className={`w-full px-3.5 py-3 rounded-md text-white transition ${
          isButtonDisabled
            ? "bg-secondary/50 dark:bg-primary/40 cursor-not-allowed"
            : "bg-secondary dark:bg-primary cursor-pointer"
        }`}
      >
        Order Now - $89.99
      </button>
    </div>
  );
};
