import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  //const categories = ['Sailor Moon', 'Saint Seiya', 'Pokemon'];

  const [categories, setCategories] = useState(['Saint Seiya'])

  const handleAdd = () => {
    setCategories([...categories, 'Magic Knights']);

    console.log(categories);
  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <AddCategory setCategories={setCategories} />

      <ol>

        {categories.map((category) => {
          return <GifGrid key={category} category={category} />
        })}
      </ol>
    </>
  )
}

export default GifExpertApp