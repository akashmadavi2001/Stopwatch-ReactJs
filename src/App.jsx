import { useEffect, useState } from 'react';
import './App.css';
import start from './img/play-button-arrowhead.png';
import reset from './img/undo.png';
import stop from './img/pause.png';

function App() {
  let [time, setTime] = useState(0);
  let [runTime, setRunTime] = useState(false);

  useEffect(() => {
    let timer;
    if (runTime) {
      timer = setInterval(() => {
        setTime((prev) => prev + 10)
      }, 10);
    }
    else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    }
  }, [runTime]);

  const formatTime = (time) => {
    const min = String(Math.floor(time / 60000)).padStart(2, "0");
    const sec = String(Math.floor(time % 60000 / 1000)).padStart(2, "0");
    const centisec = String(Math.floor(time % 1000 / 10)).padStart(2, "0");
    return `${min}:${sec}:${centisec}`;
  }

  return (
    <div className="stopwatch">
      <div className='container'>
        <h1>Stopwatch</h1>
        <h2>{formatTime(time)}</h2>
        <div className='btns'>
          <button onClick={() => setRunTime(true)}><img src={start} alt="img" /> </button>
          <button onClick={() => setRunTime(false)}><img src={stop} alt="img" /></button>
          <button onClick={() => { setRunTime(false); setTime(0) }}><img src={reset} alt="img" /></button>
        </div>
      </div>
    </div>
  );
}

export default App;
