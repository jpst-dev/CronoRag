import React, { useState } from "react";
import "./App.css";

import BtnComponent from "./Components/BtnComponent";
import DisplayComponent from "./Components/DisplayComponent";
import TitleComponent from "./Components/TitleComponet"

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // Started = 1
  // Stopped = 2

  const start = () => {
    run();
    setStatus(1)
    setInterv(setInterval(run, 10));
  };

  var updateMs = time.ms,
    updateS = time.s,
    updateM = time.m,
    updateH = time.h;

  const run = () => {
    if (updateM === 60) {
      updateM = 0;
      updateH++;
    }
    if (updateS === 60) {
      updateS = 0;
      updateM++;
    }
    if (updateMs === 100) {
      updateMs = 0;
      updateS++;
    }
    updateMs++;
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
  };

  const ms = () => {
    if (time.ms === 0) {
      return "Cronômetro";
    } else {
      return `${time.m >= 10 ? time.m : "0" + time.m}:${time.s >= 10 ? time.s : "0" + time.s} - Cronômetro`
    }
  }

  const resume = () => start();

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="count-container">
        </div>
        <div className="stopwatch">
          <TitleComponent titleName={ms()} /> 
          <DisplayComponent time={time} />
          <BtnComponent status={status} stop={stop} resume={resume} reset={reset} start={start} />
        </div>
      </div>
    </div>
  );
}

export default App;
