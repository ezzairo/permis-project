import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-wrapper">
      {/* Background Gear Animation */}
      <div className="bg-animation-layer">
        <i className="bi bi-gear-wide-connected giant-wheel"></i>
      </div>

      <nav className="custom-nav">
        <div className="logo-group">
          <span className="logo animate-logo">RouteWise</span>
        </div>

        <a href="" className="back-home">
          <i className="bi bi-arrow-left"></i> Accueil
        </a>
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

              {/* Slide-Up Mask Animation */}
              <div className="hero-text-wrapper">
                <h1 className="hero-title mask-animation">
                  Content de vous revoir
                </h1>
              </div>

              <p className="hero-desc">
                Connectez-vous pour suivre votre progression et réserver vos
                prochaines heures de conduite.
              </p>
            </div>
          </div>
        </div>

        <div className="form-side">
          <div className="form-box">
            <h2 className="form-title">Connexion</h2>
            <p className="form-subtitle">
              Entrez vos identifiants pour accéder à votre espace.
            </p>

            <form>
              <div className="mb-4">
                <label className="form-label">Adresse e-mail</label>
                <div className="input-group-custom">
                  <i className="bi bi-envelope"></i>
                  <input type="email" placeholder="nom@exemple.com" />
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <label className="form-label">Mot de passe</label>
                  <a href="#" className="forgot-password">
                    Mot de passe oublié ?
                  </a>
                </div>
                <div className="input-group-custom">
                  <i className="bi bi-lock"></i>
                  <input type="password" placeholder="••••••••" />
                </div>
              </div>

              <button type="submit" className="btn-primary-signup">
                <a href="/" style={{ textDecoration: 'none' }}>
                  Se connecter
                </a>
              </button>

              <p className="text-center mt-4 already-account">
                Pas encore de compte ? <a href="/register">S'inscrire</a>
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
            <p className="small m-0 text-decoration-underline">
              hichamnajmi937@gmail.com
            </p>
          </div>
          <div className="text-end">
            <button className="btn btn-sm btn-light rounded-pill border">
              Besoin d'aide ?
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
