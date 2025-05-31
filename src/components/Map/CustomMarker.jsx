import Lottie from "lottie-react";
import { createRoot } from "react-dom/client";
import location from "src/assets/Location.json";

export const createLottieMarker = () => {
  const container = document.createElement("div");
  container.style.width = "70px";
  // container.style.transform = "translate(-50%, -100%)";
  container.style.transform = "translate(-50%, -910px)"; // move 10px higher
  container.style.pointerEvents = "none";

  // Mount the React Lottie component to this container
  const root = createRoot(container);
  root.render(
    <Lottie
      animationData={location}
      loop
      autoplay
      style={{ width: "100%", height: "100%" }}
    />
  );

  return container;
};
