import { Outlet, useLocation } from "react-router-dom";
import NavBar from './../components/shared/NavBar/NavBar';
import Footer from './../components/shared/Footer/Footer';
// import { AnimatePresence } from "framer-motion";

const Root = () => {
    const location = useLocation();
    const nosubHeader = location.pathname.includes('dashboard')
    const noFooter = location.pathname.includes('signin') || location.pathname.includes('signup');
    // console.log(noFooter)

    return (
        <>
            {nosubHeader || <NavBar></NavBar>}
            <Outlet></Outlet>
            {(noFooter) || <Footer />}
        </>
    );
};

export default Root;