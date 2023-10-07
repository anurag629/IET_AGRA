import Contact from "../components/home/Contact";
import Carousel from "../components/home/Carousel";
import Students from "../components/home/Students";
import NewsAndEvent from "../components/home/NewsAndEvent/NewsEvent";
import Locattion from "../components/Location";

const Home = () => {

  return (
    <>
      <section >
        <Carousel />
      </section>
      <section  >
        {/* <NewsAndEvent /> */}
      </section>
      <section >
        <Students />
      </section>

      <section >
        <Contact />
      </section>
      <section >
        <Locattion />
      </section>

    </>
  );
};

export default Home;