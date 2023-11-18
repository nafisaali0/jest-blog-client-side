import BloggerUser from '../../shared/BloggerUser/BloggerUser';
import CategoryHome from '../../shared/CategoryHome/CategoryHome';
import NewsLetter from '../../shared/NewsLetter/NewsLetter';
import RecentBlog from '../../shared/RecentBlog/RecentBlog';
import Banner from './../../shared/Banner/Banner';
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Banner></Banner>
      <CategoryHome></CategoryHome>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-3'>
        <RecentBlog></RecentBlog>
        <BloggerUser></BloggerUser>
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;