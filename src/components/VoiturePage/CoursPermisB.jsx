import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const leconsData = [
  {
    id: 'circulation',
    title: '1. Circulation & Signalisation',
    icon: '🚗',
    color: '#3B6DD8',
    bgLight: '#EEF4FF',
    summary: [
      {
        subtitle: 'Signalisation & Marquage au Sol',
        text: 'L-mra9ba dial l-blayz f l-permis B kat-7taj dima chouf l-b3id w vision balayée. Les lignes continues mmnou3 t-9ishom wla d-douwz 3lihom absolute. Les lignes de dissuasion kat-khlik d-doubel gha les véhicules l-9alel f l-vitesse (b7al tractor). Les bandes blanches dial l-passage piéton w les pavés khass t-red m3ahom l-bal f l-chta 7it kay-زلقو.',
      },
      {
        subtitle: 'Placement f l-Voie & Ronds-Points',
        text: 'Dima f l-7ala l-3adiya b9a chaded l-ymen dyalk. F l-rond-point: ila ghad d-wr l-ymen wla l-gdam, b9a f l-khatt dial l-ymen m3a clignotant ymen mli t-bghi t-khrj. Ila ghad d-wr l-ycer wla d-dir Demi-tour, khod l-khatt d l-wst/ycer.',
      },
    ],
  },
  {
    id: 'conducteur',
    title: '2. Le Conducteur & Réglementation',
    icon: '👤',
    color: '#10B981',
    bgLight: '#ECFDF5',
    summary: [
      {
        subtitle: 'Le Permis B & Conditions de Poids',
        text: 'L-Permis B kay-khlik t-sog tomobil kat-hrez max 9 dial l-blayss (8 passagers + 1 conducteurs). L-Poids Maximal Autorisé (PTAC) dial l-vehicule khasso may-foutsh 3.5 tonnes (3500 kg).',
      },
      {
        subtitle: 'Permis Probatoire & Alcoolémie',
        text: 'Jeune conducteur kay-bda b 6 dial l-points. L-taux d\'alcool maximal autorise huwa 0.2 g/L f l-demm (0 toleration). Pour les conducteurs expérimentés, l-limite hiya 0.5 g/L.',
      },
    ],
  },
];

const quizQuestions = [
  {
    question: 'Avec le permis B, quel est le Poids Maximal Autorisé (PTAC) du véhicule que je peux conduire ?',
    options: [
      { key: 'A', text: '2.5 tonnes (2500 kg)' },
      { key: 'B', text: '3.5 tonnes (3500 kg)' },
      { key: 'C', text: '4.5 tonnes (4500 kg)' },
    ],
    correct: 'B',
    explanation: 'L-Permis B autorise la conduite des véhicules d\'un PTAC maximum de 3.5 tonnes.',
  },
  {
    question: 'Sous la pluie sur autoroute, la vitesse maximale autorisée passe de 130 km/h à :',
    options: [
      { key: 'A', text: '120 km/h' },
      { key: 'B', text: '110 km/h' },
      { key: 'C', text: '90 km/h' },
    ],
    correct: 'B',
    explanation: 'F l-chta la vitesse max f l-autoroute kat-hbet automatic l 110 km/h pour sécurité.',
  },
];

