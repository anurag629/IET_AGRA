import Location from '../../Location';
import PlacementGallery from '../Carousel';
import Contact from '../Contact';
import Hero from '../Hero';

const TNPCell = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <PlacementGallery />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Location />
      </section>
    </>
  );
};

export default TNPCell;
