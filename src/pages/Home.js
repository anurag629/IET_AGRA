import Contact from "../components/home/Contact";
import Carousel from "../components/home/Carousel";
import Students from "../components/home/students/Students";
// import NewsAndEvent from "../components/home/NewsAndEvent/NewsEvent";
import Locattion from "../components/Location";
import Hero from "../components/home/Hero";

const Home = () => {

  return (
    <>
      <section >
        <Hero />
        </section>
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