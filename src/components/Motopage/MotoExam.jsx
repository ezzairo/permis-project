import React, { useState } from 'react';
import './MotoExam.css';

// 20 Questions Réelles ETM 2026 m3a images mo3abbira
const examQuestions = [
  {
    question:
      '1. En virage, où doit se situer le regard du motard pour maintenir une bonne trajectoire ?',
    img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500&auto=format&fit=crop&q=60', // Image de virage moto
    options: [
      { key: 'A', text: "Sur la roue avant pour surveiller l'adhérence." },
      {
        key: 'B',
        text: 'Loin devant, vers la sortie du virage (le regard dirige la moto).',
      },
      { key: 'C', text: 'Sur la ligne blanche du milieu.' },
    ],
    correct: 'B',
    explanation:
      'Le regard dirige la moto. Khass dima l-3in t-chouf l-b3id fin ghad tmshi bash l-moto d-dor smoothly.',
  },
  {
    question:
      '2. Quelle est la distance de freinage sur une route mouillée (sous la pluie) par rapport à une route sèche ?',
    img: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60', // Image route pluie
    options: [
      { key: 'A', text: 'Elle est identique.' },
      { key: 'B', text: 'Elle est multipliée par deux (doublée).' },
      { key: 'C', text: 'Elle est triplée.' },
    ],
    correct: 'B',
    explanation:
      'F l-w9t d l-chta, l-adhérence kat-n9ss b 50% w distance de freinage kat-d-doubel direct.',
  },
  {
    question:
      "3. Quel est le taux d'alcoolémie maximal autorisé dans le sang pour un permis probatoire ?",
    img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=60', // Image verres alcool
    options: [
      { key: 'A', text: '0.5 g/L de sang' },
      { key: 'B', text: '0.2 g/L de sang (tolérance zéro en pratique)' },
      { key: 'C', text: '0.0 g/L de sang' },
    ],
    correct: 'B',
    explanation:
      'L-permis probatoire 3ndo strict limit dial 0.2g/L. Glass wa7d d l-biere y-9der y-foutha.',
  },
  {
    question:
      '4. Quelle commande gère la majorité de la puissance de freinage (environ 70%) sur une moto ?',
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&auto=format&fit=crop&q=60', // Image guidon/frein
    options: [
      { key: 'A', text: 'Le frein arrière au pied droit.' },
      { key: 'B', text: 'Le frein avant au levier droit du guidon.' },
      { key: 'C', text: 'Le frein moteur.' },
    ],
    correct: 'B',
    explanation:
      'Le frein avant (levier droit) huwa li fih 70% 7ta l 80% dial l-puissance d l-frinage.',
  },
  {
    question:
      '5. À partir de quel âge peut-on passer le permis A1 pour conduire une moto de 125 cm³ max ?',
    img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&auto=format&fit=crop&q=60', // Image jeune motard
    options: [
      { key: 'A', text: '14 ans.' },
      { key: 'B', text: '16 ans.' },
      { key: 'C', text: '18 ans.' },
    ],
    correct: 'B',
    explanation:
      'Permis A1 (moto légère 125cm³, max 11 kW) t-9der d-wzo f age d 16 ans.',
  },
  {
    question:
      "6. Quel équipement est légalement obligatoire pour le passager d'une moto ?",
    img: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500&auto=format&fit=crop&q=60', // Image casque & gants
    options: [
      { key: 'A', text: 'Uniquement le casque homologué.' },
      { key: 'B', text: 'Le casque homologué et des gants certifiés CE.' },
      { key: 'C', text: 'Le casque, les gants et un blouson en cuir.' },
    ],
    correct: 'B',
    explanation:
      'L-Casque (ECE) w les Gants (CE) homa l-obligatoires absolute 3la l-conducteur w l-passager b7al b7al.',
  },
  {
    question:
      '7. Sur autoroute par temps sec, quelle est la vitesse maximale autorisée pour une moto ?',
    img: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=500&auto=format&fit=crop&q=60', // Image autoroute
    options: [
      { key: 'A', text: '110 km/h.' },
      { key: 'B', text: '130 km/h.' },
      { key: 'C', text: '140 km/h.' },
    ],
    correct: 'B',
    explanation:
      'F l-Autoroute par temps sec, la vitesse max hiya 130 km/h. F l-chta kat-hbet l 110 km/h.',
  },
  {
    question: '8. Que signifie le système ABS sur une moto ?',
    img: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500&auto=format&fit=crop&q=60', // Image roue de moto
    options: [
      { key: 'A', text: 'Il réduit systématiquement la distance de freinage.' },
      {
        key: 'B',
        text: 'Il empêche le blocage des roues pour éviter la chute et garder le contrôle.',
      },
      { key: 'C', text: 'Il augmente la puissance du moteur.' },
    ],
    correct: 'B',
    explanation:
      'L-ABS kay-mna3 blocage d rwayd mli kadd-frini f l-ma wla l-glissade bash t-7afed 3la l-équilibre.',
  },
  {
    question:
      '9. Quelle est la puissance maximale autorisée pour une moto de la catégorie de permis A2 ?',
    img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500&auto=format&fit=crop&q=60', // Image moto sportive/roadster
    options: [
      { key: 'A', text: '11 kW (15 ch).' },
      { key: 'B', text: '35 kW (47.5 ch).' },
      { key: 'C', text: '70 kW (95 ch).' },
    ],
    correct: 'B',
    explanation: 'Permis A2 limited f max 35 kW (y3ni 47.5 chevaux) absolute.',
  },
  {
    question:
      "10. En cas d'accident corporel, quel est l'ordre chronologique des actions du protocole de secours ?",
    img: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500&auto=format&fit=crop&q=60', // Image ambulance/secours
    options: [
      { key: 'A', text: 'Secourir - Alerter - Protéger.' },
      {
        key: 'B',
        text: 'Protéger (le lieu) - Alerter (les secours) - Secourir (les victimes).',
      },
      { key: 'C', text: 'Alerter - Secourir - Protéger.' },
    ],
    correct: 'B',
    explanation:
      "Protocole PAS: Protéger d'abord pour éviter sur-accident, Alerter (112), puis Secourir.",
  },
  {
    question:
      '11. De combien de centimètres doit être le débattement (la flèche) de la chaîne de transmission ?',
    img: 'https://images.unsplash.com/photo-1525160354320-d8e92641c563?w=500&auto=format&fit=crop&q=60', // Image chaîne/moteur
    options: [
      { key: 'A', text: 'De 0 à 1 cm maximum.' },
      { key: 'B', text: 'De 2 à 3 cm.' },
      { key: 'C', text: 'De 5 à 6 cm.' },
    ],
    correct: 'B',
    explanation:
      'La tension d l-chaîne khass l-débattement dialha (la flèche) y-b9a bin 2 à 3 cm.',
  },
  {
    question:
      "12. Quel est l'impact de la fatigue sur le temps de réaction du conducteur ?",
    img: 'https://images.unsplash.com/photo-1541535881962-3bb380b08458?w=500&auto=format&fit=crop&q=60', // Image conduite nuit/fatigue
    options: [
      { key: 'A', text: 'Il diminue.' },
      { key: 'B', text: 'Il augmente (le temps de réaction est plus long).' },
      { key: 'C', text: 'Il reste inchangé.' },
    ],
    correct: 'B',
    explanation:
      'Fatigue kat-bte2 les réflexes, y3ni l-temps de réaction kay-t-zad (kat-wlli t-7taj 2 secondes blast 1).',
  },
  {
    question:
      '13. Quelle est la vitesse maximale autorisée sur les routes bidirectionnelles sans séparateur central ?',
    img: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=500&auto=format&fit=crop&q=60', // Image route de campagne
    options: [
      { key: 'A', text: '70 km/h.' },
      { key: 'B', text: '80 km/h.' },
      { key: 'C', text: '90 km/h.' },
    ],
    correct: 'B',
    explanation:
      'Routes bidirectionnelles normales sans séparateur central fiha la limite d 80 km/h.',
  },
  {
    question:
      "14. Est-on autorisé à retirer le casque d'un motard accidenté et inconscient ?",
    img: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=500&auto=format&fit=crop&q=60', // Image casque posé
    options: [
      { key: 'A', text: "Oui, pour l'aider à mieux respirer." },
      {
        key: 'B',
        text: 'Non, sauf en cas de nécessité absolue (arrêt respiratoire) et par un sauveteur formé.',
      },
      { key: 'C', text: "Oui, c'est obligatoire dès l'arrivée sur les lieux." },
    ],
    correct: 'B',
    explanation:
      'Mmnou3 t-7yed l-casque l motard blessé absolute 7it y-9der y-koun fih fracture cervicale.',
  },
  {
    question:
      "15. La pression des pneumatiques d'une moto doit être contrôlée de préférence :",
    img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60', // Image pneus voiture/moto
    options: [
      { key: 'A', text: 'À chaud, juste après un long trajet sur autoroute.' },
      {
        key: 'B',
        text: 'À froid (roulage de moins de 3 km ou arrêt depuis plus de 2 heures).',
      },
      {
        key: 'C',
        text: 'Uniquement lorsque le pneu semble dégonflé visuellement.',
      },
    ],
    correct: 'B',
    explanation:
      'Mra9ba dial l-pression d les pneus dima d-dar à froid bash t-3ti les chiffres exacts.',
  },
  {
    question:
      '16. À quoi sert principalement un défibrillateur automatisé externe (DAE) ?',
    img: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500&auto=format&fit=crop&q=60', // Image matériel médical
    options: [
      { key: 'A', text: 'À mesurer la tension artérielle.' },
      {
        key: 'B',
        text: 'À envoyer un choc électrique pour relancer le rythme normal du cœur en arrêt.',
      },
      { key: 'C', text: "À administrer de l'oxygène." },
    ],
    correct: 'B',
    explanation:
      "L-DAE kay-3ti choc électrique l l-9elb f cas d'arrêt cardiaque bash y-rj3 l-rythme normal.",
  },
  {
    question:
      '17. Quel angle mort est particulièrement dangereux pour un motard face aux poids lourds ?',
    img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&auto=format&fit=crop&q=60', // Image camion route
    options: [
      { key: 'A', text: "Uniquement l'angle mort arrière gauche." },
      {
        key: 'B',
        text: "Les angles morts situés directement à l'avant, à l'arrière, et sur les côtés du camion.",
      },
      { key: 'C', text: "Les camions n'ont pas d'angle mort pour les motos." },
    ],
    correct: 'B',
    explanation:
      'Les camions 3ndhom des angles morts kbaar f ga3 l-jihat. Khass dima d-t-fada t-b9a mkhbi fihom.',
  },
  {
    question: "18. Qu'est-ce que l'éco-conduite à moto ?",
    img: 'https://images.unsplash.com/photo-1463171359979-300662226149?w=500&auto=format&fit=crop&q=60', // Image nature/route verte
    options: [
      { key: 'A', text: 'Rouler le plus vite possible pour libérer la route.' },
      {
        key: 'B',
        text: 'Adopter une conduite souple sans accélérations brutales pour réduire le carburant et le CO2.',
      },
      { key: 'C', text: 'Éteindre le moteur dans toutes les descentes.' },
    ],
    correct: 'B',
    explanation:
      "L'éco-conduite hiya adopt conduite souple bash t-n9ss consommation w t-7mi l'environnement.",
  },
  {
    question:
      "19. Combien d'heures de formation obligatoire faut-il après 2 ans de permis A2 pour obtenir le permis A ?",
    img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500&auto=format&fit=crop&q=60', // Image grosse cylindrée
    options: [
      { key: 'A', text: '5 heures.' },
      { key: 'B', text: '7 heures (Passerelle A2 vers A).' },
      { key: 'C', text: '12 heures.' },
    ],
    correct: 'B',
    explanation:
      'L-passerelle m l-A2 l l-A kat-7taj formation pratique w théorique dial 7 heures sans examen.',
  },
  {
    question:
      '20. Les dispositifs réfléchissants (stickers) sur un casque homologué en France doivent être au nombre de :',
    img: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=500&auto=format&fit=crop&q=60', // Image stickers casque
    options: [
      { key: 'A', text: '2 (un devant, un derrière).' },
      {
        key: 'B',
        text: '4 (un sur chaque face : avant, arrière, gauche, droite).',
      },
      { key: 'C', text: 'Les stickers ne sont pas obligatoires.' },
    ],
    correct: 'B',
    explanation:
      'L-9anoun français obliges 4 d les stickers réfléchissants 3la les 4 faces dial l-casque.',
  },
];

