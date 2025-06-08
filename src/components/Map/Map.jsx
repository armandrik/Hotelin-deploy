import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react";
import nmp_mapboxgl from "@neshan-maps-platform/mapbox-gl";
import { useTheme } from "src/context/ThemeContext";
import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";
import { createLottieMarker } from "./CustomMarker";
import { HomeCardHotel, HotelSkeleton } from "src/components";
import { useQuery } from "@tanstack/react-query";
import { fetchHotels } from "src/api";

export const Map = () => {
  const { data: hotels, isLoading } = useQuery({
    queryFn: () => fetchHotels(),
    queryKey: ["hotels"],
    staleTime: 1000 * 60 * 60 * 4,
    gcTime: 1000 * 60 * 60 * 4,
    initialData: () => {
      // Try to read from localStorage cache first
      const cached = localStorage.getItem("hotels-cache");
      return cached ? JSON.parse(cached) : undefined;
    },
    onSuccess: (data) => {
      // Save fresh data to localStorage cache
      localStorage.setItem("hotels-cache", JSON.stringify(data));
    },
    onError: (error) => {
      console.error("Failed fetching hotels:", error);
    },
  });

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
        {isLoading ? <HotelSkeleton /> : <HomeCardHotel data={hotels[0]} />}
      </div>
    </div>
  );
};

export default Map;
