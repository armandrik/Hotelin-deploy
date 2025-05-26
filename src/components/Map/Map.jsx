import Lottie from "lottie-react";
import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react";
import nmp_mapboxgl from "@neshan-maps-platform/mapbox-gl";
import { createRoot } from "react-dom/client";
import { useTheme } from "src/context/ThemeContext";
import location from "src/assets/Location.json";
import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";

export const Map = () => {
  const { theme } = useTheme();

  const createLottieMarker = () => {
    const container = document.createElement("div");
    container.style.width = "100px";
    container.style.height = "100px";
    container.style.transform = "translate(-50%, -100%)";
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

  const mapSetter = (neshanMap) => {
    const lottieMarker = createLottieMarker();

    new nmp_mapboxgl.Marker({ element: lottieMarker })
      .setLngLat([51.391173, 35.700954])
      .addTo(neshanMap);
  };

  return (
    <div className="w-full h-dvh">
      <MapComponent
        options={{
          mapKey: "web.0eec1f3a9b584618bc5d707d62aee99f",
          mapType:
            theme === "light"
              ? MapTypes.neshanVector
              : MapTypes.neshanRasterNight,
          isTouchPlatform: true,
          center: [51.391173, 35.700954],
          zoom: 14,
          pitch: 0,
          minZoom: 2,
          maxZoom: 21,
          trackResize: true,
          mapTypeControllerOptions: {
            show: false,
          },
        }}
        mapSetter={mapSetter}
      />
    </div>
  );
};

export default Map;
