import DashHomeBanner from "./DashHomeBanner";
import DashHomeBannerCard from "./DashHomeBannerCard";
import DashHomeOwnerBlogs from "./DashHomeOwnerBlogs";

const HomeDashboard = () => {
    return (
        <>
            <div>
                <DashHomeBanner></DashHomeBanner>
                <DashHomeBannerCard></DashHomeBannerCard>
                <DashHomeOwnerBlogs></DashHomeOwnerBlogs>
            </div>
        </>
    );
};

export default HomeDashboard;