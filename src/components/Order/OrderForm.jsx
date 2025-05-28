import { useForm, Controller } from "react-hook-form";
import { DatePicker, TravellerCount, DiscountInput } from "src/components";

export const OrderForm = () => {
  const { control, watch } = useForm({
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
      <Controller
        name="dates"
        control={control}
        render={({ field }) => (
          <DatePicker value={field.value} onChange={field.onChange} />
        )}
      />

      <h3 className="text-h-light text-lg font-medium mb-5 dark:text-h-dark">
        Travellers
      </h3>
      <div className="space-y-5 mb-5">
        <Controller
          name="adults"
          control={control}
          render={({ field }) => (
            <TravellerCount
              ageRange="Adults"
              description="After 12"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="children"
          control={control}
          render={({ field }) => (
            <TravellerCount
              ageRange="Children"
              description="0-12 Years"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <DiscountInput />

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
