import { Link } from 'react-router-dom';

import './styles.css';

type Props = {
  text: string;
  url: string;
};

const ButtonLink = ({ text, url }: Props) => {
  return (
    <Link className="button-link" to={`${url}`}>
      {text}
    </Link>
  );
};

export default ButtonLink;
