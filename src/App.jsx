import { useEffect, useState } from "react";
import {AppRoutes} from "src/components";
import {SplashScreen} from "src/components";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("splashShown") === "true";

    if (alreadyShown) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
      const timer = setTimeout(() => {
        sessionStorage.setItem("splashShown", "true");
        setIsLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative max-w-lg mx-auto h-dvh bg-light overflow-y-scroll no-scrollbar dark:bg-dark">
      {isLoading ? <SplashScreen /> : <AppRoutes />}
    </div>
  );
}

export default App;
