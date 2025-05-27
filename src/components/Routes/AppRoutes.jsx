import { Route, Routes } from "react-router-dom";
import { Home } from "src/components";
import { HomeLayout } from "src/components";
import { Map } from "src/components";
import { NotFound } from "src/components";
import { Profile } from "src/components";
import { Register } from "src/components";
import { Reserve } from "src/components";
import { History } from "src/components";
import { FeedLayout } from "src/components";
import { HotelDetails } from "src/components";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/feed" element={<FeedLayout />}>
          <Route index element={<Reserve />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route path="map" element={<Map />} />
        <Route path="profile" element={<Profile />} />
        <Route path="hotel/:id" element={<HotelDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
