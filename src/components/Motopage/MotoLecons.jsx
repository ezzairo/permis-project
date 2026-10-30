import React, { useState } from 'react';
import './MotoLecons.css';

// 1. Talkhiss Mofassal dial l-PDF (ETM 2026) - Expanded & Complete
const leconsData = [
  {
    id: 'circulation',
    title: '1. Circulation & Signalisation',
    icon: '🛣️',
    color: '#3B6DD8',
    bgLight: '#EEF4FF',
    summary: [
      {
        subtitle: 'Signalisation & Marquage au Sol',
        text: 'L-mra9ba dial l-blayz d l-moto kat-7taj chouf l-b3id[cite: 648]. Les lignes continues mmnou3 d-douwz 3lihom absolute[cite: 23]. Les flèches de rabattement mli kay-bano khass d-dkhol l-ymen direct. Les bandes blanches dial l-passage piéton w les zébras dima kat-koun fihom l-glissade mli kat-koun l-chta[cite: 58, 645].',
      },
      {
        subtitle: 'Trajectoire de Sécurité f les Virages',
        text: 'F l-virage, khass l-moto dima t-b9a f l-kharij dial l-virage (Position Extérieure) bash t-chouf l-visibilité[cite: 102]. Mli kat-wsal l-wst dial l-virage (Point de Corde) w t-ban lik l-kharja safe, t-y9dr d-dkhol l-l-dakhil smoothly w t-accélérer doucement en sortie[cite: 103].',
      },
      {
        subtitle: 'Rond-Points & Placement en France',
        text: 'Ila ghad d-wr l-ymen wla l-gdam, b9a f l-khatt dial l-ymen[cite: 24]. Ila ghad d-wr l-ycer wla d-dir Demi-tour, khod l-khatt d l-wst/ycer dial l-rond-point m3a l-clignotant ycer, w mli t-bghi t-khrj red l-clignotant ymen w chouf l-angle mort[cite: 21, 24]. Les véhicules déjà engagés 3ndhom dima la priorité[cite: 14, 25].',
      },
      {
        subtitle: 'Les Vitesses Maximales & Climat',
        text: 'F l-agglomération dima 50 km/h (wla 30 km/h f les zones 30/rues commerçantes)[cite: 15, 16]. Hors agglomération 80 km/h 3la routes bidirectionnelles sans séparation[cite: 17, 283]. Les routes nationales b séparation fiha 90 km/h[cite: 446]. L-Autoroute fiha 130 km/h mli kat-koun l-oute sèche, w kat-hbet automatic l 110 km/h mli kat-koun la pluie[cite: 18, 442].',
      },
    ],
  },
  {
    id: 'conducteur',
    title: '2. Le Conducteur & Catégories',
    icon: '🏍️',
    color: '#4A90D9',
    bgLight: '#F0F7FF',
    summary: [
      {
        subtitle: 'Les Catégories de Permis Moto',
        text: '• Permis AM: 14 ans, maximum 50 cm³ w vitesse 45 km/h max [cite: 216, 217].\n• Permis A1: 16 ans, motos légères 125 cm³ max w puissance 11 kW max [cite: 218].\n• Permis A2: 18 ans, limite dial 35 kW (47.5 chevaux) [cite: 220, 221].\n• Permis A: Permis illimité, après 2 ans d l-A2 + formation dial 7 heures[cite: 222, 223].',
      },
      {
        subtitle: 'Équipement Obligatoire w Certification',
        text: 'L-Casque homologué (Norme ECE 22-05 wla ECE 22-06 m3a 4 d les stickers réfléchissants) [cite: 226, 342] + Les Gants homologués CE homa l-obligatoires f l-9anoun[cite: 226, 563]. Blouson technique, dorsale, gilet réfléchissant, airbag moto w les bottes mnsou7 bihom bzzaf 7it t-y7miw l-gless m l-brv w l-fractures[cite: 226, 564, 565, 566].',
      },
      {
        subtitle: 'Alcoolémie, Drogues & Sanctions',
        text: 'L-taux maximal dial l-alcool f l-demm huwa 0.5g/L dial l-demm (wla 0.25mg/L f l-air expiré)[cite: 151, 204]. Ama l-permis probatoire (l-jdid) ra l-limite dialo hiya 0.2g/L direct (0 toleration: glass wa7d d l-biere y-foutha)[cite: 151, 152].',
      },
      {
        subtitle: 'Fatigue, Vision & Temps de Réaction',
        text: 'L-temps de réaction normal dial l-bndm huwa 1 seconde[cite: 288]. L-fatigue kat-n9ss concentration w kat-bte2 l-réflexes[cite: 150]. L-vision périphérique t-t3awnek t-chouf l-ajsam bla mad-doz rasek[cite: 128, 129]. Khass dima t-dir pause kol 2 heures f l-autoroute[cite: 473].',
      },
    ],
  },
  {
    id: 'mecanique',
    title: '3. Mécanique & Entretien',
    icon: '⚙️',
    color: '#E05C3A',
    bgLight: '#FFF4F2',
    summary: [
      {
        subtitle: 'Commandes au Guidon w Pieds',
        text: "L-ymen dial l-guidon fih: Levier d frin d l-gdam (kay-dir 70% dial l-frinage) [cite: 96, 97] + poignée d'accélérateur[cite: 100]. L-ycer dial l-guidon fih: Levier d l-embrayage. Rjl d l-ymen fiha: Pédale d frin dial l-wran (30% dial l-frinage). Rjl d l-ycer fiha: Sélecteur d vitesse.",
      },
      {
        subtitle: 'Entretien d l-Chaîne w les Pneus',
        text: 'L-tension dial l-chaîne khass t-b9a dima f l-norme (La flèche dial 2 à 3 cm). Les pneus khass l-pression dylhom t-t9add dima à froid (mli tkoun l-moto barda) [cite: 386], 7it l-pression ghalta kat-zad l-consommation d carburant w t-ydir l-glissade[cite: 386, 390].',
      },
      {
        subtitle: 'Niveau des Liquides w Modifications',
        text: "Khass dima t-verify: l'huile moteur, liquide de frein, w carburant[cite: 557]. Ga3 les pièces li kat-ziidhom khasshom homologation ECE[cite: 304]. L-pot d'échappement khasso y-respecter les normes Euro dial l-bruit w l'émission [cite: 305], sinon safe 3ndek amende wla l-immobilisation[cite: 310].",
      },
      {
        subtitle: 'Système ABS & Freinage Couplé',
        text: 'L-ABS kay-mna3 direct l-blocage dial l-rwayd mli kadd-frini f l-ma wla l-glissade bach l-moto mat-9lebch bik. Walakin attention: l-ABS ra may-n9ssch distance de freinage, huw ghir kay-7afed 3la l-trajectoire w l-équilibre dial l-moto[cite: 280].',
      },
    ],
  },
  {
    id: 'securite_env',
    title: '4. Secours & Environnement',
    icon: '🌱',
    color: '#2E7D32',
    bgLight: '#E8F5E9',
    summary: [
      {
        subtitle: 'Les Premiers Secours (Protocole PAS)',
        text: 'F 7alat accident, l-priorité hiya Sécuriser le lieu (Protéger) bach mat-kounch sur-accident [cite: 414, 416], mn b3d Alerter les secours (Appeler 112/15/18) [cite: 576], w f l-lekher Secourir les victimes[cite: 576]. Mmnou3 t-7yed l-casque l motard blessé absolute sauf ila knti pro w m-formé.',
      },
      {
        subtitle: 'Utilisation dial l-Défibrillateur (DAE)',
        text: 'L-DAE (Défibrillateur Automatisé Externe) kay-3ti shock électrique l l-9elb bash y-rj3 l-rythme normal[cite: 421, 422]. Sahl bzzaf: t-t-fte7 l-appareil, t-t-tbe3 les instructions vocales [cite: 424, 425], w t-t-7et les électrodes 3la l-poitrine nue dial l-victime direct[cite: 426].',
      },
      {
        subtitle: 'Éco-Conduite & Développement Durable',
        text: "L'éco-conduite kat-n9ss l-consommation d carburant w l'émission dial CO2[cite: 368, 381, 382]. Khass dima adopt conduite souple, avoid accelerations abruptes w les freinages brusques[cite: 369, 382]. Planifier les trajets zwiin bash t-t-viter les embouteillages[cite: 385].",
      },
    ],
  },
];

