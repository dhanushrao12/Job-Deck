import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/AllComponents";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> Platform
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            esse tempore aut mollitia minus animi, deleniti repellat veritatis
            inventore. Maiores, nihil suscipit est corporis corrupti quia
            quisquam quasi reprehenderit minima?
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="Job-Deck" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
