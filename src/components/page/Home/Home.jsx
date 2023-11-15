import MapBlogs from '../../shared/BlogsHome/MapBlogs';
import CategoryHome from '../../shared/CategoryHome/CategoryHome';
import NewsLetter from '../../shared/NewsLetter/NewsLetter';
import RecentBlog from '../../shared/RecentBlog/RecentBlog';
import Banner from './../../shared/Banner/Banner';
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Banner></Banner>
      <CategoryHome></CategoryHome>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <MapBlogs></MapBlogs>
        <RecentBlog></RecentBlog>
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;