import React, { useState } from 'react';
import Button from './Button';
import '../styles/Button.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setCalculatorData(calculate(calculatorData, buttonName));
  };

  return (
    <div className="main cols-2">
      <div className="title">
        <h1>
          Let&apos;s Do some math
        </h1>
      </div>
      <div className="container-calc">
        <div className="calculator-container">
          <div className="row screen-container">
            <span>{calculatorData.next || calculatorData.total || '0'}</span>
          </div>
          <div className="row row-one">
            <Button content="AC" btnClassName="gray-button" clickEvent={() => handleClick('AC')} />
            <Button content="+/-" btnClassName="gray-button" clickEvent={() => handleClick('+/-')} />
            <Button content="%" btnClassName="gray-button" clickEvent={() => handleClick('%')} />
            <Button content="÷" btnClassName="orangeButton" clickEvent={() => handleClick('÷')} />
          </div>
          <div className="row row-two">
            <Button content="7" btnClassName="gray-button" clickEvent={() => handleClick('7')} />
            <Button content="8" btnClassName="gray-button" clickEvent={() => handleClick('8')} />
            <Button content="9" btnClassName="gray-button" clickEvent={() => handleClick('9')} />
            <Button content="x" btnClassName="orangeButton" clickEvent={() => handleClick('x')} />
          </div>
          <div className="row row-three">
            <Button content="4" btnClassName="gray-button" clickEvent={() => handleClick('4')} />
            <Button content="5" btnClassName="gray-button" clickEvent={() => handleClick('5')} />
            <Button content="6" btnClassName="gray-button" clickEvent={() => handleClick('6')} />
            <Button content="-" btnClassName="orangeButton" clickEvent={() => handleClick('-')} />
          </div>
          <div className="row row-four">
            <Button content="1" btnClassName="gray-button" clickEvent={() => handleClick('1')} />
            <Button content="2" btnClassName="gray-button" clickEvent={() => handleClick('2')} />
            <Button content="3" btnClassName="gray-button" clickEvent={() => handleClick('3')} />
            <Button content="+" btnClassName="orangeButton" clickEvent={() => handleClick('+')} />
          </div>
          <div className="row row-five">
            <Button content="0" btnClassName="zero-button gray-button" clickEvent={() => handleClick('0')} />
            <Button content="." btnClassName="dot-button gray-button" clickEvent={() => handleClick('.')} />
            <Button content="=" btnClassName="orangeButton equal-button" clickEvent={() => handleClick('=')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
