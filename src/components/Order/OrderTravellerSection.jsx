import { Controller } from "react-hook-form";
import { TravellerCount } from "src/components";

export const OrderTravellerSection = ({ control }) => (
  <>
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
  </>
);
