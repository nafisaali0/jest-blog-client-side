import Footer from '../../shared/Footer/Footer';
import NewsLetter from '../../shared/NewsLetter/NewsLetter';
import Banner from './../../shared/Banner/Banner';
const Home = () => {
  return (
    <div className="bg-[#e7e7e9] overflow-hidden">
      <Banner></Banner>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default Home;