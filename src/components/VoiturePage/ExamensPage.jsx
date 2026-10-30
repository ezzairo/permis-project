import React, { useState } from "react";
import { questionsData } from "../../data/examData";
import { Link } from "react-router-dom";

export default function ExamensPage() {
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const current = questionsData[currentQuestion];
  const progress = ((currentQuestion + 1) / questionsData.length) * 100;

  const handleAnswer = (option) => {
    if (selected) return;
    setSelected(option);
    const isCorrect = option === current.answer;
    if (isCorrect) setScore((s) => s + 1);

    setTimeout(() => {
      setSelected(null);
      const next = currentQuestion + 1;
      if (next < questionsData.length) {
        setCurrentQuestion(next);
      } else {
        setShowResult(true);
      }
    }, 900);
  };

  const restart = () => {
    setTestStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  };

  const passed = score >= 32;

  return (
    <div style={styles.page}>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <nav style={styles.nav}>
        <Link to="/voiture" style={styles.navBrand}>
          <span style={styles.navIcon}>🚗</span>
          <span>RouteWise</span>
          <span style={styles.navSub}> / Permis B</span>
        </Link>
        <Link to="/voiture" style={styles.navBack}>← Retour</Link>
      </nav>

      <div style={styles.wrapper}>
        <div style={styles.card}>

          {/* ── RESULT ─────────────────────────────────── */}
          {showResult && (
            <div style={styles.resultWrap}>
              <div style={styles.resultEmoji}>{passed ? "🏆" : "🔄"}</div>
              <h1 style={styles.resultTitle}>
                {passed ? "Najih! Mbrouk 🎉" : "Essaye mra okhra!"}
              </h1>
              <p style={styles.resultSub}>Résultat officiel — Simulation Permis B 2026</p>

              <div style={styles.scoreBox}>
                <span style={styles.scoreNum}>{score}</span>
                <span style={styles.scoreDenom}> / 40</span>
                <div
                  style={{
                    ...styles.scoreBadge,
                    background: passed ? "#d1fae5" : "#fee2e2",
                    color: passed ? "#065f46" : "#991b1b",
                  }}
                >
                  {passed ? "Admis ✓" : `Manjhtich — khass 32 minimum`}
                </div>
              </div>

              {/* Score bar */}
              <div style={styles.barTrack}>
                <div
                  style={{
                    ...styles.barFill,
                    width: `${(score / 40) * 100}%`,
                    background: passed ? "#10b981" : "#ef4444",
                  }}
                />
                <div style={{ ...styles.barThreshold, left: "80%" }} />
              </div>
              <div style={styles.barLabels}>
                <span>0</span>
                <span style={{ color: "#64748b", fontSize: 12 }}>seuil: 32</span>
                <span>40</span>
              </div>

              <div style={styles.resultBtns}>
                <button style={styles.btnPrimary} onClick={restart}>
                  Recommencer
                </button>
                <Link to="/voiture" style={styles.btnSecondary}>
                  Quitter
                </Link>
              </div>
            </div>
          )}

          {/* ── QUIZ ───────────────────────────────────── */}
          {!showResult && testStarted && (
            <div>
              {/* Header */}
              <div style={styles.quizHeader}>
                <span style={styles.quizLabel}>Série officielle 2026</span>
                <span style={styles.quizCounter}>
                  {currentQuestion + 1}
                  <span style={styles.quizTotal}> / {questionsData.length}</span>
                </span>
              </div>

              {/* Progress bar */}
              <div style={styles.progressTrack}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: `${progress}%`,
                  }}
                />
              </div>

              {/* Image */}
              {current.img && (
                <div style={styles.imgWrap}>
                  <img
                    key={current.id}
                    src={current.img}
                    alt={`Question ${currentQuestion + 1}`}
                    style={styles.qImg}
                  />
                  <div style={styles.imgOverlay} />
                </div>
              )}

              {/* Question */}
              <h2 style={styles.question}>{current.question}</h2>

              {/* Options */}
              <div style={styles.options}>
                {current.options.map((opt, i) => {
                  let bg = "#ffffff";
                  let border = "1.5px solid #e2e8f0";
                  let color = "#1e293b";

                  if (selected) {
                    if (opt === current.answer) {
                      bg = "#d1fae5";
                      border = "1.5px solid #10b981";
                      color = "#065f46";
                    } else if (opt === selected && opt !== current.answer) {
                      bg = "#fee2e2";
                      border = "1.5px solid #ef4444";
                      color = "#991b1b";
                    } else {
                      bg = "#f8fafc";
                      color = "#94a3b8";
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt)}
                      style={{
                        ...styles.optBtn,
                        background: bg,
                        border,
                        color,
                        cursor: selected ? "default" : "pointer",
                        transform: !selected ? undefined : "none",
                      }}
                    >
                      <span style={styles.optLetter}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── START ──────────────────────────────────── */}
          {!showResult && !testStarted && (
            <div style={styles.startWrap}>
              <div style={styles.startBadge}>Permis B — Maroc 2026</div>
              <h1 style={styles.startTitle}>Simulation Réelle</h1>
              <p style={styles.startSub}>
                40 questions avec images — dans les mêmes conditions que l'examen
                national. Score minimum pour réussir :{" "}
                <strong>32 / 40</strong>.
              </p>

              <div style={styles.statsRow}>
                {[
                  ["40", "Questions"],
                  ["32", "Score min."],
                  ["~20 min", "Durée"],
                ].map(([val, lbl]) => (
                  <div key={lbl} style={styles.statBox}>
                    <span style={styles.statVal}>{val}</span>
                    <span style={styles.statLbl}>{lbl}</span>
                  </div>
                ))}
              </div>

              <button
                style={styles.startBtn}
                onClick={() => setTestStarted(true)}
              >
                Commencer l'examen 🚀
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

/* ─── STYLES ─────────────────────────────────────────────── */
const FF_HEAD = "'Syne', sans-serif";
const FF_BODY = "'DM Sans', sans-serif";

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f1f5f9",
    fontFamily: FF_BODY,
    display: "flex",
    flexDirection: "column",
  },

  /* Nav */
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "#ffffff",
    borderBottom: "1px solid #e2e8f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    height: 56,
  },
  navBrand: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontFamily: FF_HEAD,
    fontWeight: 700,
    fontSize: 18,
    color: "#0f172a",
    textDecoration: "none",
  },
  navIcon: { fontSize: 20 },
  navSub: { fontWeight: 400, fontSize: 14, color: "#94a3b8" },
  navBack: {
    fontSize: 13,
    fontWeight: 500,
    color: "#475569",
    textDecoration: "none",
    padding: "6px 14px",
    border: "1px solid #e2e8f0",
    borderRadius: 8,
    background: "#fff",
  },

  /* Wrapper */
  wrapper: {
    flex: 1,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "32px 16px 48px",
  },

  /* Card */
  card: {
    width: "100%",
    maxWidth: 680,
    background: "#ffffff",
    borderRadius: 20,
    border: "1px solid #e2e8f0",
    padding: "32px 32px 36px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
  },

  /* ── START ── */
  startWrap: { textAlign: "center" },
  startBadge: {
    display: "inline-block",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    background: "#f1f5f9",
    color: "#64748b",
    padding: "4px 14px",
    borderRadius: 100,
    marginBottom: 16,
    border: "1px solid #e2e8f0",
  },
  startTitle: {
    fontFamily: FF_HEAD,
    fontWeight: 800,
    fontSize: 36,
    color: "#0f172a",
    margin: "0 0 12px",
  },
  startSub: {
    fontSize: 15,
    color: "#64748b",
    lineHeight: 1.6,
    maxWidth: 440,
    margin: "0 auto 28px",
  },
  statsRow: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    marginBottom: 32,
    flexWrap: "wrap",
  },
  statBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 14,
    padding: "16px 28px",
    minWidth: 100,
  },
  statVal: {
    fontFamily: FF_HEAD,
    fontWeight: 700,
    fontSize: 26,
    color: "#0f172a",
  },
  statLbl: { fontSize: 12, color: "#94a3b8", marginTop: 2 },
  startBtn: {
    fontFamily: FF_HEAD,
    fontWeight: 700,
    fontSize: 16,
    background: "#0f172a",
    color: "#fff",
    border: "none",
    borderRadius: 12,
    padding: "14px 36px",
    cursor: "pointer",
    letterSpacing: "0.01em",
  },

  /* ── QUIZ ── */
  quizHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  quizLabel: { fontSize: 12, fontWeight: 500, color: "#94a3b8", letterSpacing: "0.05em", textTransform: "uppercase" },
  quizCounter: {
    fontFamily: FF_HEAD,
    fontWeight: 700,
    fontSize: 18,
    color: "#0f172a",
  },
  quizTotal: { fontWeight: 400, color: "#94a3b8", fontSize: 15 },

  progressTrack: {
    height: 5,
    background: "#f1f5f9",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  progressFill: {
    height: "100%",
    background: "#10b981",
    borderRadius: 10,
    transition: "width 0.4s ease",
  },

  imgWrap: {
    position: "relative",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 20,
    height: 220,
  },
  qImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 60%)",
    pointerEvents: "none",
  },

  question: {
    fontFamily: FF_HEAD,
    fontWeight: 600,
    fontSize: 17,
    color: "#0f172a",
    lineHeight: 1.55,
    margin: "0 0 18px",
  },

  options: {
    display: "flex",
    flexDirection: "column",
    gap: 9,
  },
  optBtn: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "13px 16px",
    borderRadius: 11,
    fontFamily: FF_BODY,
    fontSize: 14,
    fontWeight: 500,
    textAlign: "left",
    width: "100%",
    transition: "all 0.18s ease",
  },
  optLetter: {
    width: 28,
    height: 28,
    borderRadius: 8,
    background: "#f1f5f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 700,
    flexShrink: 0,
    color: "#64748b",
  },

  /* ── RESULT ── */
  resultWrap: { textAlign: "center" },
  resultEmoji: { fontSize: 52, marginBottom: 12 },
  resultTitle: {
    fontFamily: FF_HEAD,
    fontWeight: 800,
    fontSize: 32,
    color: "#0f172a",
    margin: "0 0 6px",
  },
  resultSub: { fontSize: 13, color: "#94a3b8", marginBottom: 28 },

  scoreBox: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 16,
    padding: "24px 32px 20px",
    display: "inline-block",
    marginBottom: 24,
  },
  scoreNum: {
    fontFamily: FF_HEAD,
    fontWeight: 800,
    fontSize: 52,
    color: "#0f172a",
  },
  scoreDenom: {
    fontFamily: FF_HEAD,
    fontWeight: 400,
    fontSize: 28,
    color: "#94a3b8",
  },
  scoreBadge: {
    display: "inline-block",
    marginTop: 10,
    fontSize: 13,
    fontWeight: 600,
    padding: "6px 16px",
    borderRadius: 100,
  },

  barTrack: {
    width: "100%",
    height: 8,
    background: "#f1f5f9",
    borderRadius: 10,
    overflow: "visible",
    position: "relative",
    marginBottom: 6,
  },
  barFill: {
    height: "100%",
    borderRadius: 10,
    transition: "width 1s ease",
  },
  barThreshold: {
    position: "absolute",
    top: -4,
    width: 2,
    height: 16,
    background: "#cbd5e1",
    borderRadius: 2,
  },
  barLabels: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 12,
    color: "#94a3b8",
    marginBottom: 28,
  },

  resultBtns: {
    display: "flex",
    gap: 10,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btnPrimary: {
    fontFamily: FF_HEAD,
    fontWeight: 700,
    fontSize: 14,
    background: "#0f172a",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "12px 28px",
    cursor: "pointer",
  },
  btnSecondary: {
    fontFamily: FF_HEAD,
    fontWeight: 700,
    fontSize: 14,
    background: "#fff",
    color: "#0f172a",
    border: "1.5px solid #e2e8f0",
    borderRadius: 10,
    padding: "12px 28px",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
  },
};