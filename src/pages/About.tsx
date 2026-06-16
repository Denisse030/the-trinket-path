import { Link } from "react-router-dom";
import "../App.css";

const About = () => {
    const handlePathChange = () => {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
        });
    };
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-text">
          <h1>Welcome Explorers</h1>
          <h2>ABOUT THE PROJECT & A QUICK INTRO</h2>
          <p>
            <strong>Welcome to The Trinket Path:</strong> NYC Edition. I’ve created a curated guide to cozy cafés, lovely trinket shops, and some beautiful art galleries throughout the Big Apple. I’ve made this for fellow explorers and collectors. And as someone who loves discovering cafés, shopping in stationery stores, and finding hidden gems around the city, I wanted to create a space that combines those interests into one interactive guide.
          </p>
          <p>
            Now, for a little bit about me, I’m a passionate developer and designer based in NYC who loves creating visually engaging, user-friendly websites. I enjoy blending creativity with functionality to design digital experiences that feel intuitive and unique. From personal projects to collaborative work, I am driven by curiosity, problem-solving, and the excitement of bringing ideas to life through clean design and thoughtful interaction. Whether it is building from scratch or revamping existing sites, I aim to make every project memorable and meaningful.
          </p>
        </div>
        <div className="profile-image"></div>
      </section>

      <section className="path-section">
        <h1 className="path-title">Pick Your Path</h1>
        <div className="path-cards">
          <Link to="/cafes" className="path-card cafes-card" onClick={handlePathChange}>
            Cafes
          </Link>
          <Link to="/trinkets" className="path-card trinkets-card" onClick={handlePathChange}>
            Trinket Shops
          </Link>
          <Link to="/galleries" className="path-card galleries-card" onClick={handlePathChange}>
            Galleries
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;