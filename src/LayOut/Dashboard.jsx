import { Outlet } from "react-router-dom";
import NavDashboard from "../components/page/Dashboard/NavDashboard/NavDashboard";

const Dashboard = () => {
    return (
        <>
            <div className="mb-10">
                <div className="bg-dash_nav">
                    <NavDashboard></NavDashboard>
                </div>

                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Dashboard;