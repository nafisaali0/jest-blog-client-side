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
                <div className="flex-1 ml-16 md:ml-60 min-h-screen max-w-[1300px] mx-auto pt-20 lg:pt-24 bg-bodyColor px-2 lg:px-5  overflow-y-auto bg-white">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;