// COMPONENTS
import FirstSection from './components/first-section';
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

const Home = () => {
  return (
    <>
      <FirstSection />
      <div className="bg-secondary">
        <InformativeSection
          imgPath={SecondSectionImg}
          title={firstInformativeSectionTitle}
          subtitle={firstInformativeSectionSubtitle}
        />
      </div>
      <InformativeSection
        imgPath={FirstSectionImg}
        title={secondInformativeSectionTitle}
        subtitle={secondInformativeSectionSubtitle}
      />
      <div className="bg-secondary">
        <InformativeSection
          imgPath={ThirdSectionImg}
          title={thirdInformativeSectionTitle}
          subtitle={thirdInformativeSectionSubtitle}
        />
      </div>

      <InformativeSection
        imgPath={FourthSectionImg}
        title={fourthInformativeSectionTitle}
        subtitle={fourthInformativeSectionSubtitle}
      />
    </>
  );
};

export default Home;
