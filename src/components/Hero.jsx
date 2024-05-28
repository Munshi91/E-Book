import Swiper from 'swiper';
import { Books } from '../data.js';
import { SwiperSlide } from 'swiper/react';

export const Hero = () => {
  return (
    <>
      <div className="mt-16 mx-10 md:mx-40 flex gap-28 ">
        <div>
          <h1 className="text-7xl font-bold mb-10 ">
            Unlock Worlds, <br />
            turn pages...
          </h1>
          <p className="text-xl">
            Journey through the pages, find solace in words, and let the stories
            within shape your world.
          </p>
        </div>
        <div className="w-72 ">
          <swiper-container effect="cards" autoplay="true">
            {Books.map((book, i) => (
              <swiper-slide>
                <img src={book.book_cover} alt={book.title} width="200px" />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#D3D5D1"
          fillOpacity="1"
          d="M0,192L26.7,197.3C53.3,203,107,213,160,218.7C213.3,224,267,224,320,197.3C373.3,171,427,117,480,96C533.3,75,587,85,640,122.7C693.3,160,747,224,800,213.3C853.3,203,907,117,960,80C1013.3,43,1067,53,1120,80C1173.3,107,1227,149,1280,154.7C1333.3,160,1387,128,1413,112L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};
