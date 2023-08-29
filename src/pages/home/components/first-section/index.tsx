import { ReactComponent as ChasingMoney } from 'assets/images/chasing-money.svg';

import './styles.css';

const FirstSection = () => {
  return (
    <div className="first-section-container">
      <ChasingMoney className="first-section-img" />

      <div className="first-section-enter-app">
        <div className="first-section-text">
          <div>
            <h1 className="first-section-text-grey">Descomplique suas </h1>
            <h1>finanças: </h1>
            <h1 className="first-section-text-grey">enxergue seus </h1>
            <h1>gastos </h1>
            <h1 className="first-section-text-grey">com </h1>
            <h1>clareza</h1>
          </div>
          <p>
            Um basta para aquela sensação de não saber para onde vai o seu
            dinheiro.
          </p>
        </div>
        <button className="first-section-btn">Acessar aplicativo</button>
      </div>
    </div>
  );
};

export default FirstSection;
