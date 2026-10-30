import React, { useState } from 'react';
import './MotoSanctions.css';

const infractionsData = [
  {
    type: 'delit',
    title: '⚖️ Les Délits (الجنح) - Très Grave',
    desc: 'Hadou homa kbar l-jora2im f l-code. Fihom t-t-na9as les points bzzaf, amende kbira, Tribunal, w t-9der t-wsal 7ta l-7bss.',
    items: [
      {
        offense: "Conduite sous l'effet de stupéfiants (Drogues)",
        points: '-6 Points',
        amende: "Jusqu'à 4 500 €",
        sanction:
          "Rétention immédiate du permis + Annulation/Suspension + Jusqu'à 2 ans de prison.",
      },
      {
        offense: "Récidive d'alcoolémie ≥ 0,5 g/L de sang",
        points: '-6 Points',
        amende: "Jusqu'à 4 500 €",
        sanction:
          'Annulation automatique du permis + Immobilisation de la moto + Prison.',
      },
      {
        offense: "Refus d'obtempérer (Ma bghitich t-w9ef l l-police)",
        points: '-6 Points',
        amende: "Jusqu'à 7 500 €",
        sanction:
          'Suspension du permis (3 ans max) + Saisie de la moto + 1 an de prison.',
      },
      {
        offense: 'Délit de fuite après un accident',
        points: '-6 Points',
        amende: "Jusqu'à 75 000 €",
        sanction:
          "Suspension du permis (5 ans max) + Saisie du véhicule + Jusqu'à 3 ans de prison.",
      },
      {
        offense: 'Conduite sans permis (A, A1 ou A2 non valide)',
        points: '0 Points (Pas de permis)',
        amende: '1500 € (Amende forfaitaire possible)',
        sanction:
          'Immobilisation immédiate de la moto + Risque de 1 an de prison.',
      },
    ],
  },
  {
    type: 'grave',
    title: '🚨 Contraventions Graves (Classe 4 & 5)',
    desc: 'Mokhalafes s3ab dial r-radar w la sécurité obligatoire. T-t-na9as fihom points direct.',
    items: [
      {
        offense: 'Grand excès de vitesse (≥ 50 km/h au-dessus)',
        points: '-6 Points',
        amende: "Jusqu'à 1 500 €",
        sanction:
          'Suspension immédiate du permis (3 ans) + Rétention de la moto.',
      },
      {
        offense: "Non-respect d'un feu rouge ou d'un panneau STOP",
        points: '-4 Points',
        amende: '135 € (Forfaitaire)',
        sanction:
          'Suspension du permis possible + Risque de sur-accident grave.',
      },
      {
        offense: 'Circulation en sens interdit',
        points: '-4 Points',
        amende: '135 € (Forfaitaire)',
        sanction:
          'Suspension du permis (3 ans max) + Immobilisation immédiate.',
      },
      {
        offense: 'Excès de vitesse entre 30 km/h et 49 km/h',
        points: '-3 ou -4 Points',
        amende: '135 € (Forfaitaire)',
        sanction: 'Suspension du permis possible.',
      },
      {
        offense: 'Non-port du casque homologué (Conducteur ou Passager)',
        points: '-3 Points',
        amende: '135 € (Forfaitaire)',
        sanction: 'Immobilisation de la moto sur place + Casque obligatoire.',
      },
      {
        offense: 'Changement de direction sans clignotant',
        points: '-3 Points',
        amende: '35 €',
        sanction: "Danger d'angle mort pour les autres usagers.",
      },
    ],
  },
  {
    type: 'legere',
    title: '📋 Contraventions Légères (Classe 1 à 3)',
    desc: 'Mokhalafes khfifa walakin t-ykharjo 3la l-jib. Chi 7add fihom fih ghir lghrama bla points.',
    items: [
      {
        offense: 'Non-port de gants homologués CE',
        points: '-1 Point',
        amende: '68 €',
        sanction: 'Obligatoire pour le motard et son passager.',
      },
      {
        offense: 'Non-présentation de la carte grise ou permis',
        points: '0 Points',
        amende: '11 € (Par document)',
        sanction:
          'Obligation de présenter le document au commissariat sous 5 jours.',
      },
      {
        offense: "Plaque d'immatriculation non conforme ou illisible",
        points: '0 Points',
        amende: '135 €',
        sanction:
          "Amende directe si l'inclinaison ou la taille n'est pas réglementaire.",
      },
      {
        offense: 'Échappement trop bruyant (Changement de pot non homologué)',
        points: '0 Points',
        amende: '135 €',
        sanction:
          "Immobilisation possible de la moto + Obligation de remettre le pot d'origine.",
      },
      {
        offense: 'Absence de gilet haute sécurité (Gilet jaune) à bord',
        points: '0 Points',
        amende: '11 €',
        sanction: 'Le gilet doit être accessible en cas de panne.',
      },
    ],
  },
];

