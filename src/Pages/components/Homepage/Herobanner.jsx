import React from 'react'
import Button from '../../../components/Button'

export default function Herobanner() {
  return (
    <div className='w-full h-[75vh] my-3 flex items-center font-geo'>
        <div className=' bg-herobanner bg-center bg-cover h-[90%] w-[95vw] sm:w-[90vw] mx-auto rounded-[50px]'>
            <div className='flex flex-col justify-center items-start w-[100%] md:w-[70%] h-full px-5 sm:px-10 xl:px-36 text-light'>
                <h1 className='text-3xl sm:text-5xl md:text-6xl leading-snug	font-bold'>Explore the sights <br/> of the Leuwimalang</h1>
                <p className='text-xl sm:text-2xl my-8'>A place where nature and adventure unite</p>
                <Button buttonText='Book Now' transparent ={false}/>
            </div>
        </div>
    </div>
  )
}
