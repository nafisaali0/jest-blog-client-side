import BloggerUser from '../../shared/BloggerUser/BloggerUser';
import CategoryHome from '../../shared/CategoryHome/CategoryHome';
import Network from '../../shared/Network/Network';
// import NewsLetter from '../../shared/NewsLetter/NewsLetter';
import { AnimatePresence } from 'framer-motion';
import TabHome from '../../shared/TabHome/TabHome';
import HomeWishList from '../../shared/HomeWishList/HomeWishList';
import HomeFeaturesBlog from '../../shared/HomeFeaturesBlog/HomeFeaturesBlog';
import HomeShortBlogs from '../../shared/HomeShortBlogs/HomeShortBlogs';
const Home = () => {
  return (
    <AnimatePresence>
      <div className="overflow-hidden bg-body_color">
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 px-3 mt-32'>
          <div className='lg:col-span-2'>
            <TabHome></TabHome>
          </div>
          <div>
            <CategoryHome></CategoryHome>
            <BloggerUser></BloggerUser>
            <HomeFeaturesBlog></HomeFeaturesBlog>
            <HomeWishList></HomeWishList>
          </div>
        </div>
        <Network></Network>
        <HomeShortBlogs></HomeShortBlogs>
        {/* <NewsLetter></NewsLetter> */}
      </div>
    </AnimatePresence>
  );
};

export default Home;