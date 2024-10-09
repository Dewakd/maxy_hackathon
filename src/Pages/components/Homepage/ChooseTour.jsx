import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import 'swiper/css';
import 'swiper/css/scrollbar';
import Button from '../../../components/Button';

function ChooseTour() {
  const tours = [
    {
      name: 'Wisata Air Terjun',
      img: 'https://images.unsplash.com/photo-1564500601744-d5dfe4e7ab72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/wisata/airterjun',  // Route for the first card
    },
    {
      name: 'Wisata Liburan',
      img: 'https://images.unsplash.com/photo-1529316275402-0462fcc4abd6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/wisata/liburan',  // Route for the second card
    },
    {
      name: 'Wisata Agriculture',
      img: 'https://images.unsplash.com/photo-1570913141769-73e3e38d61d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/wisata/agriculture',  // Route for the third card
    },
    {
      name: 'Penginapan',
      img: 'https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/wisata/penginapan',  // Route for the fourth card
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-start sm:flex-row sm:justify-between sm:items-center">
        <h2 className="text-3xl sm:text-5xl font-geo font-bold  text-gray-900 mb-4 sm:mb-0">Choose your tour</h2>
        <Button buttonText="See All" transparent={true} className="btn-primary"><Link to='/alldestination'></Link></Button>
      </div>

      <div className="mt-10">
        <div className="flex justify-center min-h-[370px]">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}  // Ensure 1 slide per view on small screens
            scrollbar={{ draggable: true }}
            modules={[Scrollbar]}
            breakpoints={{
              640: {
                slidesPerView: 2.5,
                spaceBetween: 30,  // Increase space between for larger screens
              },
              1024: {
                slidesPerView: 3.5,
              },
              1280: {
                slidesPerView: 4.5,
              },
            }}
            className="mySwiper -mb-10"
          >
            {tours.map((tour, index) => (
              <SwiperSlide key={index} className="min-w-[280px] sm:min-w-[300px] sm:max-w-[350px]">
                {/* Wrap each card with Link */}
                <Link to={tour.path}>
                  <div className="rounded-lg shadow-lg overflow-hidden max-h-[350px]">
                    <img
                      src={tour.img}
                      alt={tour.name}
                      className="w-full h-72 object-cover"  // Ensure image fills area
                    />
                    <div className="p-4 flex justify-between">
                      <h3 className="text-lg font-geo text-gray-900">{tour.name}</h3>
                      <span className="text-xl text-black">→</span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ChooseTour;
