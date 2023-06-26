import React, { useState } from 'react';
import '../App.css';

const Game = ({ stations }) => {
  const [selectedStation, setSelectedStation] = useState('???');
  const [btnDisabled, setBtnDisabled] = useState(false);

  const selectRandomStation = () => {
    setBtnDisabled(true);
    let count = 3;
    const countdownInterval = setInterval(() => {
      if (count === 0) {
        clearInterval(countdownInterval);
        const randomIndex = Math.floor(Math.random() * stations.length);
        setSelectedStation(stations[randomIndex]);
        setBtnDisabled(false);
      } else {
        setSelectedStation(count)
        count--;
      }
    }, 1000);
  };

  return (
    <div>
      <div className='blk_chosen'>
        <p style={{ marginBottom: '5px' }}>選ばれた駅</p>
        <div className='chosen-station'>{selectedStation}</div>
      </div>
      <button onClick={selectRandomStation} className='btn_choice' disabled={btnDisabled}>Click Me！</button><br />
    </div>
  );
};

export default Game;
