import { ReactComponent as ChasingMoney } from 'assets/images/chasing-money.svg';

import './styles.css';
import LinkButton from 'components/link-button';

const MainSection = () => {
  return (
    <div className="main-section-container">
      <ChasingMoney className="main-section-img" />

      <div className="main-section-enter-app">
        <div className="main-section-text">
          <div>
            <h1 className="main-section-text-grey">Descomplique suas </h1>
            <h1>finanças: </h1>
            <h1 className="main-section-text-grey">enxergue seus </h1>
            <h1>gastos </h1>
            <h1 className="main-section-text-grey">com </h1>
            <h1>clareza</h1>
          </div>
          <p>
            Um basta para aquela sensação de não saber para onde vai o seu
            dinheiro.
          </p>
        </div>
        <div className="main-section-btn-container">
          <LinkButton text="Acessar aplicativo" path="/login" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
