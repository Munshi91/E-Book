// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
// register Swiper custom elements
register();

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
