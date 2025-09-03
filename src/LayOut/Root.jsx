import { Outlet, useLocation } from "react-router-dom";
import NavBar from './../components/shared/NavBar/NavBar';
import Footer from './../components/shared/Footer/Footer';
import { useEffect, useState } from "react";
import Loader from "../components/shared/Loader/Loader";

const Root = () => {

    const location = useLocation();
    const noFooter = location?.pathname.includes('signin') || location.pathname.includes('signup') || location.pathname.includes('loader');
    const noNavbar = location?.pathname.includes('signin') || location.pathname.includes('signup') || location.pathname.includes('loader');

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <div className="bg-bodyColor">
                {noNavbar || <NavBar></NavBar>}
                <div className="min-h-screen max-w-[1300px] mx-auto pt-20 lg:pt-24 bg-bodyColor px-2 lg:px-5">
                    <Outlet></Outlet>
                </div>
                {(noFooter) || <Footer />}
            </div>
        </>
    );
};

export default Root;