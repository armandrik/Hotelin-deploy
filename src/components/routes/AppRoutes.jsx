import { Route, Routes } from "react-router-dom";
import { Feed } from "src/components";
import { Home } from "src/components";
import { HomeLayout } from "src/components";
import { Map } from "src/components";
import { NotFound } from "src/components";
import { Profile } from "src/components";
import { Register } from "src/components";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="feed" element={<Feed />} />
        <Route path="map" element={<Map />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
