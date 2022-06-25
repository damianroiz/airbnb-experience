import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"
import './style.css'

export default function App() {
    const cardContent =  data.map((item) => {
        return (
            <Card 
                img={item.coverImg}
                rating={item.status.rating}
                reviewCount={item.status.reviewCount}
                country={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })
    return (
        <div>
           <Navbar />
           <Hero />
           <section className="card-container">
           {cardContent}
           </section>
        
        </div>
        
    )
}


/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/
