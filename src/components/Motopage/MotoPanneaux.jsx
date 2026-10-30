import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const panneauxData = [
  {
    category: 'danger',
    catTitle: '🔺 Panneaux de Danger',
    catDesc: 'Had l-blayz t-y3lmo b khatt m9bel. F l-ville t-ykounou 50m 9bel, w hors agglomération 150m 9bel.',
    items: [
      {
        title: 'A1a - Virage à droite',
        desc: 'Virage s3ib d-wr l-ymen. Khass d-n9ss m l-vitesse w d-chouf l-b3id smoothly.',
        svg: (
          <svg viewBox="0 0 100 100" width="80" height="80">
            <polygon points="50,5 95,85 5,85" fill="#FFF" stroke="#DC2626" strokeWidth="8" />
            <path d="M42,70 L42,50 Q42,38 56,38 L65,38 M65,38 L58,32 M65,38 L58,44" fill="none" stroke="#000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        title: 'A1b - Virage à gauche',
        desc: 'Virage s3ib d-wr l-ycer. Khass t-n9ss l-vitesse chwya m9bel w t-ched l-ymen dyalk.',
        svg: (
          <svg viewBox="0 0 100 100" width="80" height="80">
            <polygon points="50,5 95,85 5,85" fill="#FFF" stroke="#DC2626" strokeWidth="8" />
            <path d="M58,70 L58,50 Q58,38 44,38 L35,38 M35,38 L42,32 M35,38 L42,44" fill="none" stroke="#000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        title: 'A3 - Chaussée rétrécie',
        desc: 'Route t-tdya9 m l-jihat bzouj. Danger 3la l-croisement dial les véhicules w les motos.',
        svg: (
          <svg viewBox="0 0 100 100" width="80" height="80">
            <polygon points="50,5 95,85 5,85" fill="#FFF" stroke="#DC2626" strokeWidth="8" />
            <path d="M35,70 L35,60 Q42,50 42,40 L42,25 M65,70 L65,60 Q58,50 58,40 L58,25" fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: 'A4 - Chaussée glissante',
        desc: 'Route kat-zleq. Khass d-viter les coups de frein brusques srtout mli kat-koun l-chta.',
        svg: (
          <svg viewBox="0 0 100 100" width="80" height="80">
            <polygon points="50,5 95,85 5,85" fill="#FFF" stroke="#DC2626" strokeWidth="8" />
            <path d="M45,40 Q55,48 45,56 Q35,64 55,72 M52,40 Q42,48 52,56 Q62,64 42,72" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: 'A13b - Passage piétons',
        desc: 'Intibah! Kayn passage piétons m9bel. Ila l9iti chi 7d baghi y-9te3, khass t-sm7 lih w t-w9f.',
        svg: (
          <svg viewBox="0 0 100 100" width="80" height="80">
            <polygon points="50,5 95,85 5,85" fill="#FFF" stroke="#DC2626" strokeWidth="8" />
            <rect x="30" y="65" width="40" height="5" fill="#000" />
            <rect x="35" y="53" width="30" height="5" fill="#000" />
            <rect x="40" y="41" width="20" height="5" fill="#000" />
          </svg>
        ),
      },
      {
        title: 'A21 - Dos-d’âne / Ralentisseur',
        desc: 'Kayn dwdana (Hwda wla g3da) f l-piste. Khass d-n9ss m l-vitesse maximum bach ma t-drsh l-véhicule.',
        svg: (
          <svg viewBox="0 0 100 100" width="80" height="80">
            <polygon points="50,5 95,85 5,85" fill="#FFF" stroke="#DC2626" strokeWidth="8" />
            <path d="M20,75 L32,75 Q40,60 48,60 Q56,60 64,75 L80,75" fill="none" stroke="#000" strokeWidth="6" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    category: 'interdiction',
    catTitle: "🛑 Panneaux d'Interdiction",
    catDesc: 'Had l-blayz mmnou3 d-dir l-7aja direct mn blast l-bla9a, w t-ykounou dima dwrin b l-7mar.',
    items: [
      {
        title: 'B1 - Sens interdit',
        desc: 'Mmnou3 d-dkhol absolute f had l-ittijah. Danger de face s3ib bzzaf.',
        svg: (
          <svg viewBox="0 0 100 100" width="80" height="80">
            <circle cx="50" cy="50" r="45" fill="#DC2626" />
            <rect x="20" y="42" width="60" height="16" fill="#FFF" rx="2" />
          </svg>
        ),
      },
      {
        title: 'B2a - Interdiction de tourner à droite',
        desc: 'Mmnou3 d-dor l-ymen f l-intersection l-jya. Kemmel direct wla d-or ycer.',
        svg: (
          <svg viewBox="0 0 100 100" width="80" height="80">
            <circle cx="50" cy="50" r="45" fill="#FFF" stroke="#DC2626" strokeWidth="8" />
            <path d="M40,65 L40,45 Q40,35 55,35 L65,35 M65,35 L58,29 M65,35 L58,41" fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="25" y1="25" x2="75" y2="75" stroke="#DC2626" strokeWidth="8" />
          </svg>
        ),
      },
      {
        title: 'B14 - Limitation 50 km/h',
        desc: 'Mmnou3 d-fot 50 km/h f had l-blasa. Khass l-iltizam strictly b l-vitesse l-m7ddda.',
        svg: (
          <svg viewBox="0 0 100 100" width="80" height="80">
            <circle cx="50" cy="50" r="45" fill="#FFF" stroke="#DC2626" strokeWidth="8" />
            <text x="50" y="62" textAnchor="middle" fontWeight="900" fontSize="36" fill="#000" fontFamily="'Inter', sans-serif">50</text>
          </svg>
        ),
      },
      {
        title: 'B3 - Interdit aux Motos',
        desc: 'Mmnou3 d-khoul dial les motocyclettes w les cyclomoteurs f had l-voie kamil.',
        svg: (
          <svg viewBox="0 0 100 100" width="80" height="80">
            <circle cx="50" cy="50" r="45" fill="#FFF" stroke="#DC2626" strokeWidth="8" />
            <circle cx="38" cy="58" r="8" fill="none" stroke="#000" strokeWidth="3" />
            <circle cx="62" cy="58" r="8" fill="none" stroke="#000" strokeWidth="3" />
            <line x1="25" y1="25" x2="75" y2="75" stroke="#DC2626" strokeWidth="8" />
          </svg>
        ),
      },
      {
        title: 'B31 - Fin de toutes les interdictions',
        desc: 'Hna kat-ssali l-7asra dial ga3 l-mmnou3at li kano 9bel, mn ghir l-vghat w l-stationnement.',
        svg: (
          <svg viewBox="0 0 100 100" width="80" height="80">
            <circle cx="50" cy="50" r="45" fill="#FFF" stroke="#94A3B8" strokeWidth="6" />
            <line x1="25" y1="75" x2="75" y2="25" stroke="#94A3B8" strokeWidth="6" />
          </svg>
        ),
      },
    ],
  },
  {
    category: 'obligation',
    catTitle: "🔵 Panneaux d'Obligation",
    catDesc: 'Had l-blayz b l-zzez khass d-tb3hom, dwrin b l-zraq completely.',
    items: [
      {
        title: "B21a - Obligation d'aller tout droit",
        desc: 'Khass d-kmml direct safe. Mmnou3 d-dor ymen wla ycer f had l-blasa.',
        svg: (
          <svg viewBox="0 0 100 100" width="80" height="80">
            <circle cx="50" cy="50" r="45" fill="#2563EB" />
            <path d="M50,75 L50,25 M50,25 L38,37 M50,25 L62,37" fill="none" stroke="#FFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        title: 'B22 - Allumage des feux',
        desc: 'Obligation d-t-ch3el les feux de croisement (l-koud) dial l-véhicule dialk 7ta f n-nhar.',
        svg: (
          <svg viewBox="0 0 100 100" width="80" height="80">
            <circle cx="50" cy="50" r="45" fill="#2563EB" />
            <path d="M60,35 Q40,35 40,50 Q40,65 60,65 Z" fill="#FFF" />
            <line x1="32" y1="42" x2="20" y2="42" stroke="#FFF" strokeWidth="4" strokeLinecap="round" />
            <line x1="30" y1="50" x2="16" y2="50" stroke="#FFF" strokeWidth="4" strokeLinecap="round" />
            <line x1="32" y1="58" x2="20" y2="58" stroke="#FFF" strokeWidth="4" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    category: 'priorite',
    catTitle: '⚠️ Panneaux de Priorité',
    catDesc: 'Had l-blayz huma l-asass f l-croisement w kayshlo chkoun 3ndo l-7aq y-douz l-owl.',
    items: [
      {
        title: 'AB4 - STOP',
        desc: 'Khass d-w9f absolute! T-thbbet l-rwayed mzyan f l-khrejh w t-sm7 l-ymn w l-ycer y-douzo.',
        svg: (
          <svg viewBox="0 0 100 100" width="80" height="80">
            <polygon points="65,15 35,15 15,35 15,65 35,85 65,85 85,65 85,35" fill="#DC2626" />
            <text x="50" y="58" textAnchor="middle" fontWeight="900" fontSize="24" fill="#FFF" fontFamily="'Inter', sans-serif">STOP</text>
          </svg>
        ),
      },
      {
        title: 'AB3a - Cédez le passage',
        desc: 'Sm7 l l-ymn w l-ycer y-douzo, walakin ila kant l-route khawya t9dr t-kmml بلا stop kamil.',
        svg: (
          <svg viewBox="0 0 100 100" width="80" height="80">
            <polygon points="50,90 5,15 95,15" fill="#FFF" stroke="#DC2626" strokeWidth="8" />
          </svg>
        ),
      },
    ],
  },
];

export default function GeneralPanneaux() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="d-flex flex-column min-vh-100 bg-light" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" />

      <style>{`
        .panneaux-hero {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          padding: 3.5rem 0;
          position: relative;
        }
        .panneaux-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          background-image: url('https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=1200');
          background-size: cover;
          background-position: center;
        }
        .panneau-card {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .panneau-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 15px -3px rgba(0,0,0,0.05) !important;
        }
        .animate-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* HEADER NAVIGATION */}
      <nav className="navbar navbar-expand navbar-light bg-white border-bottom sticky-top px-4 py-2">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <span className="navbar-brand fw-bold fs-4 text-dark m-0">RouteWise</span>
          
          <div className="d-flex gap-2">
            <Link to="/voiture" className="btn btn-sm btn-outline-dark rounded-pill fw-bold px-3 text-decoration-none">
              🚗 Retour Permis B
            </Link>
            <button className="btn btn-sm btn-dark rounded-pill fw-bold px-3">
              🛑 Les Panneaux
            </button>
          </div>
        </div>
      </nav>

      {/* HERO BANNER */}
      <div className="panneaux-hero text-white text-center position-relative">
        <div className="panneaux-overlay" />
        <div className="container position-relative px-3" style={{ maxWidth: '800px' }}>
          <div className="mb-2">
            <span className="badge bg-success bg-opacity-25 text-success fw-bold px-3 py-1.5 rounded-pill border border-success border-opacity-25" style={{ fontSize: '11px', letterSpacing: '0.05em' }}>
              🚗 Auto (B) &nbsp;•&nbsp; 🏍️ Moto (A)
            </span>
          </div>
          <h1 className="fw-extrabold display-6 m-0 text-white fw-bold" style={{ fontSize: '32px' }}>
            Signalisation & Panneaux Routiers
          </h1>
          <p className="small mt-2 m-0 opacity-75 text-light" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Moulakhass chamil dial ga3 les panneaux li kay-ti7o f imtihan l-code mchtrok bin l-Voiture w l-Moto.
          </p>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="container my-4 text-center">
        <div className="d-inline-flex gap-2 p-2 bg-white rounded-4 shadow-sm flex-wrap justify-content-center">
          <button onClick={() => setFilter('all')} className={`btn btn-sm px-3 py-2 rounded-3 fw-bold ${filter === 'all' ? 'btn-dark' : 'btn-light text-muted'}`}>
            Tout ({panneauxData.reduce((acc, cat) => acc + cat.items.length, 0)})
          </button>
          <button onClick={() => setFilter('danger')} className={`btn btn-sm px-3 py-2 rounded-3 fw-bold ${filter === 'danger' ? 'btn-danger text-white' : 'btn-light text-muted'}`}>Danger</button>
          <button onClick={() => setFilter('interdiction')} className={`btn btn-sm px-3 py-2 rounded-3 fw-bold ${filter === 'interdiction' ? 'btn-warning text-dark' : 'btn-light text-muted'}`}>Interdiction</button>
          <button onClick={() => setFilter('obligation')} className={`btn btn-sm px-3 py-2 rounded-3 fw-bold ${filter === 'obligation' ? 'btn-primary text-white' : 'btn-light text-muted'}`}>Obligation</button>
        </div>
      </div>

      {/* MAIN CONTAINER PANELS */}
      <div className="container pb-5 flex-grow-1" style={{ maxWidth: '900px' }}>
        <div className="d-flex flex-column gap-5">
          {panneauxData
            .filter((cat) => filter === 'all' || cat.category === filter)
            .map((cat, idx) => (
              <div key={idx} className="animate-up">
                <div className="mb-3">
                  <h3 className="fw-bold text-dark m-0 h4">{cat.catTitle}</h3>
                  <p className="text-muted small m-0 mt-1">{cat.catDesc}</p>
                </div>

                <div className="row g-3">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="col-12 col-md-6">
                      <div className="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3 panneau-card">
                        <div className="bg-light p-2 rounded-3 d-flex align-items-center justify-content-center border" style={{ minWidth: '96px', height: '96px' }}>
                          {item.svg}
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="fw-bold text-dark m-0" style={{ fontSize: '14.5px' }}>
                            {item.title}
                          </h6>
                          <p className="text-muted extra-small m-0 mt-2" style={{ fontSize: '12.5px', lineHeight: '1.5' }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      <footer className="footer mt-auto py-3 bg-white border-top text-center text-muted small">
        © 2026 RouteWise Signalisation Globale Module.
      </footer>
    </div>
  );
}