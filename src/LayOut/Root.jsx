import { Outlet } from "react-router-dom";
// import NavBar from './../components/shared/NavBar/NavBar';
import SubNavBar from './../components/shared/SubNavBar/SubNavBar';

const Root = () => {
    return (
        <div>
            <SubNavBar></SubNavBar>
            {/* <NavBar></NavBar> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;