import React from "react";
import TimersList from "./TimersListComponent";
import {Container} from 'reactstrap';

export default function Main() {
  return (
    <Container>
      <TimersList></TimersList>
    </Container>
  );
}
