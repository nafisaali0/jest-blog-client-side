import BloggerUser from '../../shared/BloggerUser/BloggerUser';
import CategoryHome from '../../shared/CategoryHome/CategoryHome';
import Network from '../../shared/Network/Network';
import TabHome from '../../shared/TabHome/TabHome';
import HomeWishList from '../../shared/HomeWishList/HomeWishList';
import HomeFeaturesBlog from '../../shared/HomeFeaturesBlog/HomeFeaturesBlog';
import HomeShortBlogs from '../../shared/HomeShortBlogs/HomeShortBlogs';
import useWishLIst from '../../../hooks/useWishList';


const Home = () => {

  const [wishList] = useWishLIst();
  return (
    <>
      <div className="max-w-[1300px] mx-auto">
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-2'>
          <div className='lg:col-span-2 w-full flex items-start flex-col'>
            <TabHome />
          </div>
          <div className="lg:col-span-1 flex items-stretch flex-col">
            <CategoryHome />
            <BloggerUser />
            <HomeFeaturesBlog />
            {wishList && wishList.length > 0 && <HomeWishList />}
          </div>
        </div>
        <Network />
        <HomeShortBlogs />
      </div>
    </>
  );
};

export default Home;