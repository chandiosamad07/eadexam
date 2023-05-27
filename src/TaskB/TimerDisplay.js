import React, { useState, useEffect } from 'react';

function TimerDisplay() {
    const [count, SetCount] = useState(10)
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Initail Timer Value  {count}</h1>
      <p></p>
      <h2>It is {currentTime}.</h2>
    </div>
  );
}

export default TimerDisplay;