import React from 'react'
import axios from 'axios';
import DrinksList from '@/components/DrinksList';
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async () => {
  try {
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    return await axios.get(URL);
  } catch (e) {
    throw new Error('Failed to fetch');
  }
}

const DrinksPage = async () => {
  const response = await fetchDrinks();  
  return (
    <DrinksList
      drinks={response.data.drinks}
    />
  )
}

export default DrinksPage