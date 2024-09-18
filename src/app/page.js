import Link from 'next/link';
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>
        HomePage
      </h1>
      <Link
        href='/client'
        className='btn btn-accent'
      >
        Client
      </Link>
    </div>
  )
};

export default HomePage