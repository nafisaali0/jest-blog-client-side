import DashHomeBannerCard from "./DashHomeBannerCard";
import DashHomeOwnerBlogs from "./DashHomeOwnerBlogs";

const HomeDashboard = () => {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto px-3 overflow-hidden">
                <DashHomeBannerCard></DashHomeBannerCard>
                <DashHomeOwnerBlogs></DashHomeOwnerBlogs>
            </div>
        </>
    );
};

export default HomeDashboard;