import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Cards'
import data from './data'


function App() {
  const cards = data.map(data => {
    return <Card
      key = {data.id}
      item = {data}
    />
  })

  return (
    <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
          {cards}
        </section>
    </div>
  )
}

export default App