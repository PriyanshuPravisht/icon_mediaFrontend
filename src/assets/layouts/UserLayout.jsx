import { useEffect } from "react";
// import { useThemeStore } from "../../store/themeStore";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";

export const UserLayout = () => {
  // const { theme } = useThemeStore();

  // useEffect(() => {
  //   document.body.classList.remove("light-theme", "dark-theme");
  //   document.body.classList.add(
  //     theme === "dark" ? "dark-theme" : "light-theme"
  //   );
  // }, [theme]);
  
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
