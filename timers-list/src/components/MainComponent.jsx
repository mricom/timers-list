import React from "react";
import TimersList from "./TimersListComponent";
import {Container} from 'reactstrap';

export default function Main() {
  return (
    <Container className="my-3">
      <TimersList></TimersList>
    </Container>
  );
}
