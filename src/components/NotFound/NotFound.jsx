import Lottie from "lottie-react";
import notFound from "../../assets/404.json";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="h-dvh grid items-center">
      <div className="w-full flex flex-col p-4">
        <Lottie animationData={notFound} />
        <Link
          to="/"
          className="mx-auto text-white w-full h-14 rounded-lg text-lg font-medium cursor-pointer flex items-center justify-center gap-2 bg-primary/80 dark:bg-primary"
        >
          Return Home
          <svg strokeWidth={1.8} className="size-6">
            <use href="/sprite.svg#return-icon" />
          </svg>
        </Link>
      </div>
    </div>
  );
};
