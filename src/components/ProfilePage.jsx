import { useState, useRef } from "react";
import "./ProfilePage.css";
 
export default function ProfilePage() {
  const [profile, setProfile] = useState({
    nom: "Jean Dupont",
    email: "jean@exemple.com",
    telephone: "+33 6 12 34 56 78",
    ville: "Paris",
    dateNaissance: "1998-05-14",
    bio: "Étudiant motivé, je prépare mon permis B avec RouteWise !",
    avatar: null,
  });
 
  const [preview, setPreview] = useState(null);
  const [saved, setSaved] = useState(false);
  const fileRef = useRef();
 
  const handleChange = (e) =>
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
 
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    setProfile((prev) => ({ ...prev, avatar: url }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };
 
  const initials = profile.nom
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
 
  return (
    <div className="pp-page">
 
      {/* HEADER BANNER */}
      <div className="pp-banner">
        <div className="pp-banner-bg" />
        <div className="pp-banner-content">
          <h1 className="pp-banner-title">Mon Profil</h1>
          <p className="pp-banner-sub">Gérez vos informations personnelles</p>
        </div>
      </div>
 
      <div className="pp-wrapper">
 
        {/* LEFT — AVATAR CARD */}
        <div className="pp-left">
          <div className="pp-avatar-card">
 
            <div className="pp-avatar-wrap" onClick={() => fileRef.current.click()}>
              {preview || profile.avatar ? (
                <img src={preview || profile.avatar} alt="avatar" className="pp-avatar-img" />
              ) : (
                <div className="pp-avatar-initials">{initials}</div>
              )}
              <div className="pp-avatar-overlay">
                <span>📷</span>
                <span>Changer</span>
              </div>
            </div>
 
            <input
              type="file"
              accept="image/*"
              ref={fileRef}
              onChange={handleAvatar}
              style={{ display: "none" }}
            />
 
            <h2 className="pp-name">{profile.nom}</h2>
            <p className="pp-email">{profile.email}</p>
 
            <div className="pp-badge">🎓 Élève RouteWise</div>
 
            <div className="pp-stats">
              <div className="pp-stat">
                <span className="pp-stat-num">12</span>
                <span className="pp-stat-label">Leçons</span>
              </div>
              <div className="pp-stat-divider" />
              <div className="pp-stat">
                <span className="pp-stat-num">8h</span>
                <span className="pp-stat-label">Conduite</span>
              </div>
              <div className="pp-stat-divider" />
              <div className="pp-stat">
                <span className="pp-stat-num">3</span>
                <span className="pp-stat-label">Mois</span>
              </div>
            </div>
          </div>
        </div>
 
        {/* RIGHT — FORM */}
        <div className="pp-right">
          <div className="pp-form-card">
            <h3 className="pp-form-title">Informations personnelles</h3>
 
            {saved && (
              <div className="pp-success">✅ Profil mis à jour avec succès !</div>
            )}
 
            <form onSubmit={handleSubmit} noValidate>
 
              <div className="pp-form-row">
                <div className="pp-form-group">
                  <label>Nom complet</label>
                  <input
                    type="text"
                    name="nom"
                    value={profile.nom}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="pp-form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    placeholder="jean@exemple.com"
                  />
                </div>
              </div>
 
              <div className="pp-form-row">
                <div className="pp-form-group">
                  <label>Téléphone</label>
                  <input
                    type="tel"
                    name="telephone"
                    value={profile.telephone}
                    onChange={handleChange}
                    placeholder="+33 6 00 00 00 00"
                  />
                </div>
                <div className="pp-form-group">
                  <label>Ville</label>
                  <input
                    type="text"
                    name="ville"
                    value={profile.ville}
                    onChange={handleChange}
                    placeholder="Paris"
                  />
                </div>
              </div>
 
              <div className="pp-form-group">
                <label>Date de naissance</label>
                <input
                  type="date"
                  name="dateNaissance"
                  value={profile.dateNaissance}
                  onChange={handleChange}
                />
              </div>
 
              <div className="pp-form-group">
                <label>Bio</label>
                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  placeholder="Parlez-nous de vous..."
                  rows={3}
                />
              </div>
 
              <div className="pp-form-actions">
                <button type="button" className="pp-btn-cancel" onClick={() => window.history.back()}>
                  Annuler
                </button>
                <button type="submit" className="pp-btn-save">
                  💾 Sauvegarder
                </button>
              </div>
 
            </form>
          </div>
 
          {/* CHANGE PASSWORD */}
          <div className="pp-form-card pp-password-card">
            <h3 className="pp-form-title">Changer le mot de passe</h3>
            <div className="pp-form-row">
              <div className="pp-form-group">
                <label>Ancien mot de passe</label>
                <input type="password" placeholder="••••••••" />
              </div>
              <div className="pp-form-group">
                <label>Nouveau mot de passe</label>
                <input type="password" placeholder="••••••••" />
              </div>
            </div>
            <div className="pp-form-actions">
              <button type="button" className="pp-btn-save">
                🔒 Mettre à jour
              </button>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
}