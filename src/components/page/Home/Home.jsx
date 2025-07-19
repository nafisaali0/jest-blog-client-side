import BloggerUser from '../../shared/BloggerUser/BloggerUser';
import CategoryHome from '../../shared/CategoryHome/CategoryHome';
import Network from '../../shared/Network/Network';
import TabHome from '../../shared/TabHome/TabHome';
import HomeWishList from '../../shared/HomeWishList/HomeWishList';
import HomeFeaturesBlog from '../../shared/HomeFeaturesBlog/HomeFeaturesBlog';
import HomeShortBlogs from '../../shared/HomeShortBlogs/HomeShortBlogs';
const Home = () => {
  return (
    <>
      <div className="max-w-[1300px] mx-auto">
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <div className='lg:col-span-2 w-full flex items-start flex-col mt-16'>
            <TabHome></TabHome>
          </div>
          <div className="lg:col-span-1 flex items-stretch flex-col mt-20">
            <CategoryHome></CategoryHome>
            <BloggerUser></BloggerUser>
            <HomeFeaturesBlog></HomeFeaturesBlog>
            <HomeWishList></HomeWishList>
          </div>
        </div>
        <Network></Network>
        <HomeShortBlogs></HomeShortBlogs>
      </div>
    </>
  );
};

export default Home;