import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [wooScore, setWooScore] = useState(0);
  const [umScore, setUmScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [wooText, setWooText] = useState('');
  const [umText, setUmText] = useState('');
  const [wooTextSize, setWooTextSize] = useState(1);
  const [umTextSize, setUmTextSize] = useState(1);
  const [wooAnimate, setWooAnimate] = useState(false);
  const [umAnimate, setUmAnimate] = useState(false);

  const totalClicks = wooScore + umScore;
  const maxScore = 30;
  const MAX_TEXT_SIZE = 3;

  const winner =
    wooScore === umScore
      ? '무승부 😮'
      : wooScore > umScore
        ? '🐑 양우혁 승리!'
        : '🐻 엄수민 승리!';

  useEffect(() => {
    if (wooScore >= maxScore || umScore >= maxScore) {
      setGameOver(true);
    }
  }, [wooScore, umScore]);

  const handleWooClick = () => {
    if (!gameOver) {
      setWooScore(prev => prev + 1);
      setWooText('양우혁이 양양양 운다🎉');
      setWooTextSize(prevSize => Math.min(prevSize + 0.1, MAX_TEXT_SIZE));
      setWooAnimate(true);
      setTimeout(() => setWooAnimate(false), 200);
    }
  };

  const handleUmClick = () => {
    if (!gameOver) {
      setUmScore(prev => prev + 1);
      setUmText('엄수민이 엄엄엄 운다🎉');
      setUmTextSize(prevSize => Math.min(prevSize + 0.1, MAX_TEXT_SIZE));
      setUmAnimate(true);
      setTimeout(() => setUmAnimate(false), 200);
    }
  };

  const resetGame = () => {
    setWooScore(0);
    setUmScore(0);
    setGameOver(false);
    setWooText('');
    setUmText('');
    setWooTextSize(1);
    setUmTextSize(1);
    setWooAnimate(false);
    setUmAnimate(false);
  };

  const backgroundColor =
    wooScore > umScore ? '#b0e0ff' : umScore > wooScore ? '#a8e6cf' : '#282c34';

  return (
    <div className="App" style={{ backgroundColor }}>
      <header className="App-header">
        <h1>😭 울음 배틀 게임 🎮</h1>

        <div className="score-board">
          <div className="player">
            <h2>🐑 양우혁</h2>
            <p>{wooScore}점</p>
            {!gameOver && (
              <p
                className={`text ${wooAnimate ? 'enlarged' : ''}`}
                style={{ fontSize: `${wooTextSize}rem` }}
              >
                {wooText}
              </p>
            )}
            <img src={`${process.env.PUBLIC_URL}/woo.png`} alt="양우혁" className="emoji" />
            <button
              onClick={handleWooClick}
              className="effect-button"
              disabled={gameOver}
            >
              울려!
            </button>
          </div>

          <div className="player">
            <h2>🐻 엄수민</h2>
            <p>{umScore}점</p>
            {!gameOver && (
              <p
                className={`text ${umAnimate ? 'enlarged' : ''}`}
                style={{ fontSize: `${umTextSize}rem` }}
              >
                {umText}
              </p>
            )}
            <img src={`${process.env.PUBLIC_URL}/um.png`} alt="엄수민" className="emoji" />
            <button
              onClick={handleUmClick}
              className="effect-button"
              disabled={gameOver}
            >
              울려!
            </button>
          </div>
        </div>

        <h3>총 울림 횟수: {totalClicks}</h3>

        {gameOver && (
          <>
            <h2 className="winner">{winner}</h2>
            <button className="reset-button" onClick={resetGame}>다시 하기 🔁</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
