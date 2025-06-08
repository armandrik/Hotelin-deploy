export const HotelSkeleton = () => {
  return (
    <div className="flex justify-between items-center mb-2.5 animate-pulse">
      <div className="flex items-center justify-start gap-3.5">
        {/* Image Skeleton */}
        <div className="w-[130px] h-[87px] bg-gray-300 dark:bg-gray-700 rounded-md"></div>

        {/* Text Skeletons */}
        <div className="space-y-2">
          <div className="h-5 w-28 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>

      {/* Price Skeleton */}
      <div className="flex flex-col items-center justify-center space-y-1">
        <div className="h-5 w-12 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-3 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};
