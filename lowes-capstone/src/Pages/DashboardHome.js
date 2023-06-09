import React from 'react';
import Card from '../Components/Card';
// import logo from '../we-are.jpeg'
import data from '../Components/cardData'
import classes from './Home.module.css'
import Footer from '../Components/footer';
import Hero from '../Components/Hero';
import DashboardWorkshopCard from '../Components/DashboardWorkshopCard';
import WorkshopInfo from '../Components/WorkshopInfo';
import DashboardNav from '../Components/DashboardNav';
import Banner from '../Components/Banner';


function DashboardHome(item) {
  return (
    <div className={classes.homeContainer}>
      <DashboardNav />
      <Banner />
        <Hero />
<WorkshopInfo />
        <div className={classes.workshopContainer}>
        <section className={classes.section}>
        <h2 className={classes.workshopCategory}>In-Person Workshops</h2>
        <h3>{item.category}</h3>
        <div>
            {/* <Card props = {data} width='100%'/> */}
            <DashboardWorkshopCard props={data}/>
        </div>
        </section>
        <section className={classes.section}>
       <h2 className={classes.workshopCategory}>Virtual Workshops</h2>
         <div className={classes.cardsWrapper}>
            <Card props = {data} width='100%'/>
        </div>
        </section>
            </div>

            <Footer />
    </div>
  )
}

export default DashboardHome