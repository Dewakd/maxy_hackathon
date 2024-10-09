import React from 'react';
import { Icon } from '@iconify/react';

export default function TopValues() {
  return (
    <div className="bg-light py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-3xl sm:text-5xl font-geo font-bold text-gray-900">Top values for you</h2>
        <p className="mt-5 text-base font-geoLight text-gray-600">
          Try variety of benefits when using our services
        </p>
      </div>

      <div className="mt-3 md:mt-10 grid grid-cols-1 xl:gap-y-10 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 max-w-7xl mx-auto">
        <div className="text-center my-7">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-darkLight">
            <Icon icon="carbon:plane-private" className="text-3xl" />
          </div>
          <h3 className="mt-4 text-2xl font-geo text-gray-900 font-bold">Airport pickup</h3>
          <p className="mt-2 text-lg font-geoLight text-gray-600">
            We provide escort from the airport to the hotel
          </p>
        </div>

        <div className="text-center my-7">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full  bg-darkLight">
            <Icon icon="solar:wallet-broken" className="text-3xl" />
          </div>
          <h3 className="mt-4 text-2xl font-geo text-gray-900 font-bold">Easy Booking</h3>
          <p className="mt-2 text-lg font-geoLight text-gray-600">
            Quick and easy booking of tours for upcoming dates
          </p>
        </div>

        <div className="text-center my-7">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full  bg-darkLight">
            <Icon icon="material-symbols-light:tour-outline" className="text-3xl" />
          </div>
          <h3 className="mt-4 text-2xl font-geo text-gray-900 font-bold">Best Tour Guide</h3>
          <p className="mt-2 text-lg font-geoLight text-gray-600">
            Our best tour guide is ready to guide your trip
          </p>
        </div>

        <div className="text-center my-7">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full  bg-darkLight">
            <Icon icon="iconamoon:discount-thin" className="text-3xl" />
          </div>
          <h3 className="mt-4 text-2xl font-geo text-gray-900 font-bold">Lots of Promos</h3>
          <p className="mt-2 text-lg font-geoLight text-gray-600">
            Various promotions and drawings of tours
          </p>
        </div>
      </div>
    </div>
  );
}
