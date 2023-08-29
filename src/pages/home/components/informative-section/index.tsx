import './styles.css';

type Props = {
  imgPath: string;
  title: string;
  subtitle: string;
};

const InformativeSection = ({ imgPath, title, subtitle }: Props) => {
  return (
    <div className="information-section-container">
      <div className="information-section-img-container">
        <img
          className="information-section-img"
          src={imgPath}
          alt="information section analysis money"
        />
      </div>
      <div className="information-section-enter-app">
        <div className="information-section-text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default InformativeSection;
