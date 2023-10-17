import React from 'react'
import Header from '../../Header/Header'
import HomeBlock from '../../HomeComponent/HomeBlock'
import Categories from '../../Categories/Categories'
// import './HomeStyles.css'
const Home = () => {
  return (
    <>
    <Header />
    <main className='main'>
      <HomeBlock />
      <Categories />
    </main>

    </>
    
  )
}

export default Home