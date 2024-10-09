import React from 'react'
import Herobanner from './components/Homepage/Herobanner'
import TopValues from './components/Homepage/TopValues'
import ChooseTour from './components/Homepage/ChooseTour'
import HeroTravel from './components/Homepage/HeroTravel'
import BlogSection from './components/Homepage/BlogSection'




export default function Homepage() {
  return (
    <div className='w-full'>
        <Herobanner />
        <TopValues/>
        <ChooseTour/>
        <HeroTravel/>
        <BlogSection/>
    </div>
  )
}
