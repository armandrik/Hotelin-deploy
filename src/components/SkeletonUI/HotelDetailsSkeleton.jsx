export const HotelDetailsSkeleton = () => {
  return (
    <div className="py-4 relative animate-pulse">
      {/* Header */}
      <div className="sticky top-4 px-4">
        <div className="w-full mx-auto left-0 right-0 mb-5 bg-gray-200 dark:bg-gray-700 shadow-sm rounded-full flex items-center py-2 px-4">
          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          <div className="h-5 w-[80%] bg-gray-300 dark:bg-gray-600 mx-auto rounded"></div>
        </div>
      </div>

      {/* Image */}
      <div className="px-4">
        <div className="w-[483px] h-[300px] bg-gray-300 dark:bg-gray-700 rounded-md mb-5 mx-auto"></div>
      </div>

      {/* Title & Price */}
      <div className="flex items-center justify-between mb-5 px-4">
        <div>
          <div className="h-8 w-40 bg-gray-300 dark:bg-gray-700 mb-2 rounded"></div>
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
        <div>
          <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 mb-1 rounded"></div>
          <div className="h-3 w-14 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>

      {/* Trip Plan Header & Buttons */}
      <div className="flex items-center justify-between mb-5 px-4">
        <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        </div>
      </div>

      {/* Trip Plan Scroll Items */}
      <div className="mb-5 flex snap-x px-4 gap-x-[14px] overflow-x-auto no-scrollbar">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="min-w-[160px] h-32 bg-gray-300 dark:bg-gray-700 rounded-md"
          ></div>
        ))}
      </div>

      {/* Description */}
      <div className="px-4 mb-2">
        <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>

      {/* Order Button Block */}
      <div className="w-[95%] mx-auto bg-gray-200 dark:bg-gray-700 p-4 rounded-md shadow-md flex items-center justify-between">
        <div>
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
          <div className="flex items-center gap-1">
            <div className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 w-14 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
        <div className="w-28 h-10 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
      </div>
    </div>
  );
};
