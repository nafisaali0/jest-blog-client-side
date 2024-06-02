import DashHomeBanner from "./DashHomeBanner";
import DashHomeBannerCard from "./DashHomeBannerCard";
import DashHomeOwnerBlogs from "./DashHomeOwnerBlogs";

const HomeDashboard = () => {
    return (
        <>
            <div className="bg-dash_nav w-full h-80">
                <div className="max-w-screen-2xl mx-auto px-3 py-28 overflow-hidden">
                    <DashHomeBanner></DashHomeBanner>
                    <DashHomeBannerCard></DashHomeBannerCard>
                    <DashHomeOwnerBlogs></DashHomeOwnerBlogs>
                </div>
            </div>
        </>
    );
};

export default HomeDashboard;