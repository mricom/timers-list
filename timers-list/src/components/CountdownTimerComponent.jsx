import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CountdownTimerCard from "./CountdownTimerCardComponent";

export default function CountdownTimer() {
  const timers = useSelector((state) => state.timers);
  //State that is true if the timer is counting down, and false if it is stopped
  const [isCountingDown, setIsCountingDown] = useState(false);
  //State that stores if the timer has already started or not
  const [isCountdownStarted, setIsCountdownStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerIndex, setTimerIndex] = useState(0);
  let countdownTimerInterval;

  // Function that decreases in 1 the timer time left.
  const decreaseTimeLeft = () => {
    setTimeLeft((prevSeconds) =>
      prevSeconds > 0 ? prevSeconds - 1 : prevSeconds
    );
  };

  // Function that invoques decrease timer every second.
  // On unmounting the component, the interval is cleared.
  useEffect(() => {
    if (isCountingDown) {
      countdownTimerInterval = setInterval(() => {
        decreaseTimeLeft();
      }, 1000);
    }
    return () => clearInterval(countdownTimerInterval);
  }, [isCountingDown]);

  // If the timer has ended, it loads the following timer or resets it if all the timers have finished.
  useEffect(() => {
    if (isCountingDown && timeLeft === 0) {
      if (timerIndex < timers.length - 1) {
        setTimerIndex((prevState) => ++prevState);
      } else {
        resetTimer();
      }
    }
  }, [timeLeft]);

  useEffect(() => {
    if (timers.length) {
      setTimeLeft(timers[timerIndex].seconds);
    }
  }, [timerIndex]);

  const startTimer = () => {
    setTimeLeft(timers[0].seconds);
    setTimerIndex(0);
    setIsCountingDown(true);
    setIsCountdownStarted(true);
  };

  const stopTimer = () => {
    setIsCountingDown(false);
    clearInterval(countdownTimerInterval);
  };

  const resumeTimer = () => {
    setIsCountingDown(true);
  };

  const resetTimer = () => {
    setIsCountingDown(false);
    setIsCountdownStarted(false);
    setTimeLeft(0);
    clearInterval(countdownTimerInterval);
  };

  return (
    <CountdownTimerCard
      timeLeft={timeLeft}
      timers={timers}
      timerIndex={timerIndex}
      startTimer={() => startTimer}
      stopTimer={() => stopTimer}
      resumeTimer={() => resumeTimer}
      resetTimer={() => resetTimer}
      isCountdownStarted={isCountdownStarted}
      isCountingDown={isCountingDown}
    />
  );
}
