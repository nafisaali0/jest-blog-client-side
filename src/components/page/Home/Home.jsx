import BloggerUser from '../../shared/BloggerUser/BloggerUser';
import CategoryHome from '../../shared/CategoryHome/CategoryHome';
import Network from '../../shared/Network/Network';
import NewsLetter from '../../shared/NewsLetter/NewsLetter';
import RecentBlog from '../../shared/RecentBlog/RecentBlog';
import Banner from './../../shared/Banner/Banner';
import { AnimatePresence } from 'framer-motion';
const Home = () => {
  return (
    <AnimatePresence>
      <div className="overflow-hidden">
        <Banner></Banner>
        <CategoryHome></CategoryHome>
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 px-3'>
          <RecentBlog></RecentBlog>
          <BloggerUser></BloggerUser>
        </div>
        <Network></Network>
        <NewsLetter></NewsLetter>
      </div>
    </AnimatePresence>
  );
};

export default Home;