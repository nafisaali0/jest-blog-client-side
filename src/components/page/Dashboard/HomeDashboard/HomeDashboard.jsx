import DashHomeBanner from "./DashHomeBanner";
import DashHomeBannerCard from "./DashHomeBannerCard";

const HomeDashboard = () => {
    return (
        <>
            <div className="bg-dash_nav w-full h-96">
                <DashHomeBanner></DashHomeBanner>
                <DashHomeBannerCard></DashHomeBannerCard>
            </div>
        </>
    );
};

export default HomeDashboard;