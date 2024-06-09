import { Outlet } from "react-router-dom";
import NavDashboard from "../components/page/Dashboard/NavDashboard/NavDashboard";

const Dashboard = () => {
    return (
        <>
            <div className="mb-10 bg-dash_nav w-full h-96 p-5">
                <div className="bg-dash_nav">
                    <NavDashboard></NavDashboard>
                </div>
                <div className="max-h-screen">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;