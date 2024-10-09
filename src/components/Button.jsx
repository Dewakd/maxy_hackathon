import React from 'react'
import { Link } from 'react-router-dom';

export default function Button(props) {
    const { buttonText , transparent} = props
    return (
      <Link to='/alldestination'>
        <button className={`transition-all ease-in-out duration-300 font-geo px-10 py-[12px] rounded-full border text-[14px] hover:text-light text-dark ${transparent ? 'bg-transparent hover:text-light hover:bg-dark' : 'bg-light hover:bg-transparent'}`}>{buttonText}</button>
      </Link>
    )
  }
  
