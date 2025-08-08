import { Outlet } from "react-router-dom";
import NavDashboard from "../components/page/Dashboard/NavDashboard/NavDashboard";
import { FaBars } from "react-icons/fa6";

const Dashboard = () => {
    return (
        <>
            {/* <div className="mb-10 w-full h-96 p-5">
                <div className="">
                    
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div> */}

            <div className="flex justify-start bg-bodyColor">
                <div className="w-20 md:w-60 border-r border-borderColour">
                    <NavDashboard></NavDashboard>
                </div>
                <div className="p-3">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;