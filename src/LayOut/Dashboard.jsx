import { Outlet } from "react-router-dom";
import NavDashboard from "../components/page/Dashboard/NavDashboard/NavDashboard";
import DashHomeBanner from "../components/page/Dashboard/HomeDashboard/DashHomeBanner";

const Dashboard = () => {
    return (
        <>
            <div className="mb-10">
                <div className="bg-dash_nav">
                    <NavDashboard></NavDashboard>
                </div>
                <div className="bg-dash_nav w-full h-80 lg:h-96">
                    <div className="max-w-screen-2xl mx-auto px-3 py-28 overflow-hidden">
                        <DashHomeBanner></DashHomeBanner>
                    </div>
                </div>

                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Dashboard;