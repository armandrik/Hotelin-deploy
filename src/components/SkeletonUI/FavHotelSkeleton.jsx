export const FavHotelSkeleton = () => {
  return (
    <div className="relative min-w-3xs animate-pulse h-44">
      {/* Image Skeleton */}
      <div className="w-[256px] h-[140px] bg-gray-300 dark:bg-gray-700 rounded-md"></div>

      {/* Overlay Skeleton */}
      <div className="absolute bottom-0 right-0 left-0 mx-auto w-40 flex items-center justify-between rounded-md bg-white shadow-xs p-3 dark:bg-secondary-dark">
        <div className="space-y-2">
          <div className="h-5 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
        <div className="h-5 w-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};
