import Hero from '../components/Hero'
import Card from '../components/Card'
import { cards } from '../data/cards'
import './Home.css'

export default function Home() {
  return (
    <div>
      <div className="container">
        <Hero />

        <h2 className="section-title">
          Nos Formations
        </h2>

        <div className="cards-grid">
          {cards.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        <div className="more-btn-container">
          <button className="more-btn">
            Voir plus 
          </button>
        </div>
      </div>
    </div>
  )
}