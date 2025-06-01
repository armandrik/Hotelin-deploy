import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react";
import nmp_mapboxgl from "@neshan-maps-platform/mapbox-gl";
import { useTheme } from "src/context/ThemeContext";
import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";
import { createLottieMarker } from "./CustomMarker";
import { HomeCardHotel } from "src/components";

export const Map = () => {
  const { theme } = useTheme();

  const mapSetter = (neshanMap) => {
    const lottieMarker = createLottieMarker();

    new nmp_mapboxgl.Marker({ element: lottieMarker, offset: [0, -20] })
      .setLngLat([51.391173, 35.700954])
      .addTo(neshanMap);
  };

  return (
    <div className="w-full">
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
      <div className="w-[95%] mx-auto bg-white shadow-md rounded-md absolute top-2 left-0 right-0 px-2 pt-2 dark:bg-secondary-dark">
        <HomeCardHotel />
      </div>
    </div>
  );
};

export default Map;
