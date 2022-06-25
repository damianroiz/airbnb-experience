import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function App() {
    return (
        <div>
           <Navbar />
           <Hero />
           <Card 
                    img="swimmer.png"
                    rating={5.0}
                    reviewCount={6}
                    country="USA"
                    title="Life Lessons with Katie Zaferes"
                    price={136}
           />
           <Card 
                    img="wedding.png"
                    rating={5.0}
                    reviewCount={30}
                    country="New Zealand"
                    title="Learn wedding Photography"
                    price={125}
           />
           <Card 
                    img="mountain-bike.png"
                    rating={4.8}
                    reviewCount={2}
                    country="Canada"
                    title="Group Mountain Biking"
                    price={80}
           />
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
