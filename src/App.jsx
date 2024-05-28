// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedAuthors from './components/FeaturedAuthors';
import TopSellingBooks from './components/TopSellingBooks';
import FeaturedBooks from './components/FeaturedBooks';
// register Swiper custom elements
register();

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedAuthors />
      <TopSellingBooks />
      <FeaturedBooks />
    </>
  );
}

export default App;
