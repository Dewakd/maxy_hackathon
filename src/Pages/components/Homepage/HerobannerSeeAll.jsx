import React from 'react'

export default function HerobannerSeeAll() {
  return (
    <div className='w-full h-[75vh] my-3 flex items-center font-geo'>
        <div className=' bg-seeAllHero bg-center bg-cover h-[90%] w-[95vw] sm:w-[90vw] mx-auto rounded-[50px]' style={{
          backgroundColor: 'rgba(11, 11, 16, 0.45)', // RGBa ungu dengan opasitas
          backgroundBlendMode: 'multiply'
        }}>
            <div className='flex flex-col justify-center items-start w-[100%] md:w-[70%] h-full px-5 sm:px-10 xl:px-36 text-light'>
                <h1 className='text-3xl sm:text-5xl md:text-6xl leading-snug font-bold'>What's Leuwimalang has?</h1>
                <p className='text-lg sm:text-xl my-8 w-full xl:w-1/2'>Scroll down to know more</p>
            </div>
        </div>
    </div>
  )
}
