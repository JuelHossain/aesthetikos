import { ModalsProvider } from "@mantine/modals";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import BookingModal from "./components/modals/bookingModal";
import AllModal from "./components/shared/AllModal";
import Banner from "./pages/home/banner/Banner";
import NavigationBar from "./pages/home/banner/NavigationBar";

export default function App() {
  return (
    <ModalsProvider modals={{ bookingModal: BookingModal }}>
      <div className="min-h-screen flex justify-between flex-col">
        <Banner />
        <NavigationBar />

        <div className=" flex flex-col">
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
        <Footer />
        <AllModal />
      </div>
    </ModalsProvider>
  );
}
