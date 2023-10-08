import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const Layout = () => {
    return (
        <div className="font-gothic">
            <Navbar />
            <Outlet/>
            <Footer/>
            <div><Toaster/></div>
        </div>
    );
};

export default Layout;