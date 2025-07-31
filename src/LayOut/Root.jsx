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
            <div className="bg-[#f3f3f3]">
                {nosubHeader || <NavBar></NavBar>}
                <div className="min-h-screen max-w-[1300px] mx-auto pt-20 lg:pt-24 bg-bodyColor px-2 lg:px-5">
                    <Outlet></Outlet>
                </div>
                {(noFooter) || <Footer />}
            </div>

        </>
    );
};

export default Root;