// 2. Data dial l-Exam Blanc (QCM interactive mn l-PDF 2026)
const quizQuestions = [
  {
    question:
      'Quelle est la distance de freinage sous la pluie par rapport à une route sèche ?',
    options: [
      { key: 'A', text: 'Elle reste identique.' },
      { key: 'B', text: 'Elle est multipliée par deux (doublée).' },
      { key: 'C', text: 'Elle est réduite de moitié.' },
    ],
    correct: 'B',
    explanation:
      'F l-w9t dial l-chta/la pluie, l-adhérence kat-n9ss b 50% w distance de freinage kat-d-doubel direct[cite: 18, 488].',
  },
  {
    question:
      "Pour un jeune conducteur en permis probatoire, quel est le taux d'alcoolémie maximal autorisé f l-demm ?",
    options: [
      { key: 'A', text: '0.5 g/L' },
      { key: 'B', text: '0.2 g/L' },
      { key: 'C', text: '0.0 g/L' },
    ],
    correct: 'B',
    explanation:
      'Jeune conducteur f l-permis probatoire 3ndo strict limit dial 0.2 g/L (mmnou3 l-alcool f l-khedma)[cite: 151, 152].',
  },
  {
    question:
      'Quelle commande gère la majorité de la puissance de freinage (environ 70%) sur une moto ?',
    options: [
      { key: 'A', text: 'Le frein arrière (pédale droite).' },
      { key: 'B', text: 'Le frein avant (levier droit au guidon).' },
      { key: 'C', text: 'Le frein moteur uniquement.' },
    ],
    correct: 'B',
    explanation:
      'Le frein avant (levier droit) huwa s-s7it, kay-t7kkem f 70% 7ta l 80% dial l-puissance d l-arrêt[cite: 96, 97].',
  },
  {
    question:
      'En virage, quelle est la bonne trajectoire de sécurité initiale à adopter ?',
    options: [
      {
        key: 'A',
        text: "S'approcher le plus possible de la ligne médiane dès le début.",
      },
      {
        key: 'B',
        text: "Rester à l'extérieur du virage pour maximiser la visibilité.",
      },
      { key: 'C', text: 'Rouler sur le bas-côté droit.' },
    ],
    correct: 'B',
    explanation:
      'Khass dima d-b9a f Position Extérieure f l-bdya dial l-virage bach t-ban lik l-kharja 9bel mad-dkhol[cite: 102, 103].',
  },
];

