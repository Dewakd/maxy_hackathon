import React from 'react';

function AboutSection() {
  const solutions = [
    {
      subTitle: 'What is',
      title: 'Desa Leuwimalang',
      description:
        'Desa Leuwimalang adalah sebuah desa yang terletak di Kecamatan Cisarua, Kabupaten Bogor, Jawa Barat, Indonesia. Dikenal karena keindahan alamnya yang memukau, desa ini dikelilingi oleh pegunungan, kebun teh, dan hutan, menawarkan pemandangan yang menakjubkan serta udara sejuk yang menyegarkan. Di kawasan ini, pengunjung dapat menikmati berbagai aktivitas luar ruangan seperti trekking dan bersepeda, serta menjelajahi jalur-jalur yang ada. Selain itu, desa ini juga menawarkan berbagai pilihan kuliner lokal yang lezat di warung dan restoran sekitar.',
      img: 'https://images.unsplash.com/photo-1664825381616-5cb8397fd9b1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      subTitle: 'More information about',
      title: 'Desa Leuwimalang',
      description:
        'Nama "Leuwimalang" berasal dari bahasa Sunda, yang berarti "sungai" dan mencerminkan kesuburan wilayahnya. Daerah ini memiliki sejarah sebagai kawasan pertanian dan perkebunan, terutama teh dan sayuran, yang menjadi sumber penghasilan utama bagi penduduk lokal. Selain itu, sektor pariwisata kini turut berkontribusi terhadap perekonomian, dengan berbagai tempat wisata, seperti kebun teh, resort, dan kegiatan outdoor yang menarik.',
      img: 'https://images.unsplash.com/photo-1503232478550-492d531afef9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      subTitle: 'Where is exactly',
      title: 'Desa Leuwimalang',
      description:
        'Leuwimalang adalah sebuah desa yang terletak di Kecamatan Cisarua, Kabupaten Bogor, Jawa Barat, Indonesia. Secara geografis, Leuwimalang berada di dataran tinggi yang dikelilingi oleh pegunungan dan kebun teh, memberikan suasana yang sejuk dan pemandangan yang indah. Desa ini berjarak sekitar 20 kilometer dari pusat Kota Bogor dan dapat diakses melalui jalur utama yang menghubungkan Bogor dengan Puncak.',
      img: 'https://images.unsplash.com/photo-1710087305989-3692d5f1b712?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Solutions Grid */}
        <div className="grid grid-cols-1 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row mb-10 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-start`}
            >
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <img
                  src={solution.img}
                  alt={solution.title}
                  className="rounded-lg w-full h-48 md:h-64 object-cover"
                />
              </div>
              <div className="md:w-1/2 md:pl-6">
                <h3 className="text-lg font-semibold text-gray-900">{solution.subTitle}</h3>
                <h2 className="text-xl font-bold text-gray-900 mt-2">{solution.title}</h2>
                <p className="text-gray-600 mt-4">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
