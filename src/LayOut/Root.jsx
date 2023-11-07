import { Outlet } from "react-router-dom";
import NavBar from './../components/shared/NavBar/NavBar';
import SubNavBar from './../components/shared/SubNavBar/SubNavBar';
import Footer from './../components/shared/Footer/Footer';

const Root = () => {
    return (
        <div>
            <SubNavBar></SubNavBar>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;