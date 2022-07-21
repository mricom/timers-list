import React from "react";
import TimersList from "./TimersListComponent";
import {Container} from 'reactstrap';
import CountdownTimer from "./CountdownTimerComponent";

export default function Main() {
  return (
    <Container className="my-3">
      <CountdownTimer></CountdownTimer>
      <TimersList></TimersList>
    </Container>
  );
}
