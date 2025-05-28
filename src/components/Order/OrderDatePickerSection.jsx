import { Controller } from "react-hook-form";
import { DatePicker } from "src/components";

export const OrderDatePickerSection = ({ control, errors }) => (
  <Controller
    name="dates"
    control={control}
    rules={{
      validate: (value) =>
        Array.isArray(value) && value.length === 2 && value[0] && value[1]
          ? true
          : "Please select a valid date range",
    }}
    render={({ field }) => (
      <div>
        <DatePicker
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
        {errors.dates && (
          <p className="flex items-center justify-start gap-1 text-sm text-red-500 mb-5">
            <svg strokeWidth={1.5} className="size-5">
              <use href="/sprite.svg#warning-icon" />
            </svg>
            {errors.dates.message}
          </p>
        )}
      </div>
    )}
  />
);
