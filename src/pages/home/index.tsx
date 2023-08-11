import Typed from "react-typed";

import Navbar from "components/navbar";

import HomeImgDesktop from "../../assets/images/home_image.svg";
import HomeImgMobile from "../../assets/images/home_image_mobile.png";

import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-content-container">
        <div className="home-text-container">
          <h1 className="home-text-data">
            Seu controle financeiro em suas mãos:
          </h1>

          <div className="home-text-data">
            <Typed
              strings={["Gerencie!", "Poupe!", "Realize!"]}
              typeSpeed={100}
              backSpeed={60}
              loop
            />
          </div>

          <h2>
            Domine seus gastos com nosso aplicativo intuitivo de controle
            financeiro. Visualize, planeje, poupe.
          </h2>
        </div>

        <picture className="home-img-container">
          <source media="(max-width: 767px)" srcSet={HomeImgMobile} />
          <source media="(min-width: 768px)" srcSet={HomeImgDesktop} />
          <img src={HomeImgMobile} alt="Imagem Responsiva" />
        </picture>
      </main>
    </div>
  );
};

export default Home;
