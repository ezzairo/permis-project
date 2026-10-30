import Hero from './Hero';
import Card from './Card';
import { cards } from './cards';
import './Execution.css';

export default function Execution() {
  return (
    <div>
      <div className="container">
        <Hero />

        <h2 className="section-title">Nos Formations</h2>

        <div className="cards-grid">
          {cards.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
