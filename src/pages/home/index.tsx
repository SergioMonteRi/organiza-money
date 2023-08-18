import { ReactComponent as HomeAstronaut } from 'assets/images/home_astronaut.svg';
import './styles.css';

import ButtonLink from 'components/button-link';

const Home = () => {
  return (
    <div className="page-container home-container">
      <div className="page-content-container">
        <h1 className="page-main-text">
          Seu salário foi para o espaço? Saiba que organização financeira não é
          coisa de outro mundo.
        </h1>

        <p className="page-secondary-text">
          Visualize seus gastos de maneira organizada com nossos gráficos
          analíticos fáceis de interpretar.
        </p>

        <ButtonLink text="Acessar aplicativo" url="/login" />
      </div>
      <div className="home-img-container">
        <div className="home-img-animation ">
          <HomeAstronaut />
        </div>
      </div>
    </div>
  );
};

export default Home;
