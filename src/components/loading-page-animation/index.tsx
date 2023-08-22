import './styles.css';

import MoneyGif from 'assets/gifs/money.gif';

const LoginPageAnimation = () => {
  return (
    <div className="login-page-animation-container">
      <img src={MoneyGif} alt="Money gif loader" />
      <div>
        <p>Organização financeira? </p>
        <p className="text-secondary">Ao infinito e além.</p>
      </div>
    </div>
  );
};

export default LoginPageAnimation;
