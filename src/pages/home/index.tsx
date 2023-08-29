import './styles.css';

import { useContext } from 'react';
import { AuthContext } from 'contex/AuthContex';
import FirstSection from './components/first-section';
import InformativeSection from './components/informative-section';

import FirstSectionImg from 'assets/images/chart-money-analysis.svg';
import FourthSectionImg from 'assets/images/business-man-in-spaceship.svg';
import ThirdSectionImg from 'assets/images/pie-chart.svg';
import SecondSectionImg from 'assets/images/carrying-money.svg';

import {
  firstInformativeSectionSubtitle,
  firstInformativeSectionTitle,
  fourthInformativeSectionSubtitle,
  fourthInformativeSectionTitle,
  secondInformativeSectionSubtitle,
  secondInformativeSectionTitle,
  thirdInformativeSectionSubtitle,
  thirdInformativeSectionTitle,
} from 'utils/texts';

const Home = () => {
  // const { authContextData } = useContext(AuthContext);

  return (
    // <div className="page-container home-container">
    //   <div className="page-content-container">
    //     <h1 className="page-main-text">
    //       Seu salário foi para o espaço? Saiba que organização financeira não é
    //       coisa de outro mundo.
    //     </h1>

    //     <p className="page-secondary-text">
    //       Visualize seus gastos de maneira organizada com nossos gráficos
    //       analíticos fáceis de interpretar.
    //     </p>

    //     {authContextData.authenticated ? (
    //       <ButtonLink text="Acessar dashboard" url="/dashboard" />
    //     ) : (
    //       <ButtonLink text="Acessar aplicativo" url="/login" />
    //     )}
    //   </div>
    //   <div className="home-img-container">
    //     <div className="home-img-animation ">
    //       <HomeAstronaut />
    //     </div>
    //   </div>
    // </div>
    // <div className="home-container">
    <>
      <FirstSection />

      <InformativeSection
        imgPath={FirstSectionImg}
        title={firstInformativeSectionTitle}
        subtitle={firstInformativeSectionSubtitle}
      />
      <div className="home-second-section-container">
        <InformativeSection
          imgPath={SecondSectionImg}
          title={secondInformativeSectionTitle}
          subtitle={secondInformativeSectionSubtitle}
        />
      </div>
      <InformativeSection
        imgPath={ThirdSectionImg}
        title={thirdInformativeSectionTitle}
        subtitle={thirdInformativeSectionSubtitle}
      />
      <div className="home-fourth-section-container">
        <InformativeSection
          imgPath={FourthSectionImg}
          title={fourthInformativeSectionTitle}
          subtitle={fourthInformativeSectionSubtitle}
        />
      </div>
    </>

    // </div>
  );
};

export default Home;
