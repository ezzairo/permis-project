import { useNavigate } from 'react-router-dom'; // 1. Zydna had l-import
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // 2. Khlaqna l-navigate hook

  const courses = [
    {
      id: 1,
      title: 'Permis Voiture',
      action: 'Continuer la formation',
      tag: 'CATÉGORIE B',
      img: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/voiture', // 3. Zydna l-path dial l-VoiturePage
    },
    {
      id: 2,
      title: 'Permis Moto',
      action: 'Voir les modules',
      tag: 'CATÉGORIE A',
      img: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/moto', // 4. Zydna l-path dial l-MotoPage
    },
    {
      id: 3,
      title: 'Permis Camion',
      action: "S'inscrire à l'examen",
      tag: 'CATÉGORIE C',
      img: 'https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/camion', // Tqder t-zydo f l-mustaqbal
    },
  ];

  const videos = [
    {
      title: 'Passage des Vitesses',
      duration: '12:45',
      thumb: 'https://img.youtube.com/vi/E6E-Ure6j5M/mqdefault.jpg',
    },
    {
      title: 'Anticipation sur Route',
      duration: '08:20',
      thumb: 'https://img.youtube.com/vi/u6z_v8S6H4s/mqdefault.jpg',
    },
    {
      title: 'Circulation Urbaine',
      duration: '15:10',
      thumb: 'https://img.youtube.com/vi/PN2gY_XvAps/mqdefault.jpg',
    },
  ];

  return (
    <div className="home-wrapper">
      <nav className="dash-nav animate-fade-down">
        <span className="logo">RouteWise</span>
        <div className="user-profile">
          <div className="user-info">
            <span className="user-name">Alex Sterling</span>
            <span className="user-license">Class D License</span>
          </div>
          <img
            src="https://ui-avatars.com/api/?name=Alex+Sterling&background=516885&color=fff"
            alt="Avatar"
            className="avatar"
          />
        </div>
      </nav>

      <main className="dash-content">
        <div className="main-section">
          <header className="dash-header animate-left">
            <h1>Tableau de bord</h1>
            <p>
              Gérez vos formations et suivez votre progression pour chaque
              catégorie de permis de conduire.
            </p>
          </header>

          <div className="cards-grid">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="course-card animate-up"
                style={{ animationDelay: `${0.4 + index * 0.25}s` }}
              >
                <div className="card-img-box">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="driving-effect"
                  />
                </div>
                <div className="card-overlay">
                  <span className="category-tag">{course.tag}</span>
                  <h3>{course.title}</h3>
                  {/* 5. Khdemna b navigate(course.path) bach kol card t-di l-blasatha nishan */}
                  <button 
                    onClick={() => navigate(course.path)} 
                    className="card-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    {course.action} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="dash-sidebar animate-right">
          <button className="btn-logout">
            Se Déconnecter <i className="bi bi-box-arrow-right"></i>
          </button>

          <div className="video-section">
            <h4 className="section-title">LEÇONS VIDÉO</h4>
            {videos.map((vid, i) => (
              <div key={i} className="video-card">
                <div className="thumb-container">
                  <img src={vid.thumb} alt={vid.title} />
                  <div className="play-icon">
                    <i className="bi bi-play-circle-fill"></i>
                  </div>
                </div>
                <div className="vid-info">
                  <h5>{vid.title}</h5>
                  <span>Durée: {vid.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>

      <footer className="custom-footer animate-fade-up">
        <div className="footer-grid">
          <div>
            <h6 className="fw-bold m-0">RouteWise</h6>
            <p className="small text-secondary m-0">© 2024 RouteWise.</p>
          </div>
          <div>
            <p className="small fw-bold text-uppercase text-secondary m-0">
              Administration
            </p>
            <p className="small m-0 text-decoration-underline">
              admin@routewise.com
            </p>
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

export default Home;