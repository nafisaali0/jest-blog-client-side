import MapBlogs from '../../shared/BlogsHome/MapBlogs';
import NewsLetter from '../../shared/NewsLetter/NewsLetter';
import Banner from './../../shared/Banner/Banner';
const Home = () => {
  return (
    <div className="bg-[#f0f2f5] overflow-hidden">
      <Banner></Banner>
      <MapBlogs></MapBlogs>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;