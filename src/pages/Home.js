import Contact from "../components/home/Contact";
import Carousel from "../components/home/Carousel";
import Students from "../components/home/Students";

const Home = () => {

  return (
    <>
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <Carousel />
      </div>

      <div style={{ backgroundColor: "#ffffff" }}>
        <Students />
      </div>

      <div style={{ backgroundColor: "#f0f0f0" }}>
        <Contact />
      </div>
    </>
  );
};

export default Home;