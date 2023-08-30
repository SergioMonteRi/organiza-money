// COMPONENTS
import MainSection from './components/main-section';
import InformativeSection from './components/informative-section';

// ASSETS
import FirstSectionImg from 'assets/images/chart-money-analysis.svg';
import FourthSectionImg from 'assets/images/business-man-in-spaceship.svg';
import ThirdSectionImg from 'assets/images/pie-chart.svg';
import SecondSectionImg from 'assets/images/carrying-money.svg';

// TEXTS
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

// STYLES
import './styles.css';
import NavigationBar from 'components/navigation-bar';

const Home = () => {
  return (
    <div className="home-container">
      <NavigationBar />

      <MainSection />
      <InformativeSection
        imgPath={SecondSectionImg}
        title={firstInformativeSectionTitle}
        subtitle={firstInformativeSectionSubtitle}
        backgroundChange
      />
      <InformativeSection
        imgPath={FirstSectionImg}
        title={secondInformativeSectionTitle}
        subtitle={secondInformativeSectionSubtitle}
      />
      <InformativeSection
        imgPath={ThirdSectionImg}
        title={thirdInformativeSectionTitle}
        subtitle={thirdInformativeSectionSubtitle}
        backgroundChange
      />

      <InformativeSection
        imgPath={FourthSectionImg}
        title={fourthInformativeSectionTitle}
        subtitle={fourthInformativeSectionSubtitle}
      />
    </div>
  );
};

export default Home;
