import React from 'react'
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const fetchDrink = async (id) => {
  try {
    console.log(`${URL}${id}`)
    return await axios.get(`${URL}${id}`);
  } catch (e) {
    throw new Error('Failed to fetch');
  }
}


const DrinkPage = async ({ params }) => {
  const response = await fetchDrink(params.id);
  const drink = response.data.drinks[0];
  const {
    strDrink,
    strDrinkThumb
  } = drink;
  return (
    <div>
      <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
        Back
      </Link>
      <Image
        src={strDrinkThumb}
        width={300}
        height={300}
        className='w-48 h-48 rounded-lg shadow-lg mb-4'
        priority
        alt={strDrink}
      />
      <h1 className='text-4xl'>
        {strDrink}
      </h1>
    </div>
  )
}

export default DrinkPage;