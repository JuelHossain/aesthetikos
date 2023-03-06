import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import { ModalsProvider } from "@mantine/modals";
import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import BookingModal from "./components/modals/bookingModal";
import AllModal from "./components/shared/AllModal";
import Logo from "./components/shared/Logo";
import Banner from "./pages/home/banner/Banner";
import NavigationBar from "./pages/home/banner/NavigationBar";
import random from "./utils/random";

export default function App() {
  const [{ y }] = useWindowScroll();
  const { width, height } = useViewportSize();
  const ref = useRef();
  console.log("width :>> ", width);
  console.log("height :>> ", height);

  const [spring, api] = useSpring(() => ({ from: { y: -50, rotate: -35 } }));

  useEffect(() => {
    api.start({
      rotate: y === 0 ? -35 : random(-45, 45),
      y:y+200,
      x: y === 0 ? 0 : random((width - width * 2) / 1.2, 100),
    });
  }, [y, api, width]);

  return (
    <ModalsProvider modals={{ bookingModal: BookingModal }}>
      <div ref={ref} className="min-h-screen flex justify-between flex-col overflow-hidden relative">
        <div>
          {" "}
          <Banner />
          <NavigationBar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
        {/* <Footer /> */}
        <AllModal />
        <animated.div
          style={spring}
          className="absolute  w-60 xs:w-72 sm:w-80 md:w-96 lg:w-[450px] xl:w-[520px] xxl:w-[600px]  right-0 z-[1]"
        >
          <Logo className="  opacity-10" path="fill-neu-5" />
        </animated.div>
      </div>
    </ModalsProvider>
  );
}