function MotoSanctions() {
  const [activeFilter, setActiveFilter] = useState('all');

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
          <div className="bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-1 small fw-bold">
            Barème Officiel Infractions ETM
          </div>
        </div>
      </nav>

      {/* HERO BANNER */}
      <div className="sanctions-hero text-white text-center py-5 position-relative">
        <div className="sanctions-overlay" />
        <div
          className="container position-relative px-3"
          style={{ maxWidth: '900px' }}
        >
          <span
            className="badge bg-danger mb-2 fw-bold text-uppercase px-3 py-1 rounded-pill"
            style={{ fontSize: '11px' }}
          >
            Mise à jour Code Moto 2026
          </span>
          <h1 className="fw-extrabold display-5 m-0 animate-fade-down">
            Délits, Mokhalafes & 3o9obat
          </h1>
          <p
            className="text-light small mt-2 m-0 opacity-75"
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            Had l-guide fih tableaux m9addine dial lghramat, l-points li
            t-ymshio, w l-3o9oba f l-tribunal. Hadchi fih des questions de cours
            s7aa7 f l-examen!
          </p>
        </div>
      </div>

      {/* INTERACTIVE CONTROLS / FILTER BAR */}
      <div className="container my-4 text-center">
        <div className="d-inline-flex gap-2 p-2 bg-white rounded-4 shadow-sm flex-wrap justify-content-center">
          <button
            onClick={() => setActiveFilter('all')}
            className={`btn btn-sm px-3 py-2 rounded-3 fw-bold ${activeFilter === 'all' ? 'btn-dark' : 'btn-light text-muted'}`}
          >
            Tout Voir
          </button>
          <button
            onClick={() => setActiveFilter('delit')}
            className={`btn btn-sm px-3 py-2 rounded-3 fw-bold ${activeFilter === 'delit' ? 'btn-outline-danger bg-danger bg-opacity-10 text-danger border-0' : 'btn-light text-muted'}`}
          >
            Jonah (Délits)
          </button>
          <button
            onClick={() => setActiveFilter('grave')}
            className={`btn btn-sm px-3 py-2 rounded-3 fw-bold ${activeFilter === 'grave' ? 'btn-outline-warning bg-warning bg-opacity-10 text-warning-dark border-0' : 'btn-light text-muted'}`}
          >
            Contraventions Graves
          </button>
          <button
            onClick={() => setActiveFilter('legere')}
            className={`btn btn-sm px-3 py-2 rounded-3 fw-bold ${activeFilter === 'legere' ? 'btn-outline-primary bg-primary bg-opacity-10 text-primary border-0' : 'btn-light text-muted'}`}
          >
            Contraventions Légères
          </button>
        </div>
      </div>

      {/* TABLES LAYOUT SECTION */}
      <div
        className="container pb-5 flex-grow-1"
        style={{ maxWidth: '1000px' }}
      >
        <div className="d-flex flex-column gap-5">
          {infractionsData
            .filter(
              (section) =>
                activeFilter === 'all' || section.type === activeFilter
            )
            .map((section, sIdx) => (
              <div
                key={sIdx}
                className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white p-4 animate-up"
              >
                {/* Section Header */}
                <div className="mb-3 border-bottom pb-3">
                  <h3 className="fw-bold text-dark m-0 h5">{section.title}</h3>
                  <p className="text-muted small m-0 mt-1">{section.desc}</p>
                </div>

                {/* Table Component Responsive */}
                <div className="table-responsive">
                  <table className="table table-hover align-middle m-0 text-start">
                    <thead
                      className="table-light text-secondary text-uppercase extra-small"
                      style={{ fontSize: '11px', letterSpacing: '0.05em' }}
                    >
                      <tr>
                        <th scope="col" style={{ width: '30%' }}>
                          Nature de l'Infraction
                        </th>
                        <th scope="col" style={{ width: '15%' }}>
                          Retrait Points
                        </th>
                        <th scope="col" style={{ width: '15%' }}>
                          Montant Amende
                        </th>
                        <th scope="col" style={{ width: '40%' }}>
                          Sanctions Complémentaires / Tribunal
                        </th>
                      </tr>
                    </thead>
                    <tbody style={{ fontSize: '13px' }}>
                      {section.items.map((item, itemIdx) => {
                        // Dynamic color highlighting for points to instantly guide the eye
                        let pointBadgeClass =
                          'bg-secondary bg-opacity-10 text-secondary';
                        if (item.points.includes('-6'))
                          pointBadgeClass = 'bg-danger text-white';
                        else if (
                          item.points.includes('-3') ||
                          item.points.includes('-4')
                        )
                          pointBadgeClass = 'bg-warning text-dark';

                        return (
                          <tr key={itemIdx} className="sanction-row-item">
                            <td className="fw-bold text-dark">
                              {item.offense}
                            </td>
                            <td>
                              <span
                                className={`badge rounded-2 px-2 py-1 small fw-bold ${pointBadgeClass}`}
                              >
                                {item.points}
                              </span>
                            </td>
                            <td className="text-danger fw-semibold">
                              {item.amende}
                            </td>
                            <td
                              className="text-muted"
                              style={{ lineHeight: '1.5' }}
                            >
                              {item.sanction}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer mt-auto py-3 bg-white border-top text-center text-muted small">
        © 2026 RouteWise ETM Penal Code Tracker. Perfect dynamic setup.
      </footer>
    </div>
  );
}

// Split default export securely to prevent caching mismatch on dev server
export default MotoSanctions;
