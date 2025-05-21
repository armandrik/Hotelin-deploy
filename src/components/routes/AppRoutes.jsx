import { Route, Routes } from "react-router-dom";
import Register from "./../register/Register";
import HomeLayout from "./../layout/HomeLayout";
import Home from "../home/Home";
import Feed from "./../feed/Feed";
import Map from "./../map/Map";
import Profile from "./../profile/Profile";
import NotFound from "./../notfound/NotFound";

function AppRoutes() {
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
}

export default AppRoutes;
