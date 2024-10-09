import React, { useState } from 'react';

function DestinationSection() {
  const destinations = [
    {
      title: 'Aquarius Orange Resort',
      description: 'Resort ini dikenal dengan suasana yang tenang dan pemandangan alam yang indah, menjadikannya pilihan populer bagi pengunjung yang ingin bersantai dan menikmati waktu bersama keluarga atau teman.',
      img: 'https://images.unsplash.com/photo-1497470191578-6f6f476480c7?q=80&w=2035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Air Terjun Cilember',
      description: 'Air Terjun Cilember adalah destinasi wisata populer yang terletak di Bogor, Jawa Barat, Indonesia. Air terjun ini terkenal karena keindahan alamnya, dengan suasana yang tenang, dikelilingi oleh pepohonan hijau yang rimbun dan udara pegunungan yang sejuk. Terdapat tujuh air terjun di kawasan ini, dan yang paling tinggi menjadi daya tarik utama.',
      img: 'https://images.unsplash.com/photo-1464419014442-769c523d575b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHdhdGVyZmFsbHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Hotel Megamendung',
      description: 'Hotel Megamendung adalah salah satu pilihan akomodasi yang terletak di kawasan Leuwimalang, Bogor, Jawa Barat, tepatnya di area Megamendung yang terkenal dengan suasana pegunungannya yang sejuk. Hotel ini menawarkan pemandangan indah dan udara yang segar, sangat cocok untuk wisatawan yang ingin bersantai jauh dari keramaian kota.',
      img: 'https://images.unsplash.com/photo-1534009502677-4e5080efa8c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvb2x8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Kebun Teh Walini',
      description: 'Kebun Teh Walini yang terletak di Leuwimalang, Bogor, adalah salah satu tempat wisata yang terkenal dengan pemandangan alamnya yang indah dan hamparan kebun teh yang luas. Terletak di kawasan Puncak, kebun teh ini menawarkan udara yang sejuk dan segar, menjadikannya tempat yang ideal untuk bersantai dan menikmati alam.',
      img: 'https://images.unsplash.com/photo-1535008652995-e95986556e32',
    },
    {
      title: 'Royal Safari',
      description: 'Royal Safari Leuwimalang adalah sebuah taman wisata yang terletak di Leuwimalang, Bogor, Jawa Barat. Tempat ini menawarkan berbagai atraksi dan pengalaman yang cocok untuk seluruh anggota keluarga, dengan fokus pada interaksi dengan hewan dan alam.',
      img: 'https://images.unsplash.com/photo-1546954552-eb2ada4a3654?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Chocomory Leuwimalang',
      description: 'Chocomory Leuwimalang adalah salah satu destinasi wisata kuliner yang populer di daerah Leuwimalang, Bogor, Jawa Barat. Tempat ini terkenal dengan berbagai olahan cokelat yang lezat dan menjadi tempat yang cocok untuk pecinta cokelat serta keluarga yang ingin menikmati suasana yang menyenangkan.',
      img: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Restaurant Kamana',
      description: 'Restaurant Kamana Leuwimalang adalah salah satu tempat makan yang terkenal di daerah Leuwimalang, Bogor, Jawa Barat. Restoran ini dikenal dengan suasana yang nyaman dan pemandangan alam yang indah, menjadikannya pilihan yang baik untuk bersantap sambil menikmati keindahan sekitar.',
      img: 'https://cdn0-production-images-kly.akamaized.net/Cl770wtwaFuMVkEx7btkJWNwvbA=/1280x720/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2514267/original/056523700_1543839083-1.jpg',
    },
    {
      title: 'Breeve Hills',
      description: 'Breeve Hills Leuwimalang adalah sebuah destinasi wisata yang terletak di Leuwimalang, Bogor, Jawa Barat. Tempat ini dikenal dengan suasana alam yang sejuk dan pemandangan yang indah, menjadikannya pilihan populer untuk bersantai dan berlibur, terutama bagi pengunjung dari Jakarta dan sekitarnya.',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/25/14/c5/caption.jpg?w=900&h=-1&s=1',
    },
    {
      title: 'Perkebunan Teh Gunung Mas',
      description: 'Perkebunan Teh Gunung Mas adalah salah satu destinasi wisata yang terletak di daerah Leuwimalang, Bogor, Jawa Barat. Perkebunan ini dikenal dengan pemandangan yang indah, udara yang sejuk, dan hamparan kebun teh yang luas, membuatnya menjadi tempat yang populer untuk bersantai dan menikmati alam.',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/be/ce/b0/breeve-hills-resto-cafe.jpg?w=900&h=-1&s=1',
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-geo font-bold text-gray-900 text-center mb-20 flex flex-col items-center">
          Leuwimalang's <br /> Destination
          <span className="w-[100px] h-[5px] bg-dark mt-4"></span>
        </h2>

        {/* Grid for Destination Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <div key={index} className="rounded-[2rem] shadow-xl overflow-hidden relative">
              <img
                src={destination.img}
                alt={destination.title}
                className="w-full h-[300px] object-cover rounded-[50px]"
              />
              <div className="p-6">
                <h3 className="text-lg font-geo text-gray-900">{destination.title}</h3>

                {/* Handle the content expansion/collapse */}
                <div
                  className={`relative transition-all duration-500 ease-in-out ${
                    expandedIndex === index ? 'max-h-none' : 'max-h-[60px] overflow-hidden'
                  }`}
                >
                  <p className="text-gray-500 mt-2">
                    {destination.description}
                  </p>

                  {/* Overlay for gradient fade */}
                  {expandedIndex !== index && (
                    <div className="absolute bottom-0 left-0 right-0 h-[20px] bg-gradient-to-t from-white to-transparent"></div>
                  )}
                </div>

                <button
                  onClick={() => toggleReadMore(index)}
                  className="text-dark font-semibold mt-4 inline-block"
                >
                  {expandedIndex === index ? 'Show less' : 'Read more'} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DestinationSection;