function MotoLecons() {
  const [activeTab, setActiveTab] = useState('circulation');
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const currentLecon =
    leconsData.find((l) => l.id === activeTab) || leconsData[0];

  const handleSelectOption = (qIndex, optionKey) => {
    if (showResults) return;
    setUserAnswers({ ...userAnswers, [qIndex]: optionKey });
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correct) score++;
    });
    return score;
  };

  return (
    <div
      className="d-flex flex-column min-vh-100 bg-light"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* HEADER */}
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

      {/* HERO BANNER */}
      <div className="animate-fade-down lecons-hero-banner text-white">
        <div className="lecons-hero-overlay" />
        <div
          className="container position-relative py-4 px-3"
          style={{ maxWidth: '1000px' }}
        >
          <span
            className="badge bg-info bg-opacity-25 text-info mb-2 fw-bold text-uppercase px-3 py-1 rounded-pill"
            style={{ fontSize: '11px' }}
          >
            Ebook Mofassal Permis Moto 2026 [cite: 495]
          </span>
          <h1 className="fw-extrabold display-6 m-0 animate-left">
            Moulakhass Compleat & Exam Blanc
          </h1>
          <p
            className="text-light-50 small mt-2 m-0 animate-left"
            style={{ opacity: 0.8, maxWidth: '650px' }}
          >
            Hna t-l9a talkhiss s-safi w l-mofassal dial ga3 les fiches d l-code
            moto ETM[cite: 496]. Read points mzyan, hbet l-te7t w d-wz l-Exam
            Blanc interactive dialk direct!
          </p>
        </div>
      </div>

      {/* MAIN LAYOUT GRID */}
      <div
        className="container my-5 flex-grow-1"
        style={{ maxWidth: '1000px' }}
      >
        {/* SECTION 1: TALKHISS LES COURS */}
        <div className="row g-4 mb-5">
          {/* LEFT SIDEBAR TABS */}
          <div className="col-12 col-md-4 animate-left">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-column gap-2">
              <div
                className="text-uppercase text-muted fw-bold extra-small px-2 mb-2"
                style={{ fontSize: '11px', letterSpacing: '0.05em' }}
              >
                Thématiques d'Examen [cite: 497]
              </div>
              {leconsData.map((lecon) => (
                <button
                  key={lecon.id}
                  onClick={() => setActiveTab(lecon.id)}
                  className={`btn text-start w-100 p-3 rounded-3 border-0 transition-all d-flex align-items-center gap-3 tab-selector-btn ${activeTab === lecon.id ? 'active-tab shadow-sm' : ''}`}
                  style={{
                    backgroundColor:
                      activeTab === lecon.id ? lecon.bgLight : 'transparent',
                    color: activeTab === lecon.id ? lecon.color : '#4b5563',
                  }}
                >
                  <span className="fs-5">{lecon.icon}</span>
                  <span className="fw-bold small m-0 flex-grow-1">
                    {lecon.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT DETAILS CONTENT */}
          <div className="col-12 col-md-8 animate-up">
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white h-100 d-flex flex-column">
              <div className="d-flex align-items-center gap-3 border-bottom pb-3 mb-4">
                <div
                  className="rounded-3 px-3 py-2 fs-4"
                  style={{
                    background: currentLecon.bgLight,
                    color: currentLecon.color,
                  }}
                >
                  {currentLecon.icon}
                </div>
                <div>
                  <h4
                    className="fw-bold text-dark m-0"
                    style={{ fontSize: '19px' }}
                  >
                    {currentLecon.title}
                  </h4>
                  <span
                    className="text-muted small"
                    style={{ fontSize: '12px' }}
                  >
                    Points clefs et détails indispensables
                  </span>
                </div>
              </div>

              <div className="d-flex flex-column gap-4 flex-grow-1">
                {currentLecon.summary.map((point, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-3 bg-light border-start border-3"
                    style={{ borderColor: currentLecon.color }}
                  >
                    <h6
                      className="fw-bold text-dark mb-2"
                      style={{ fontSize: '14px' }}
                    >
                      🎯 {point.subtitle}
                    </h6>
                    <p
                      className="text-secondary small m-0"
                      style={{
                        lineHeight: '1.7',
                        fontSize: '13px',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* SECTION 2: EXAM BLANC INTERACTIVE */}
        <div className="animate-up" style={{ animationDelay: '0.2s' }}>
          <div className="d-flex align-items-center gap-2 mb-4">
            <span className="fs-3">📝</span>
            <div>
              <h3
                className="fw-bold text-dark m-0"
                style={{ fontSize: '22px' }}
              >
                Exam Blanc : Test d'Évaluation ETM [cite: 495]
              </h3>
              <p className="text-muted small m-0">
                Série de QCM interactive sra7 d l-imtihan officiel [cite: 496]
              </p>
            </div>
          </div>

          <div className="d-flex flex-column gap-4">
            {quizQuestions.map((q, qIdx) => {
              const isCorrectAnswer = userAnswers[qIdx] === q.correct;
              return (
                <div
                  key={qIdx}
                  className="card border-0 shadow-sm rounded-4 p-4 bg-white"
                >
                  <h5
                    className="fw-bold text-dark mb-3"
                    style={{ fontSize: '15px', lineHeight: '1.5' }}
                  >
                    <span className="text-primary me-2">
                      Question {qIdx + 1}:
                    </span>{' '}
                    {q.question}
                  </h5>

                  <div className="d-flex flex-column gap-2">
                    {q.options.map((opt) => {
                      const isSelected = userAnswers[qIdx] === opt.key;
                      let btnStyleClass = 'btn-outline-secondary';

                      if (isSelected) btnStyleClass = 'btn-dark text-white';

                      if (showResults) {
                        if (opt.key === q.correct) {
                          btnStyleClass =
                            'btn-success text-white border-0 shadow-sm';
                        } else if (isSelected && !isCorrectAnswer) {
                          btnStyleClass = 'btn-danger text-white border-0';
                        }
                      }

                      return (
                        <button
                          key={opt.key}
                          onClick={() => handleSelectOption(qIdx, opt.key)}
                          disabled={showResults}
                          className={`btn text-start p-3 rounded-3 border fw-medium small transition-all ${btnStyleClass}`}
                          style={{ fontSize: '13px' }}
                        >
                          <strong className="me-2">{opt.key}.</strong>{' '}
                          {opt.text}
                        </button>
                      );
                    })}
                  </div>

                  {/* Correction Display Area */}
                  {showResults && (
                    <div
                      className={`mt-3 p-3 rounded-3 small ${isCorrectAnswer ? 'bg-success bg-opacity-10 text-success border-start border-success border-3' : 'bg-danger bg-opacity-10 text-danger border-start border-danger border-3'}`}
                    >
                      <div className="fw-bold mb-1">
                        {isCorrectAnswer
                          ? '🟢 Réponse Correcte !'
                          : `🔴 Mauvaise Réponse (La bonne était la ${q.correct})`}
                      </div>
                      <div
                        className="text-muted extra-small mt-1"
                        style={{ fontSize: '12px', color: '#475569' }}
                      >
                        {q.explanation}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Footer Button for Quiz */}
          <div className="text-center mt-4">
            {!showResults ? (
              <button
                onClick={() => setShowResults(true)}
                disabled={
                  Object.keys(userAnswers).length < quizQuestions.length
                }
                className="btn btn-primary px-5 py-3 fw-bold rounded-3 shadow-sm"
                style={{ fontSize: '14px' }}
              >
                Valider mes Réponses & Voir le Résultat
              </button>
            ) : (
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-dark text-white text-center d-inline-block px-5">
                <h4 className="fw-bold m-0" style={{ fontSize: '18px' }}>
                  🏆 Votre Score :{' '}
                  <span className="text-info">
                    {calculateScore()} / {quizQuestions.length}
                  </span>
                </h4>
                <button
                  onClick={() => {
                    setUserAnswers({});
                    setShowResults(false);
                  }}
                  className="btn btn-sm btn-outline-light rounded-pill mt-3 px-4 fw-bold"
                  style={{ fontSize: '12px' }}
                >
                  Recommencer le Test
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
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

export default MotoLecons;
