import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [wooScore, setWooScore] = useState(0);
  const [umScore, setUmScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [wooText, setWooText] = useState('');
  const [umText, setUmText] = useState('');
  const [wooTextSize, setWooTextSize] = useState(1);  // 텍스트 크기 상태
  const [umTextSize, setUmTextSize] = useState(1);  // 텍스트 크기 상태

  const totalClicks = wooScore + umScore;
  const maxScore = 30;

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
      setWooTextSize(prevSize => prevSize + 0.1);  // 버튼 클릭 시 텍스트 크기 증가
    }
  };

  const handleUmClick = () => {
    if (!gameOver) {
      setUmScore(prev => prev + 1);
      setUmText('엄수민이 엄엄엄 운다🎉');
      setUmTextSize(prevSize => prevSize + 0.1);  // 버튼 클릭 시 텍스트 크기 증가
    }
  };

  const resetGame = () => {
    setWooScore(0);
    setUmScore(0);
    setGameOver(false);
    setWooText('');
    setUmText('');
    setWooTextSize(1);  // 크기 초기화
    setUmTextSize(1);   // 크기 초기화
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
            <p
              className="text"
              style={{ fontSize: `${wooTextSize}rem` }} // 텍스트 크기 조절
            >
              {wooText}
            </p>
            <img src="/woo.png" alt="양우혁" className="emoji" />
            <button onClick={handleWooClick} className="effect-button">
              울려!
            </button>
          </div>

          <div className="player">
            <h2>🐻 엄수민</h2>
            <p>{umScore}점</p>
            <p
              className="text"
              style={{ fontSize: `${umTextSize}rem` }} // 텍스트 크기 조절
            >
              {umText}
            </p>
            <img src="/um.png" alt="엄수민" className="emoji" />
            <button onClick={handleUmClick} className="effect-button">
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
