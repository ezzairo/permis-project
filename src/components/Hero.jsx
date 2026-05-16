import './Hero.css'
import { motion } from 'framer-motion'
import drivingVideo from '../assets/driving.mp4'

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src={drivingVideo} type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="hero-text">
          <h1>
            Bienvenue dans notre plateforme Permis
          </h1>

          <p>
            Votre plateforme moderne pour apprendre
            la conduite facilement.
          </p>

          <button>Commencer</button>
        </div>
      </motion.div>
    </section>
  )
}