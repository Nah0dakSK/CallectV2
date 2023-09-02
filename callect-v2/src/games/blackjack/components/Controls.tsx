import React, { useState, useEffect } from 'react';
import './styles/Controls.css';

type ControlsProps = {
  balance: number,
  gameState: number,
  buttonState: any,
  betEvent: any,
  hitEvent: any,
  standEvent: any,
  resetEvent: any
};

const Controls: React.FC<ControlsProps> = ({ balance, gameState, buttonState, betEvent, hitEvent, standEvent, resetEvent }) => {
  const [amount, setAmount] = useState(10);
  const [inputStyle, setInputStyle] = useState("input");

  useEffect(() => {
    validation();
  }, [amount, balance]);

  const validation = () => {
    if (amount > balance) {
      setInputStyle("inputError");
      return false;
    }
    if (amount < 0.01) {
      setInputStyle("inputError");
      return false;
    }
    setInputStyle("input");
    return true;
  }

  const amountChange = (e: any) => {
    setAmount(e.target.value);
  }

  const onBetClick = () => {
    if (validation()) {
      betEvent(Math.round(amount * 100) / 100);
    }
  }

  const getControls = () => {
    if (gameState === 0) {
      return (
        <div className="controlsContainer">
          <div className="betContainer">
            <h4>Počet:</h4>
            <input autoFocus type='number' value={amount} onChange={amountChange} className={inputStyle} />
          </div>
          <button onClick={() => onBetClick()} className="button">Staviť</button>
        </div>
      );
    }
    else {
      return (
        <div className="controlsContainer">
          <button onClick={() => hitEvent()} disabled={buttonState.hitDisabled} className="button">Pridať</button>
          <button onClick={() => standEvent()} disabled={buttonState.standDisabled} className="button">Ostať</button>
          <button onClick={() => resetEvent()} disabled={buttonState.resetDisabled} className="button">Reset</button>
        </div>
      );
    }
  }

  return (
    <>
      {getControls()}
    </>
  );
}

export default Controls;