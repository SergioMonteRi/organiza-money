import { ReactComponent as HomeAstronaut } from 'assets/images/home_astronaut.svg';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content-container">
        <h1 className="home-first-text">
          Seu salário vai para o espaço? Saiba que organização financeira não é
          coisa de outro mundo.
        </h1>

        <p className="home-second-text">
          Visualize seus gastos de maneira organizada com nossos gráficos
          analíticos fáceis de interpretar.
        </p>

        <button className="home-btn-acess">Acessar aplicativo</button>
      </div>
      <div className="home-img-container">
        <HomeAstronaut />
      </div>
    </div>
  );
};

export default Home;
