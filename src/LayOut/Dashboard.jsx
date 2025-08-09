import { Outlet } from "react-router-dom";
import NavDashboard from "../components/page/Dashboard/NavDashboard/NavDashboard";
import { useState } from "react";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="flex bg-mainTheme">
                <div className={`w-16 md:w-60 fixed left-0 top-0 h-screen border-r border-borderColour
                    ${isOpen ? "w-60 border-r border-borderColour bg-mainTheme z-50" : "w-16"} `}>
                    <NavDashboard
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    ></NavDashboard>
                </div>
                <div className="flex-1 ml-16 md:ml-60 lg:px-14 md:px-5 px-3 py-10 bg-bodyColor overflow-hidden border border-borderColour">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;