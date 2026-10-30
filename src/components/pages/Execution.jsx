import React from 'react';
import Hero from '../components/Hero'; // تأكد من الـ Path واش صحيح
import Card from '../components/Card';
import { cards } from '../data/cards';
import "./Execution.css";

export default function Execution() {
  return (
    <div className="container">
      <Hero />
      <h2 className="section-title">Nos Formations</h2>
      <div className="cards-grid">
        {cards.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}