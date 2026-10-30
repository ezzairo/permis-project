import './Register.css';

const Register = () => {
  return (
    <div className="login-wrapper">
      {/* Background Animation (Rwayda) */}
      <div className="bg-animation-layer">
        <i className="bi bi-gear-wide-connected giant-wheel"></i>
      </div>

      <nav className="custom-nav">
        <div className="logo-group">
          <span className="logo animate-logo">RouteWise</span>
        </div>
        <div className="nav-links">
          <div className="nav-auth">
            <a href="/login" className="btn-login">
              Se connecter
            </a>
            <a href="/signup" className="btn-signup-nav">
              S'inscrire
            </a>
          </div>
        </div>
      </nav>

      <div className="split-screen">
        <div className="image-side">
          <div className="hero-img-container">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWFuIlR4mzFO6Pu7P_OhYC-V7oCwT775ZQsFHGcxTEVxLYoLXeHnvd-y2bHNVFNNWoaqfNzjfVaF21v2lZPQWJR208EX1okvYmBzs2xjPqrB_s-1cV7eGmNVZzkMY-wPMf_VrVFiAvazsS7oUPCmbePMpVHNNDL55iDjKNVw1Tdto5AaP7V3SqwaJTqnLhF1rkJWSNZy364cFPSJctMOtfyR8bjTVmdU4TTw3WUgwDmEmGPsO2r3L8Ty0P7PfU7OyI_WcJ-vYZkFM"
              alt="Hero"
            />
            <div className="overlay-content">
              <span className="badge-accreditation">
                <i className="bi bi-shield-check"></i> ÉCOLE DE CONDUITE AGRÉÉE
              </span>

              {/* L-animation Typewriter hna */}
              <div className="typing-container">
                <h1 className="typing-text">Tracez votre propre route</h1>
              </div>

              <p className="hero-desc">
                Rejoignez plus de 10 000 élèves qui ont obtenu leur permis avec
                RouteWise. Une formation moderne, flexible et certifiée.
              </p>
            </div>
          </div>
        </div>

        <div className="form-side">
          <div className="form-box">
            <h2 className="form-title">Créer votre compte</h2>
            <p className="form-subtitle">
              Commencez votre apprentissage dès aujourd'hui.
            </p>

            <form>
              <div className="mb-3">
                <label className="form-label">Nom complet</label>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Jean Dupont"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Adresse e-mail</label>
                <input
                  type="email"
                  className="custom-input"
                  placeholder="nom@exemple.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Numéro de téléphone</label>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Carte Nationale (CIN)</label>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="A123456"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mot de passe</label>
                <div className="password-wrapper">
                  <input
                    type="password"
                    name="password"
                    className="custom-input"
                    placeholder="••••••••"
                  />
                  <i className="bi bi-eye password-toggle"></i>
                </div>
              </div>

              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                />
                <label className="form-check-label small" htmlFor="terms">
                  J'accepte les{' '}
                  <a href="#" className="signup-link">
                    Conditions d'utilisation
                  </a>
                </label>
              </div>

              <button type="submit" className="btn-primary-signup">
                <a href="/login" style={{textDecoration : 'none'}}>Créer mon compte</a>
              </button>

              <p className="text-center mt-4 already-account">
                Déjà un compte ? <a href="/login">Se connecter</a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <footer className="custom-footer">
        <div className="footer-grid">
          <div>
            <h6 className="fw-bold m-0">RouteWise</h6>
            <p className="small text-secondary m-0">© 2024 RouteWise.</p>
          </div>
          <div>
            <p className="small m-0">hichamnajmi937@gmail.com</p>
            <p className="small m-0">0639397334</p>
          </div>
          <div className="text-end">
            <button className="btn btn-sm btn-light rounded-pill border">
              Contactez-nous
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;