import { Outlet } from "react-router-dom";
import NavBar from './../components/shared/NavBar/NavBar';
import Footer from './../components/shared/Footer/Footer';
import { AnimatePresence } from "framer-motion";

const Root = () => {

    return (
        <AnimatePresence>
            <div className="bg-white">
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </AnimatePresence>
    );
};

export default Root;