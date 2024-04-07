import { Outlet } from "react-router-dom";
import NavDashboard from "../components/page/Dashboard/NavDashboard/NavDashboard";



const Dashboard = () => {
    return (
        <>
            <div className="mb-10">
                <NavDashboard></NavDashboard>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Dashboard;