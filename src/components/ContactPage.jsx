import { useState } from "react";
import "./ContactPage.css";
 
const faqs = [
  {
    q: "Quels sont vos tarifs pour le permis B ?",
    a: "Nos packages démarrent à partir de 899€, incluant le code et 20h de conduite. Des facilités de paiement en 3x ou 4x sont également disponibles.",
  },
  {
    q: "Puis-je choisir mon moniteur ?",
    a: "Oui ! Nous vous encourageons à travailler avec le même moniteur tout au long de votre formation selon ses disponibilités.",
  },
  {
    q: "Combien de temps dure la formation ?",
    a: "La durée dépend de votre niveau de départ. En moyenne, nos élèves obtiennent leur permis en 3 à 5 mois avec un rythme régulier.",
  },
  {
    q: "L'apprentissage anticipé (AAC) est-il possible ?",
    a: "Oui, nous proposons l'AAC dès 15 ans. Cette formule est recommandée car elle améliore significativement les chances de réussite.",
  },
];
 
const coords = [
  { icon: "📍", label: "Adresse", value: "123 Avenue de la Liberté\n75001 Paris, France" },
  { icon: "📞", label: "Téléphone", value: "+33 1 23 45 67 89" },
  { icon: "✉️", label: "Email", value: "contact@routewise.fr" },
  { icon: "🕐", label: "Horaires d'ouverture", value: "Lun – Ven : 09:00 – 19:00\nSam : 09:00 – 15:00" },
];
 
export default function ContactPage() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    sujet: "Demande d'information générale",
    message: "",
  });
  const [sent, setSent] = useState(false);
 
  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ nom: "", email: "", sujet: "Demande d'information générale", message: "" });
  };
 
  return (
    <div className="cp-page">
 
      {/* HERO */}
      <section className="cp-hero">
        <div className="cp-hero-bg" />
        <span className="cp-bokeh cp-b1" />
        <span className="cp-bokeh cp-b2" />
        <span className="cp-bokeh cp-b3" />
        <span className="cp-bokeh cp-b4" />
        <div className="cp-hero-content">
          <h1 className="cp-hero-title">Contactez-nous</h1>
          <p className="cp-hero-sub">
            Vous avez des questions sur l'obtention de votre permis ?<br />
            Notre équipe d'experts RouteWise est là pour vous accompagner vers la réussite.
          </p>
        </div>
      </section>
 
      {/* CONTACT GRID */}
      <main className="cp-main">
        <div className="cp-grid">
 
          {/* FORM */}
          <div className="cp-form-card">
            <h2 className="cp-form-title">Envoyez-nous un message</h2>
 
            {sent && (
              <div className="cp-success">
                ✅ Message envoyé ! Nous vous répondrons sous 24h.
              </div>
            )}
 
            <form onSubmit={handleSubmit} noValidate>
              <div className="cp-form-row">
                <div className="cp-form-group">
                  <label>Nom complet</label>
                  <input type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Jean Dupont" required />
                </div>
                <div className="cp-form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="jean@exemple.com" required />
                </div>
              </div>
 
              <div className="cp-form-group">
                <label>Sujet</label>
                <select name="sujet" value={form.sujet} onChange={handleChange}>
                  <option>Demande d'information générale</option>
                  <option>Tarifs et inscriptions</option>
                  <option>Choix d'un moniteur</option>
                  <option>Problème technique</option>
                  <option>Autre</option>
                </select>
              </div>
 
              <div className="cp-form-group">
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Comment pouvons-nous vous aider ?" required />
              </div>
 
              <button type="submit" className="cp-btn-submit">
                ✉ Envoyer le message
              </button>
            </form>
          </div>
 
          {/* RIGHT COL */}
          <div className="cp-right-col">
 
            {/* COORDS */}
            <div className="cp-coords-card">
              <h3 className="cp-coords-title">Nos coordonnées</h3>
              {coords.map((c) => (
                <div key={c.label} className="cp-coord-item">
                  <div className="cp-coord-icon">{c.icon}</div>
                  <div className="cp-coord-info">
                    <span className="cp-coord-label">{c.label}</span>
                    <span className="cp-coord-value">
                      {c.value.split("\n").map((line, i) => (
                        <span key={i}>{line}<br /></span>
                      ))}
                    </span>
                  </div>
                </div>
              ))}
            </div>
 
            {/* MAP */}
            <div className="cp-map-card">
              <div className="cp-map-placeholder">
                <span className="cp-map-pin">🗺️</span>
                <span>Carte interactive</span>
                <span className="cp-map-hint">Remplacez par votre iframe Google Maps</span>
              </div>
              <div className="cp-map-badge">📍 Retrouvez-nous</div>
            </div>
 
          </div>
        </div>
      </main>
 
      {/* FAQ */}
      <section className="cp-faq">
        <h2 className="cp-faq-title">Questions Fréquentes</h2>
        <p className="cp-faq-sub">Trouvez des réponses rapides aux interrogations les plus courantes de nos élèves.</p>
        <div className="cp-faq-grid">
          {faqs.map((f) => (
            <div key={f.q} className="cp-faq-item">
              <div className="cp-faq-q">
                <div className="cp-faq-icon">Q</div>
                {f.q}
              </div>
              <p className="cp-faq-a">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* EMAIL PROMPT */}
      <div className="cp-email-prompt">
        <p>Vous ne trouvez pas la réponse ?</p>
        <a href="mailto:contact@routewise.fr">Envoyez-nous un email directement →</a>
      </div>
 
    </div>
  );
}