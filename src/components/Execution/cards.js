import carVideo from '../../assets/car.mp4';
import motoVideo from '../../assets/moto.mp4';
import camionVideo from '../../assets/camion.mp4';
import roadVideo from '../../assets/road.mp4';

export const cards = [
  {
    id: 1,
    title: 'Permis Voiture',
    text: 'Formation complète voiture.',
    video: carVideo,
    path: '/permis-voiture', // Zid hada
  },
  {
    id: 2,
    title: 'Permis Moto',
    text: 'Conduite moto moderne.',
    video: motoVideo,
    path: '/permis-moto',  
  },
  {
    id: 3,
    title: 'Permis Camion',
    text: 'Formation camion professionnelle.',
    video: camionVideo,
    path: '/poids-lourd/infractions',
  },
  {
    id: 4,
    title: 'Code de la route',
    text: 'Maîtriser les règles de circulation.',
    video: roadVideo,
    path: '/code-route',
  },
];
