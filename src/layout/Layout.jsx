import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Layout = () => {
    
//useEffect
useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
        <div className="font-gothic" data-aos="fade-in"
        data-aos-duration="1000"
        >
            <Navbar />
            <Outlet/>
            <Footer/>
            <div><Toaster/></div>
        </div>
    );
};

export default Layout;