export default function CoursPermisB() {
  const [activeTab, setActiveTab] = useState('circulation');
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const currentLecon = leconsData.find((l) => l.id === activeTab) || leconsData[0];

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
    <div className="cours-b-container">
      
      <style>{`
        .cours-b-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #f8fafc;
          font-family: 'Inter', sans-serif;
          color: #334155;
        }
        .lecons-hero-banner {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 70%, #020617 100%);
          padding: 30px 20px;
          color: white;
        }
        .back-btn {
          color: #94a3b8;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          transition: color 0.2s;
          margin-bottom: 15px;
        }
        .back-btn:hover { color: #38bdf8; }
        .badge-info {
          background: rgba(59, 130, 246, 0.2);
          color: #60a5fa;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 10px;
        }
        .main-layout {
          max-width: 1000px;
          width: 100%;
          margin: 40px auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }
        @media (min-width: 768px) {
          .main-layout { grid-template-columns: 300px 1fr; }
        }
        .tabs-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          height: fit-content;
        }
        .tab-selector-btn {
          width: 100%;
          text-align: left;
          padding: 12px 15px;
          border-radius: 8px;
          border: none;
          background: transparent;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          margin-bottom: 8px;
          transition: all 0.2s;
          font-weight: 500;
          color: #4b5563;
        }
        .tab-selector-btn:hover { background: #f1f5f9; }
        .content-card {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .lecon-header {
          display: flex;
          align-items: center;
          gap: 15px;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 15px;
          margin-bottom: 25px;
        }
        .lecon-icon-box {
          padding: 10px 15px;
          border-radius: 8px;
          font-size: 24px;
        }
        .summary-block {
          padding: 15px;
          border-radius: 8px;
          background: #f8fafc;
          border-left: 4px solid;
          margin-bottom: 20px;
        }
        .quiz-section {
          max-width: 1000px;
          width: 100%;
          margin: 0 auto 50px auto;
          padding: 0 20px;
        }
        .quiz-card {
          background: white;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          margin-bottom: 25px;
        }
        .opt-btn {
          width: 100%;
          text-align: left;
          padding: 14px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          background: white;
          margin-bottom: 10px;
          cursor: pointer;
          font-size: 13px;
          transition: all 0.2s;
        }
        .opt-btn:hover:not(:disabled) { background: #f8fafc; border-color: #94a3b8; }
        .opt-btn.selected { background: #1e293b; color: white; border-color: #1e293b; }
        .opt-btn.correct { background: #10b981; color: white; border-color: #10b981; }
        .opt-btn.wrong { background: #ef4444; color: white; border-color: #ef4444; }
        .explanation-box {
          margin-top: 15px;
          padding: 15px;
          border-radius: 8px;
          font-size: 13px;
        }
        .explanation-box.success { background: #ecfdf5; color: #065f46; border-left: 4px solid #10b981; }
        .explanation-box.danger { background: #fef2f2; color: #991b1b; border-left: 4px solid #ef4444; }
        .btn-submit {
          background: #3b82f6;
          color: white;
          padding: 12px 30px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
        .btn-submit:disabled { background: #cbd5e1; cursor: not-allowed; }
      `}</style>

      {/* HERO BANNER */}
      <div className="lecons-hero-banner">
        <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <Link to="/voiture" className="back-btn">
            ⬅️ Retour au tableau de bord Voiture
          </Link>
          <br/>
          <span className="badge-info">Code de la Route Permis B</span>
          <h1 style={{ margin: 0, fontSize: '28px', fontWeight: '700' }}>
            Cours théoriques & Examen Blanc Interactif
          </h1>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="main-layout">
        <div className="tabs-card">
          <span style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', display: 'block', marginBottom: '15px' }}>
            Thématiques Permis B
          </span>
          {leconsData.map((lecon) => (
            <button
              key={lecon.id}
              onClick={() => setActiveTab(lecon.id)}
              className={`tab-selector-btn ${activeTab === lecon.id ? 'active-tab' : ''}`}
              style={{
                backgroundColor: activeTab === lecon.id ? lecon.bgLight : 'transparent',
                color: activeTab === lecon.id ? lecon.color : '#4b5563',
              }}
            >
              <span>{lecon.icon}</span>
              <span style={{ fontSize: '13px', fontWeight: '600' }}>{lecon.title}</span>
            </button>
          ))}
        </div>

        <div className="content-card">
          <div className="lecon-header">
            <div className="lecon-icon-box" style={{ background: currentLecon.bgLight, color: currentLecon.color }}>
              {currentLecon.icon}
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>{currentLecon.title}</h4>
              <span style={{ fontSize: '12px', color: '#64748b' }}>Points clefs indispensables</span>
            </div>
          </div>

          <div>
            {currentLecon.summary.map((point, index) => (
              <div key={index} className="summary-block" style={{ borderColor: currentLecon.color }}>
                <h6 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '700' }}>🎯 {point.subtitle}</h6>
                <p style={{ margin: 0, fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr style={{ maxWidth: '1000px', width: '100%', margin: '20px auto', border: '0', borderTop: '1px solid #e2e8f0' }} />

      {/* QUIZ SECTION */}
      <div className="quiz-section">
        <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>📝 Exam Blanc : Test d'Évaluation</h3>
        
        {quizQuestions.map((q, qIdx) => {
          const isCorrectAnswer = userAnswers[qIdx] === q.correct;
          return (
            <div key={qIdx} className="quiz-card">
              <h5 style={{ margin: '0 0 15px 0', fontSize: '15px', fontWeight: '600' }}>
                <span style={{ color: '#3b82f6' }}>Question {qIdx + 1}:</span> {q.question}
              </h5>

              <div>
                {q.options.map((opt) => {
                  const isSelected = userAnswers[qIdx] === opt.key;
                  let btnClass = "";
                  if (isSelected) btnClass = "selected";
                  if (showResults) {
                    if (opt.key === q.correct) btnClass = "correct";
                    else if (isSelected && !isCorrectAnswer) btnClass = "wrong";
                  }

                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelectOption(qIdx, opt.key)}
                      disabled={showResults}
                      className={`opt-btn ${btnClass}`}
                    >
                      <strong>{opt.key}.</strong> {opt.text}
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <div className={`explanation-box ${isCorrectAnswer ? 'success' : 'danger'}`}>
                  <div style={{ fontWeight: '700', marginBottom: '4px' }}>
                    {isCorrectAnswer ? '🟢 Réponse Correcte !' : `🔴 Mauvaise Réponse (La bonne était la ${q.correct})`}
                  </div>
                  <div style={{ color: '#64748b' }}>{q.explanation}</div>
                </div>
              )}
            </div>
          );
        })}

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          {!showResults ? (
            <button
              onClick={() => setShowResults(true)}
              disabled={Object.keys(userAnswers).length < quizQuestions.length}
              className="btn-submit"
            >
              Valider mes Réponses & Voir le Résultat
            </button>
          ) : (
            <div style={{ background: '#1e293b', color: 'white', padding: '20px', borderRadius: '12px', display: 'inline-block' }}>
              <h4 style={{ margin: 0, fontSize: '16px' }}>
                🏆 Votre Score : <span style={{ color: '#60a5fa', fontWeight: '700' }}>{calculateScore()} / {quizQuestions.length}</span>
              </h4>
              <button
                onClick={() => { setUserAnswers({}); setShowResults(false); }}
                style={{ background: 'transparent', border: '1px solid white', color: 'white', marginTop: '10px', padding: '6px 15px', borderRadius: '20px', cursor: 'pointer', fontSize: '12px' }}
              >
                Recommencer le Test
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}