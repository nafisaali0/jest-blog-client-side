import DashHomeBanner from "./DashHomeBanner";
import DashHomeBannerCard from "./DashHomeBannerCard";
import DashHomeOwnerBlogs from "./DashHomeOwnerBlogs";

const HomeDashboard = () => {
    return (
        <>
            {/* <div className="max-w-screen-2xl mx-auto px-3 py-28 overflow-hidden"> */}
            <div className="max-w-[1300px] mx-auto overflow-hidden">
                <DashHomeBanner></DashHomeBanner>
                <DashHomeBannerCard></DashHomeBannerCard>
                <DashHomeOwnerBlogs></DashHomeOwnerBlogs>
            </div>          
        </>
    );
};

export default HomeDashboard;