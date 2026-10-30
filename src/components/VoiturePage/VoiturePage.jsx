import React from 'react';
import { Link } from 'react-router-dom';

const cards = [
  {
    key: 'code',
    title: 'Code de la Route',
    desc: "Cours détaillés sur la signalisation routière, les priorités d'intersection et les règles de circulation indispensables pour l'examen théorique.",
    stat: '12/30 séries complétées',
    statRight: '40%',
    iconBg: '#EEF4FF',
    iconColor: '#3B6DD8',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <line x1="12" y1="16" x2="12" y2="20" />
        <line x1="8" y1="20" x2="16" y2="20" />
      </svg>
    ),
    to: "/CoursPermisB", // Path dial les cours nishan
    actionLabel: "Continuer",
    actionFilled: true,
    actionColor: '#000000',
    hoverBg: '#1e293b',
    hoverColor: '#fff',
  },
  {
    key: 'manoeuvres',
    title: 'Manoeuvres & Parking',
    desc: "Le guide pratique pour réussir son créneau, le stationnement en épi ou en bataille, et la marche arrière en toute sécurité.",
    stat: 'Niveau : Débutant',
    statRight: '25%',
    iconBg: '#ECFDF5',
    iconColor: '#10B981',
    // 🌟 7ydna <a> tag mn hna, whna f d-path fin bghitih imchi direct!
    to: "/moto/panneaux", 
    actionLabel: "Réviser",
    actionFilled: false,
    actionColor: '#0f172a',
    hoverBg: '#0f172a',
    hoverColor: '#fff',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </svg>
    ),
  },
  {
    key: 'mecanique',
    title: 'Vérifications Intérieures & Extérieures',
    desc: "Tout ce qu'il faut savoir sur les questions des examinateurs : les voyants du tableau de bord, les niveaux de fluides et la sécurité à bord.",
    stat: 'Statut : À consulter',
    statRight: '!',
    iconBg: '#FFF4F2',
    iconColor: '#E05C3A',
    to: "/voiture",
    actionLabel: "Consulter",
    actionFilled: false,
    actionColor: '#0f172a',
    hoverBg: '#0f172a',
    hoverColor: '#fff',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    key: 'simulations',
    title: 'Examens Blancs',
    desc: "Mettez-vous en situation réelle avec des tests blancs minutés de 40 questions pour valider votre code de la route du premier coup.",
    stat: '20 examens disponibles',
    statRight: 'Nouveau',
    iconBg: '#F3F0FF',
    iconColor: '#7C5CBF',
    // 🌟 Dba hit ghaddi t-creer page l-imti7an lli t-fahmna 3liha, sift-ha hna!
    to: "/voiture/exam", 
    actionLabel: "Lancer l'Examen",
    actionFilled: true,
    actionColor: '#0f172a',
    hoverBg: '#1e293b',
    hoverColor: '#fff',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

export default function PermisVoiturePage() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      <style>{`
        .voiture-hero-banner {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #022c22 100%);
          padding: 3rem 0;
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        .voiture-hero-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.12;
          background-image: url('https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=1200');
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 100%;
        }
        .voiture-hero-content {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }
        .voiture-badge-tag {
          display: inline-block;
          background: rgba(255, 255, 255, 0.1);
          color: #34d399;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 4px 12px;
          border-radius: 99px;
          margin-bottom: 14px;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .voiture-main-title {
          font-size: 34px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 12px;
          line-height: 1.15;
        }
        .voiture-main-desc {
          font-size: 14px;
          color: #cbd5e1;
          max-width: 480px;
          line-height: 1.7;
          margin: 0;
        }
        .card-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .card-action-btn {
          transition: all 0.2s ease-in-out;
          text-decoration: none !important;
        }
        .card-action-btn:hover {
          background-color: var(--hover-bg) !important;
          color: var(--hover-color) !important;
          border-color: var(--hover-bg) !important;
        }
        .relative-z-index {
          position: relative;
          z-index: 2;
        }
      `}</style>

      {/* Hero Banner */}
      <div className="voiture-hero-banner">
        <div className="voiture-hero-overlay" />
        <div className="voiture-hero-content px-4">
          <span className="voiture-badge-tag">Formation Automobile</span>
          <h1 className="voiture-main-title">Permis Voiture (B)</h1>
          <p className="voiture-main-desc">
            Prenez le volant en toute confiance. Une préparation complète combinant la maîtrise du code de la route, l'apprentissage des trajectoires de sécurité et les techniques de conduite urbaine.
          </p>
        </div>
      </div>

      {/* Grid Content */}
      <div className="container my-5 flex-grow-1" style={{ maxWidth: '1000px' }}>
        <div className="row g-4">
          {cards.map((card) => (
            <div key={card.key} className="col-12 col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm rounded-4 bg-white d-flex flex-column">
                <div className="card-icon-wrap" style={{ background: card.iconBg, color: card.iconColor }}>
                  {card.icon}
                </div>

                <h5 className="fw-bold text-dark mb-2" style={{ fontSize: '16px' }}>
                  {card.title}
                </h5>
                <p className="text-muted small mb-4 flex-grow-1" style={{ lineHeight: '1.65' }}>
                  {card.desc}
                </p>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-secondary small" style={{ fontSize: '12px' }}>
                    {card.stat}
                  </span>
                  <span
                    className="fw-bold small"
                    style={{
                      fontSize: '12px',
                      color: card.key === 'mecanique' ? '#E05C3A' : card.key === 'manoeuvres' ? '#10B981' : '#9ca3af',
                    }}
                  >
                    {card.statRight}
                  </span>
                </div>

                {/* 🌟 Hna dynamic setup s7i7, l-link kiykhod l-path direction b text clean */}
                <Link
                  to={card.to}
                  className="btn card-action-btn w-100 py-2 fw-bold"
                  style={{
                    backgroundColor: card.actionFilled ? card.actionColor : 'transparent',
                    color: card.actionFilled ? '#fff' : card.actionColor,
                    border: `1.5px solid ${card.actionColor}`,
                    borderRadius: '10px',
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    '--hover-bg': card.hoverBg,
                    '--hover-color': card.hoverColor,
                  }}
                >
                  <span>{card.actionLabel}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Section Practical CTA */}
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden mt-4">
          <div className="row g-0">
            <div className="col-md-4 bg-dark position-relative d-flex align-items-end p-3" style={{ minHeight: '160px' }}>
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  opacity: 0.3,
                  backgroundImage: "url('https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=600')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <span className="badge bg-dark bg-opacity-75 relative-z-index px-2 py-1 small rounded">
                Suivi Conduite Pratique
              </span>
            </div>
            <div className="col-md-8 p-4 bg-white">
              <h5 className="fw-bold text-dark mb-3">
                Prêt pour votre <span style={{ color: '#10B981' }}>première heure de conduite</span> ?
              </h5>
              <div className="d-flex gap-3 align-items-start">
                <div className="rounded-3 bg-success bg-opacity-10 px-2 py-1 fs-5">🚗</div>
                <div>
                  <div className="fw-bold text-dark small">Conforme aux Normes Examen 2026</div>
                  <div className="text-muted extra-small mt-1" style={{ fontSize: '12px' }}>
                    Nos parcours et leçons intègrent les dernières réglementations et questions officielles de sécurité routière.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}