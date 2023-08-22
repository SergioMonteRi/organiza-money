type Props = {
  text: string;
};

const ButtonRegular = ({ text }: Props) => {
  return <button className="button">{text}</button>;
};

export default ButtonRegular;
