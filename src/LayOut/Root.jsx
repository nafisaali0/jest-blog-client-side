import { Outlet, useLocation } from "react-router-dom";
import NavBar from './../components/shared/NavBar/NavBar';
import Footer from './../components/shared/Footer/Footer';
import { AnimatePresence } from "framer-motion";

const Root = () => {
    const location = useLocation();
    const nosubHeader = location.pathname.includes('dashboard') 

    return (
        <AnimatePresence>
            <div>
                {nosubHeader || <NavBar></NavBar>}
                {/* <NavBar></NavBar> */}
                <Outlet></Outlet>
                {nosubHeader || <Footer></Footer>}
                {/* <Footer></Footer> */}
            </div>
        </AnimatePresence>
    );
};

export default Root;