import React from "react";
import TimersList from "./TimersListComponent";
import { Container } from "reactstrap";
import CountdownTimer from "./CountdownTimerComponent";
import CustomNavbar from "./CustomNavbarComponent";

export default function Main() {
  return (
    <>
      <CustomNavbar />
      <Container className="my-3 main-container">
        <CountdownTimer></CountdownTimer>
        <TimersList></TimersList>
      </Container>
    </>
  );
}
