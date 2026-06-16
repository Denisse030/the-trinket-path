import About from "./About.js";
import "../App.css";

const Home = () => {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-text">
            <h1>Welcome To The Trinket Path</h1>
        </div>
      </section>
      <About />
    </main>
  );
};

export default Home;