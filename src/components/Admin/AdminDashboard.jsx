import React, { useState } from 'react';

// Mock data dial l-users dialk m9addine
const initialUsers = [
  { id: 1, name: "Amine El Amrani", email: "amine@gmail.com", date: "2026-05-15", category: "Moto (A)", exams: [{ name: "Quiz Signaux Danger", score: "18/20" }, { name: "Exam Blanc 1", score: "35/40" }] },
  { id: 2, name: "Nadia Bennani", email: "nadia@gmail.com", date: "2026-05-28", category: "Voiture (B)", exams: [{ name: "Quiz Stationnement", score: "15/20" }] },
  { id: 3, name: "Youssef Tazi", email: "youssef@gmail.com", date: "2026-06-01", category: "Voiture (B)", exams: [] },
];

// Mock data dial l-médias (les cours)
const initialMedia = [
  { id: 1, title: "Dars l-W9ouf w l-Twa99of", type: "Vidéo", url: "parking_course.mp4", size: "45 MB" },
  { id: 2, title: "Panneaux d'Interdiction complet", type: "Image", url: "interdiction_hero.png", size: "2.4 MB" },
  { id: 3, title: "Manoeuvres s3iba f l-3gba", type: "Vidéo", url: "manoeuvres_moto.mp4", size: "89 MB" },
];

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('users'); 
  const [users, setUsers] = useState(initialUsers);
  const [mediaList, setMediaList] = useState(initialMedia);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDeleteUser = (id) => {
    if (window.confirm("Wach tya9n bghiti t-7yed had l-compte kamil?")) {
      setUsers(users.filter(user => user.id !== id));
      if (selectedUser && selectedUser.id === id) setSelectedUser(null);
    }
  };

  const handleDeleteMedia = (id) => {
    if (window.confirm("Wach bghiti t-7yed had l-médium mn l-site?")) {
      setMediaList(mediaList.filter(m => m.id !== id));
    }
  };

  return (
    <div className="admin-dashboard-wrapper min-vh-100" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#f8fafc" }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" />
      
      {/* CSS CUSTOM PROFESSIONAL STYLE */}
      <style>{`
        .admin-nav {
          background: #0f172a;
          border-bottom: 1px solid #1e293b;
        }
        .stat-card {
          border: 1px solid #e2e8f0;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        }
        .sidebar-btn {
          border: none;
          background: transparent;
          color: #64748b;
          transition: all 0.2s ease;
          font-size: 14.5px;
        }
        .sidebar-btn.active {
          background: #0f172a !important;
          color: #ffffff !important;
        }
        .sidebar-btn:hover:not(.active) {
          background: #f1f5f9;
          color: #0f172a;
        }
        .pro-table thead {
          background: #f8fafc;
          color: #64748b;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .pro-table tr {
          border-bottom: 1px solid #f1f5f9;
          transition: background 0.15s;
        }
        .pro-table tbody tr:hover {
          background: #f8fafc;
        }
        .action-btn {
          font-size: 13px;
          padding: 6px 12px;
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.2s;
        }
        .media-card {
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }
        .media-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }
        .badge-pro {
          padding: 5px 10px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }
        .animate-fade {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      {/* NAVBAR */}
      <nav className="admin-nav navbar navbar-dark px-4 py-3 sticky-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <span className="fs-4">🛡️</span>
            <span className="navbar-brand fw-bold fs-5 m-0 text-white tracking-tight">RouteWise <span className="text-secondary fw-normal fs-6">/ Admin Dashboard</span></span>
          </div>
          <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 badge-pro">Sytème Sécurisé</span>
        </div>
      </nav>

      {/* TOP STATS CARDS BAR */}
      <div className="container-fluid pt-4 px-4">
        <div className="row g-3">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="card stat-card border-0 rounded-4 p-3 bg-white">
              <div className="text-muted small fw-bold text-uppercase mb-1">Total Inscriptions</div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="display-6 fw-bold text-dark">{users.length}</span>
                <span className="fs-3 bg-light p-2 rounded-3">👥</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="card stat-card border-0 rounded-4 p-3 bg-white">
              <div className="text-muted small fw-bold text-uppercase mb-1">Vidéos & Cours</div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="display-6 fw-bold text-dark">{mediaList.length}</span>
                <span className="fs-3 bg-light p-2 rounded-3">🎥</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="card stat-card border-0 rounded-4 p-3 bg-white">
              <div className="text-muted small fw-bold text-uppercase mb-1">Examens Passés</div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="display-6 fw-bold text-dark">
                  {users.reduce((acc, u) => acc + u.exams.length, 0)}
                </span>
                <span className="fs-3 bg-light p-2 rounded-3">📝</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="container-fluid my-4 px-4 flex-grow-1">
        <div className="row g-4">
          
          {/* SIDEBAR TABS */}
          <div className="col-12 col-lg-3">
            <div className="card border-0 rounded-4 p-3 bg-white shadow-sm">
              <div className="d-flex flex-column gap-2">
                <button 
                  onClick={() => setActiveTab('users')} 
                  className={`sidebar-btn text-start rounded-3 fw-bold p-2.5 ${activeTab === 'users' ? 'active' : ''}`}
                >
                  👤 Utilisateurs & Notes
                </button>
                <button 
                  onClick={() => setActiveTab('media')} 
                  className={`sidebar-btn text-start rounded-3 fw-bold p-2.5 ${activeTab === 'media' ? 'active' : ''}`}
                >
                  📁 Gestion du Contenu
                </button>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT WORKSPACE */}
          <div className="col-12 col-lg-9">
            
            {/* TAB 1: USERS */}
            {activeTab === 'users' && (
              <div className="row g-4 animate-fade">
                <div className={selectedUser ? "col-12 col-xl-7" : "col-12"}>
                  <div className="card border-0 rounded-4 p-4 bg-white shadow-sm">
                    <h5 className="fw-bold text-dark mb-4">Moutaba3at l-Moushtarikin</h5>
                    <div className="table-responsive">
                      <table className="table align-middle pro-table">
                        <thead>
                          <tr>
                            <th className="border-0">L-Profil</th>
                            <th className="border-0">Permis</th>
                            <th className="border-0">Date</th>
                            <th className="border-0 text-end">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map(user => (
                            <tr key={user.id} style={{ cursor: 'pointer' }} onClick={() => setSelectedUser(user)}>
                              <td className="border-0 py-3">
                                <div className="fw-bold text-dark" style={{ fontSize: '15px' }}>{user.name}</div>
                                <div className="text-muted extra-small" style={{ fontSize: '12.5px' }}>{user.email}</div>
                              </td>
                              <td className="border-0 py-3">
                                <span className="badge bg-slate bg-light text-dark border border-secondary border-opacity-10 badge-pro">{user.category}</span>
                              </td>
                              <td className="border-0 py-3 text-muted small">{user.date}</td>
                              <td className="border-0 py-3 text-end" onClick={(e) => e.stopPropagation()}>
                                <button onClick={() => setSelectedUser(user)} className="btn action-btn btn-light text-dark me-2">Notes</button>
                                <button onClick={() => handleDeleteUser(user.id)} className="btn action-btn btn-outline-danger">Supprimer</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* PROFILE SIDE PANEL */}
                {selectedUser && (
                  <div className="col-12 col-xl-5">
                    <div className="card border-0 rounded-4 p-4 bg-dark text-white shadow sticky-top" style={{ top: '95px', background: 'linear-gradient(145deg, #0f172a 0%, #1e293b 100%)' }}>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <span className="text-warning small fw-bold text-uppercase">Fiche d'étudiant</span>
                        <button onClick={() => setSelectedUser(null)} className="btn-close btn-close-white btn-sm"></button>
                      </div>
                      <h4 className="fw-bold mb-1">{selectedUser.name}</h4>
                      <p className="text-secondary small mb-4">{selectedUser.email}</p>

                      <div className="border-top border-secondary border-opacity-50 pt-3 mb-4">
                        <h6 className="fw-bold text-white mb-3">📋 Les Notes dial les examens :</h6>
                        {selectedUser.exams.length === 0 ? (
                          <div className="text-muted small py-2">Had l-user b9i madwz 7ta chi imtihan.</div>
                        ) : (
                          <div className="d-flex flex-column gap-2">
                            {selectedUser.exams.map((ex, i) => (
                              <div key={i} className="d-flex justify-content-between align-items-center bg-white bg-opacity-5 p-2.5 rounded-3 border border-secondary border-opacity-25">
                                <span className="small text-light">{ex.name}</span>
                                <span className="badge bg-success badge-pro text-white">{ex.score}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <button onClick={() => handleDeleteUser(selectedUser.id)} className="btn btn-danger w-100 rounded-3 py-2 fw-bold action-btn mt-2">
                        Supprimer le Compte kamil
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: MEDIA MANAGEMENT */}
            {activeTab === 'media' && (
              <div className="card border-0 rounded-4 p-4 bg-white shadow-sm animate-fade">
                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                  <div>
                    <h5 className="fw-bold text-dark m-0">Gestion du Contenu (Cours & Vidéos)</h5>
                    <p className="text-muted small m-0 mt-1">Modifi les ressources multimédias li ma7totin direct f l-piste.</p>
                  </div>
                  <button onClick={() => alert("Ajouter un nouveau média via l'API backend")} className="btn btn-dark rounded-3 px-3 fw-bold action-btn">+ Ajouter Média</button>
                </div>

                <div className="row g-3">
                  {mediaList.map(media => (
                    <div key={media.id} className="col-12 col-md-6">
                      <div className="card media-card rounded-4 p-3 bg-white h-100 d-flex flex-column justify-content-between">
                        <div>
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className={`badge badge-pro ${media.type === 'Vidéo' ? 'bg-danger bg-opacity-10 text-danger' : 'bg-info bg-opacity-10 text-info'}`}>{media.type}</span>
                            <span className="text-muted extra-small" style={{ fontSize: '11px' }}>{media.size}</span>
                          </div>
                          <h6 className="fw-bold text-dark mb-1">{media.title}</h6>
                          <small className="text-muted text-break d-block bg-light p-2 rounded-2 border mt-2" style={{ fontFamily: 'monospace', fontSize: '11.5px' }}>{media.url}</small>
                        </div>
                        <div className="d-flex gap-2 mt-4">
                          <button onClick={() => alert('Modification du média...')} className="btn action-btn btn-light text-dark w-50">Modifier</button>
                          <button onClick={() => handleDeleteMedia(media.id)} className="btn action-btn btn-outline-danger w-50">Supprimer</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;