import { Route, Routes } from "react-router-dom";
import Register from "./components/register/Register";
import HomeLayout from "./components/layout/HomeLayout";
import Home from "./components/map/Home";
import Feed from "./components/feed/Feed";
import Map from "./components/map/Map";
import Profile from "./components/profile/Profile";
import NotFound from "./components/notfound/NotFound";

function App() {
  return (
    <div className="relative w-lg mx-auto h-dvh bg-light dark:bg-dark">
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
    </div>
  );
}

export default App;
