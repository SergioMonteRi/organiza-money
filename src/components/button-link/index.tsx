import { Link } from 'react-router-dom';

type Props = {
  text: string;
  url: string;
};

const ButtonLink = ({ text, url }: Props) => {
  return (
    <Link className="button" to={`${url}`}>
      {text}
    </Link>
  );
};

export default ButtonLink;