function MotoExam() {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (qIndex, optionKey) => {
    if (showResults) return;
    setUserAnswers({ ...userAnswers, [qIndex]: optionKey });
  };

  const calculateScore = () => {
    let score = 0;
    examQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correct) score++;
    });
    return score;
  };

  const isExamPassed = () => {
    return calculateScore() >= 17; // Pass score f l-code dial 20 questions standard (85% correct)
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
      <div className="exam-hero-banner text-white text-center py-5 position-relative">
        <div className="exam-hero-overlay" />
        <div
          className="container position-relative px-3"
          style={{ maxWidth: '800px' }}
        >
          <span
            className="badge bg-warning text-dark mb-2 fw-bold text-uppercase px-3 py-1 rounded-pill"
            style={{ fontSize: '11px' }}
          >
            Mode Examen Officiel ETM 2026
          </span>
          <h1 className="fw-extrabold display-5 m-0 animate-fade-down">
            Exam Blanc : 20 Questions Flash
          </h1>
          <p className="text-light small mt-2 m-0 opacity-75">
            Had l-test fih 20 so2al m9ad direct mn l-fiches dyal l-permis moto.
            Khass d-jib **17/20** minimum bash t-koun l-naja7 guaranteed!
          </p>
        </div>
      </div>

      {/* QUESTIONS CONTAINER */}
      <div className="container my-5 flex-grow-1" style={{ maxWidth: '800px' }}>
        <div className="d-flex flex-column gap-5">
          {examQuestions.map((q, qIdx) => {
            const isCorrectAnswer = userAnswers[qIdx] === q.correct;
            return (
              <div
                key={qIdx}
                className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white exam-question-card animate-up"
              >
                {/* Visual Image representation of the scenario */}
                <div
                  className="position-relative"
                  style={{ height: '240px', width: '100%' }}
                >
                  <img
                    src={q.img}
                    alt={`Scenario ${qIdx + 1}`}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="position-absolute top-0 start-0 m-3 badge bg-dark bg-opacity-75 fs-6 px-3 py-2 rounded-3">
                    Question {qIdx + 1} / 20
                  </div>
                </div>

                <div className="card-body p-4">
                  <h5
                    className="fw-bold text-dark mb-4"
                    style={{ fontSize: '16px', lineHeight: '1.5' }}
                  >
                    {q.question}
                  </h5>

                  {/* Options selection stack */}
                  <div className="d-flex flex-column gap-2">
                    {q.options.map((opt) => {
                      const isSelected = userAnswers[qIdx] === opt.key;
                      let btnClass = 'btn-outline-secondary bg-white text-dark';

                      if (isSelected)
                        btnClass = 'btn-dark text-white border-dark';

                      if (showResults) {
                        if (opt.key === q.correct) {
                          btnClass =
                            'btn-success text-white border-0 shadow-sm';
                        } else if (isSelected && !isCorrectAnswer) {
                          btnClass = 'btn-danger text-white border-0';
                        }
                      }

                      return (
                        <button
                          key={opt.key}
                          onClick={() => handleSelectOption(qIdx, opt.key)}
                          disabled={showResults}
                          className={`btn text-start p-3 rounded-3 border fw-medium transition-all exam-opt-btn ${btnClass}`}
                          style={{ fontSize: '13.5px' }}
                        >
                          <strong className="me-2">{opt.key}.</strong>{' '}
                          {opt.text}
                        </button>
                      );
                    })}
                  </div>

                  {/* Smart Explanation Block */}
                  {showResults && (
                    <div
                      className={`mt-3 p-3 rounded-3 small border-start border-3 ${isCorrectAnswer ? 'bg-success bg-opacity-10 text-success border-success' : 'bg-danger bg-opacity-10 text-danger border-danger'}`}
                    >
                      <div className="fw-bold">
                        {isCorrectAnswer
                          ? '🟢 Bravo, réponse correcte !'
                          : `🔴 Mauvaise réponse (La bonne réponse était : ${q.correct})`}
                      </div>
                      <p
                        className="text-muted extra-small m-0 mt-1"
                        style={{ fontSize: '12.5px', color: '#475569' }}
                      >
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM VALIDATION ACTION BLOCK */}
        <div className="text-center mt-5">
          {!showResults ? (
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setShowResults(true);
              }}
              disabled={Object.keys(userAnswers).length < examQuestions.length}
              className="btn btn-primary px-5 py-3 fw-bold rounded-3 shadow border-0"
              style={{ fontSize: '15px', letterSpacing: '0.02em' }}
            >
              Terminer mon Examen & Soumettre
            </button>
          ) : (
            <div
              className={`card border-0 shadow rounded-4 p-4 text-white text-center d-inline-block px-5 ${isExamPassed() ? 'bg-success' : 'bg-danger'}`}
            >
              <h3 className="fw-bold m-0" style={{ fontSize: '22px' }}>
                {isExamPassed()
                  ? '🎉 Félicitations ! Permis Validé'
                  : '❌ Reçu : Score Insuffisant'}
              </h3>
              <h4
                className="fw-normal mt-2 opacity-90"
                style={{ fontSize: '17px' }}
              >
                Votre Score final : <strong>{calculateScore()} / 20</strong>
              </h4>
              <p
                className="small mt-1 m-0 opacity-75"
                style={{ fontSize: '12px' }}
              >
                {isExamPassed()
                  ? "Excellent travail ! T-9der d-wz l'examen réel smoothly."
                  : 'Khass d-jib 17/20, rja3 9ra les fiches w 3wd l-test.'}
              </p>
              <button
                onClick={() => {
                  setUserAnswers({});
                  setShowResults(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn btn-sm btn-light rounded-pill mt-3 px-4 fw-bold text-dark shadow-sm"
                style={{ fontSize: '12px' }}
              >
                Recommencer un nouvel examen
              </button>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer mt-auto py-4 bg-white border-top px-4">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="row align-items-center text-center text-md-start">
            <div className="col-12 col-md-6 mb-2 mb-md-0">
              <h6 className="fw-bold text-dark mb-0">RouteWise</h6>
              <span className="text-muted small">
                © 2026 RouteWise ETM Examination System.
              </span>
            </div>
            <div className="col-12 col-md-6 text-md-end">
              <span className="text-muted small">
                Code de la route Moto A/A2 Compleat
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Export split f lekher niha2iyan safe l Vite
export default MotoExam;
