import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import { ModalsProvider } from "@mantine/modals";
import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import Footer from "./components/footer/Footer";
import BookingModal from "./components/modals/bookingModal";
import AllModal from "./components/shared/AllModal";
import Logo from "./components/shared/Logo";
import Banner from "./pages/home/banner/Banner";
import NavigationBar from "./pages/home/banner/NavigationBar";
import random from "./utils/random";

export default function App() {
  const [{ y }] = useWindowScroll();
  const { width } = useViewportSize();
  const ref = useRef();

  const [spring, api] = useSpring(() => ({ from: { y: -50, rotate: -35 } }));

  useEffect(() => {
    api.start({
      rotate: y === 0 ? -35 : random(-45, 45),
      y: y + 200,
      x: y === 0 ? 0 : random((width - width * 2) / 1.2, 100),
      scale: random(8, 12) / 10,
      // scale: y / 1000,
      // delay: 500,
    });
  }, [y, api, width]);

  return (
    <ModalsProvider modals={{ bookingModal: BookingModal }}>
      <div
        ref={ref}
        className="min-h-screen flex justify-between flex-col overflow-hidden relative bg-blue-50/5 z-0 font-main"
      >
        <div>
          <Banner />
          <NavigationBar />
        </div>
        <div className="flex-1 z-[3] bg-transparent">
          <Outlet />
        </div>
        <Footer />
        <AllModal />
        <animated.div
          style={spring}
          className="absolute  w-60 xs:w-72 sm:w-80 md:w-96 lg:w-[450px] xl:w-[520px] xxl:w-[600px]  right-0 z-[2]"
        >
          <Logo className="  opacity-10" path="fill-neu-5" />
        </animated.div>
      </div>
    </ModalsProvider>
  );
}
