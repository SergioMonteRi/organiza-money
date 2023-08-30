// ASSETS
import './styles.css';

type Props = {
  imgPath: string;
  title: string;
  subtitle: string;
  backgroundChange?: boolean;
};

const InformativeSection = ({
  imgPath,
  title,
  subtitle,
  backgroundChange,
}: Props) => {
  return (
    <div
      className={`information-section-container ${
        backgroundChange ? 'bg-secondary' : 'reverse'
      }`}
    >
      <div className="information-section-img-container">
        <img
          className="information-section-img"
          src={imgPath}
          alt="information section analysis money"
        />
      </div>
      <div className="information-section-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default InformativeSection;
