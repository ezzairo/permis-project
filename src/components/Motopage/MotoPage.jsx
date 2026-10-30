import React from 'react';
import './MotoPage.css';

const cards = [
  {
    key: 'cours',
    title: 'Leçons Théoriques',
    desc: "Cours détaillés sur la conduite moto, l'équipement de sécurité et la mécanique spécifique aux deux-roues.",
    stat: '8/24 leçons complétées',
    statRight: '33%',
    iconBg: '#EEF4FF',
    iconColor: '#3B6DD8',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
    action: (
      <a href="/moto/lecons" style={{ textDecoration: 'none' }}>
        continuer
      </a>
    ),
    actionFilled: true,
    actionColor: '#e6e6e6',
    hoverBg: '#2d5cb8',
    hoverColor: '#fff',
  },
  {
    key: 'plateau',
    title: 'Épreuves Hors-Circulation',
    desc: "Guide complet sur le parcours lent et rapide : slaloms, freinage d'urgence et techniques d'évitement.",
    stat: 'Niveau : Intermédiaire',
    statRight: '60%',
    iconBg: '#F0F7FF',
    iconColor: '#4A90D9',
    action: (
      <a href="/moto/panneaux" style={{ textDecoration: 'none' }}>
        Reviser
      </a>
    ),
    actionFilled: false,
    actionColor: '#e6e6e6',
    hoverBg: '#F0F7FF',
    hoverColor: '#4A90D9',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="11" x2="15" y2="11" />
        <line x1="9" y1="15" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    key: 'equipement',
    title: 'Sécurité & Équipement',
    desc: "Tout savoir sur l'homologation des casques, gants, les vêtements techniques et la protection dorsale.",
    stat: 'Statut : À consulter',
    statRight: '!',
    iconBg: '#FFF4F2',
    iconColor: '#E05C3A',
    action: (
      <a href="/moto/sanctions" style={{ textDecoration: 'none' }}>
        Consulter
      </a>
    ),
    actionFilled: false,
    actionColor: '#e6e6e6',
    hoverBg: '#FFF4F2',
    hoverColor: '#E05C3A',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    key: 'tests',
    title: 'Auto-Évaluation',
    desc: "Séries de QCM spécifiques aux fiches moto pour valider vos connaissances théoriques avant l'examen.",
    stat: '15 tests disponibles',
    statRight: 'New',
    iconBg: '#F3F0FF',
    iconColor: '#7C5CBF',
    action: (
      <a href="/moto/exam" style={{ textDecoration: 'none' }}>
        Lancer
      </a>
    ),
    actionFilled: true,
    actionColor: '#e6e6e6',
    hoverBg: '#684ba3',
    hoverColor: '#fff',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function MotoPage() {
  return (
    <div
      className="d-flex flex-column min-vh-100 bg-light"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <nav className="navbar navbar-expand navbar-light bg-white border-bottom sticky-top px-4 py-2">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <span className="navbar-brand fw-bold fs-4 text-dark m-0">
            RouteWise
          </span>
          <div className="d-flex align-items-center gap-3">
            <div className="text-end d-flex flex-column">
              <span className="fw-bold small text-dark">Alex Sterling</span>
              <span
                className="text-muted extra-small"
                style={{ fontSize: '11px' }}
              >
                Class D License
              </span>
            </div>
            <img
              src="https://ui-avatars.com/api/?name=Alex+Sterling&background=516885&color=fff"
              alt="Avatar"
              className="rounded-circle border"
              width="40"
              height="40"
            />
          </div>
        </div>
      </nav>

      {/* 2. Hero Banner */}
      <div className="animate-fade-down moto-hero-banner">
        <div className="moto-hero-overlay" />
        <div className="moto-hero-content px-4">
          <span className="animate-left moto-badge-tag">
            Formation Deux-Roues
          </span>
          <h1 className="animate-left moto-main-title">Permis Moto (A)</h1>
          <p className="animate-left moto-main-desc">
            Maîtrisez l'art de la conduite sur deux roues. Une formation
            complète alliant la maîtrise technique sur plateau hors-circulation,
            la sécurité routière avancée, et la réglementation spécifique pour
            obtenir votre liberté sur route.
          </p>
        </div>
      </div>

      {/* 3. Main Content Grid Container */}
      <div
        className="container my-5 flex-grow-1"
        style={{ maxWidth: '1000px' }}
      >
        {/* Grid Cards */}
        <div className="row g-4">
          {cards.map((card, index) => (
            <div
              key={card.key}
              className="col-12 col-md-6 animate-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="card h-100 p-4 border-0 shadow-sm rounded-4 bg-white d-flex flex-column">
                <div
                  className="card-icon-wrap"
                  style={{ background: card.iconBg, color: card.iconColor }}
                >
                  {card.icon}
                </div>

                <h5
                  className="fw-bold text-dark mb-2"
                  style={{ fontSize: '16px' }}
                >
                  {card.title}
                </h5>
                <p
                  className="text-muted small mb-4 flex-grow-1"
                  style={{ lineHeight: '1.65' }}
                >
                  {card.desc}
                </p>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span
                    className="text-secondary small"
                    style={{ fontSize: '12px' }}
                  >
                    {card.stat}
                  </span>
                  <span
                    className="fw-bold small"
                    style={{
                      fontSize: '12px',
                      color: card.key === 'equipement' ? '#E05C3A' : '#9ca3af',
                    }}
                  >
                    {card.statRight}
                  </span>
                </div>

                <button
                  className="btn card-action-btn w-100 py-2 fw-bold"
                  style={{
                    backgroundColor: card.actionFilled
                      ? card.actionColor
                      : 'transparent',
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
                  {card.action}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="card border-0 shadow-sm rounded-4 overflow-hidden mt-4 animate-up"
          style={{ animationDelay: '0.7s' }}
        >
          <div className="row g-0">
            <div
              className="col-md-4 bg-dark position-relative d-flex align-items-end p-3"
              style={{ minHeight: '160px' }}
            >
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  opacity: 0.35,
                  backgroundImage:
                    "url('https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=600')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <span className="badge bg-dark bg-opacity-75 relative-z-index px-2 py-1 small rounded">
                Suivi Pratique Plateau
              </span>
            </div>
            <div className="col-md-8 p-4 bg-white">
              <h5 className="fw-bold text-dark mb-3">
                Prêt pour votre{' '}
                <span style={{ color: '#0284c7' }}>première trajectoire</span> ?
              </h5>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="rounded-3 bg-info bg-opacity-10 px-2 py-1 fs-5">
                    🏍️
                  </div>
                  <div>
                    <div className="fw-bold text-dark small">
                      Normes de Sécurité A2/A
                    </div>
                    <div
                      className="text-muted extra-small mt-1"
                      style={{ fontSize: '12px', lineHeight: '1.5' }}
                    >
                      Tous nos modules intègrent l'ensemble des fiches
                      officielles de l'examen pratique moto.
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="rounded-3 bg-info bg-opacity-10 px-2 py-1 fs-5">
                    💬
                  </div>
                  <div>
                    <div className="fw-bold text-dark small">
                      Moniteurs Certifiés
                    </div>
                    <div
                      className="text-muted extra-small mt-1"
                      style={{ fontSize: '12px', lineHeight: '1.5' }}
                    >
                      Nos experts moto vous guident sur les trajectoires de
                      sécurité et le slalom en moins de 2h.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Footer (Bootstrap Layout style Home) */}
      <footer className="footer mt-auto py-4 bg-white border-top px-4">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="row align-items-center text-center text-md-start">
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <h6 className="fw-bold text-dark mb-0">RouteWise</h6>
              <span className="text-muted small">© 2026 RouteWise.</span>
            </div>
            <div className="col-12 col-md-4 mb-3 mb-md-0 text-md-center">
              <p
                className="text-uppercase fw-bold text-muted small m-0"
                style={{ fontSize: '11px', letterSpacing: '0.05em' }}
              >
                Administration
              </p>
              <span className="text-dark small text-decoration-underline">
                admin@routewise.com
              </span>
            </div>
            <div className="col-12 col-md-4 text-md-end">
              <button
                className="btn btn-sm btn-light rounded-pill border px-3 fw-bold shadow-sm"
                style={{ fontSize: '12px' }}
              >
                Contactez-nous
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
