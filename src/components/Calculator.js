import Button from './Button';
import '../Button.css';

const Calculator = () => (
  <div className="container">
    <div className="calculator-container">
      <div className="row screen-container">
        <span>0</span>
      </div>
      <div className="row row-one">
        <Button content="AC" />
        <Button content="+/-" />
        <Button content="%" />
        <Button content="/" btnClassName="orangeButton" />
      </div>
      <div className="row row-two">
        <Button content="7" />
        <Button content="8" />
        <Button content="9" />
        <Button content="x" btnClassName="orangeButton" />
      </div>
      <div className="row row-three">
        <Button content="4" />
        <Button content="5" />
        <Button content="6" />
        <Button content="-" btnClassName="orangeButton" />
      </div>
      <div className="row row-four">
        <Button content="1" />
        <Button content="2" />
        <Button content="3" />
        <Button content="+" btnClassName="orangeButton" />
      </div>
      <div className="row row-five">
        <Button content="0" btnClassName="zero-button gray-button" />
        <Button content="." btnClassName="dot-button gray-button" />
        <Button content="=" btnClassName="orangeButton equal-button" />
      </div>
    </div>
  </div>
);

export default Calculator;
