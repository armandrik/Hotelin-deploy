import Lottie from "lottie-react";
import notFound from "src/assets/404.json";

export const NotFound = () => {
  return (
    <div className="h-dvh grid items-center">
      <div className="w-full flex flex-col p-4">
        <Lottie animationData={notFound} />
      </div>
    </div>
  );
};
