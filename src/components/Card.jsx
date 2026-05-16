import './Card.css'
import { motion } from 'framer-motion'

export default function Card({ item }) {
  return (
    <motion.div
      className="card"
      whileHover={{
        scale: 1.05,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="card-video"
      >
        <source src={item.video} type="video/mp4" />
      </video>

      <div className="card-overlay"></div>

      <div className="card-content">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </motion.div>
  )
}