import React from 'react';
import Card from '../Components/Card';
// import logo from '../we-are.jpeg'
import data from '../Components/cardData.json'
import Carousel from '../Components/Carousel';
import './Home.css'

const Home = () => {

  return (
    <div>
        <Carousel />
        <section className='section'>
        <h2>Workshop Category 1</h2>
        <div class='cardsWrapper'>
            <Card props = {data} width='100%' className="card"/>
        </div>
        </section>
        <section className='section'>
        <h2>Workshop Category 2</h2>
        <div class='cardsWrapper'>
            <Card props = {data} width='100%' className="card"/>
        </div>
        </section>
        <section className='section'>
        <h2>Workshop Category 3</h2>
        <div class='cardsWrapper'>
            <Card props = {data} width='100%' className="card"/>
        </div>
        </section>
    </div>
  )
}

export default Home
