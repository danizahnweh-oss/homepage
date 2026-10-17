import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { CoverflowCarousel, type CoverflowSlide } from '@/components/ui/coverflow-carousel';
import './subject-carousel.css';

const slides: CoverflowSlide[] = [
  { src: '/Q12/Fabrik/assets/factory.png', alt: 'Die Schokoladenfabrik bei Abendlicht.', title: 'Wirtschaft & Recht', subtitle: 'Klasse 10, 11 & Q12', href: '/wirtschaft-recht/', description: 'Zusammenhänge verstehen. Entscheidungen begründen.' },
  { src: '/assets/subjects/books.jpg', alt: 'Ein Regal voller Bücher.', title: 'Deutsch', subtitle: 'Klasse 5', href: '/deutsch/', description: 'Geschichten lesen. Sprache entdecken.' },
  { src: '/assets/subjects/london.jpg', alt: 'Die Tower Bridge und die Themse in London.', title: 'Englisch', subtitle: 'Klasse 7, 10 & 11', href: '/englisch/', description: 'Wörter lernen. Dein Wissen spielerisch überprüfen.' },
  { src: '/assets/subjects/school.jpg', alt: 'Bücher und Buntstifte auf einem Schreibtisch.', title: 'Schulleben', subtitle: 'SMV-Zimmer buchen', href: '/schulleben/', description: 'Freie Termine finden. Platz für eure Ideen.' },
];

class SelectionBoundary extends React.Component<{children: React.ReactNode}, {failed: boolean}> {
  state = {failed: false};
  static getDerivedStateFromError() { return {failed: true}; }
  render() { return this.state.failed ? null : this.props.children; }
}
// Keep existing links to the old homepage sections useful after the move.
const oldSections: Record<string, string> = {
  '#wirtschaft': '/wirtschaft-recht/', '#deutsch': '/deutsch/',
  '#englisch': '/englisch/', '#schulleben': '/schulleben/',
};
const redirectOldSection = () => {
  const destination = oldSections[window.location.hash];
  if (destination) window.location.replace(destination);
  return Boolean(destination);
};
window.addEventListener('hashchange', redirectOldSection);
if (!redirectOldSection()) {
  const container = document.getElementById('subject-carousel-root');
  if (container) createRoot(container).render(<SelectionBoundary><CoverflowCarousel slides={slides} /></SelectionBoundary>);
}
