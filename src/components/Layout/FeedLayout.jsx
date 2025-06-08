import { Outlet } from "react-router-dom";
import { FeedNavigation } from "src/components";

export const FeedLayout = () => {

  return (
    <div className="p-3">
      <h1 className="text-h-light font-medium text-2xl mb-4 dark:text-h-dark">
        Feed
      </h1>
      <FeedNavigation />
      <Outlet />
    </div>
  );
};
