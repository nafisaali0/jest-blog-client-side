import { Outlet } from "react-router-dom";
import NavDashboard from "../components/page/Dashboard/NavDashboard/NavDashboard";

const Dashboard = () => {
    return (
        <>
            <div className="mb-10 bg-dash_nav w-full h-96 p-5">
                <div className="">
                    <NavDashboard></NavDashboard>
                </div>
                {/*  className="max-h-screen" */}
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;