import { Outlet } from "react-router-dom";
import NavBar from './../components/shared/NavBar/NavBar';
import SubNavBar from './../components/shared/SubNavBar/SubNavBar';
import Footer from './../components/shared/Footer/Footer';
import { AnimatePresence } from "framer-motion";
const Root = () => {
    return (
        <AnimatePresence>
            <div className="bg-white">
                <SubNavBar></SubNavBar>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </AnimatePresence>
    );
};

export default Root;