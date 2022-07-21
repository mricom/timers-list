import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatTimeString } from "../shared/utils";
import {
  decreaseTimeLeft,
  resetCountdownTimer,
  setCountdownTimer,
} from "../redux/actions";
import { Button } from "reactstrap";

export default function CountdownTimer() {
  const timer = useSelector((state) => state.countdownTimer.selectedTimer);
  const timers = useSelector((state) => state.timers);
  const timeLeft = useSelector((state) => state.countdownTimer.timeLeft);
  //State that is true if the timer is counting down, and false if it is stopped
  const [isCountingDown, setIsCountingDown] = useState(false);
  //State that stores if the timer has already started or not
  const [isCountdownStarted, setIsCountdownStarted] = useState(false);
  let countdownTimerInterval;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCountingDown) {
      countdownTimerInterval = setInterval(() => {
        dispatch(decreaseTimeLeft());
        console.log("hola");
      }, 1000);
    }
    return () => clearInterval(countdownTimerInterval);
  }, [isCountingDown]);

  const startTimer = () => {
    dispatch(setCountdownTimer({ ...timers[0], index: 0 }));
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
    dispatch(resetCountdownTimer());
  };

  return (
    <div>
      <p>
        {!isNaN(timeLeft.hours) &&
        !isNaN(timeLeft.minutes) &&
        !isNaN(timeLeft.seconds)
          ? formatTimeString(timeLeft.hours, timeLeft.minutes, timeLeft.seconds)
          : formatTimeString(0, 0, 0)}
      </p>
      <div className="mb-2">
        {isCountdownStarted ? (
          <>
            {isCountingDown ? (
              <Button type="button" onClick={stopTimer} className="me-2">
                Stop
              </Button>
            ) : (
              <Button type="button" onClick={resumeTimer} className="me-2">
                Resume
              </Button>
            )}
            <Button type="button" onClick={resetTimer}>
              Reset
            </Button>
          </>
        ) : (
          <Button type="button" onClick={startTimer}>
            Start
          </Button>
        )}
      </div>
    </div>
  );
}
