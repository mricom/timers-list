import React from "react";
import { formatTimeString } from "../shared/utils";
import { Button, Row, Col, Card } from "reactstrap";
import "../css/CountdownTimer.css";

export default function CountdownTimerCard(props) {
  return (
    <>
      <Card body className="countdown-timer-container">
        <Row>
          <Col  lg={7} md={6} sm={12}>
            <div>
              <p>
                <span id="countdown-timer-numbers-big">
                  {formatTimeString(props.timeLeft)}
                </span>
              </p>
            </div>
            <div className="mb-2">
              {props.isCountdownStarted ? (
                <>
                  {props.isCountingDown ? (
                    <Button
                      type="button"
                      onClick={props.stopTimer}
                      className="me-2"
                    >
                      Stop
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={props.resumeTimer}
                      className="me-2"
                    >
                      Resume
                    </Button>
                  )}
                  <Button type="button" onClick={props.resetTimer()}>
                    Reset
                  </Button>
                </>
              ) : (
                <Button type="button" onClick={props.startTimer()}>
                  Start
                </Button>
              )}
            </div>
          </Col>
          <Col>
            <h2>{props.timers[props.timerIndex].name}</h2>
          </Col>
        </Row>
      </Card>
    </>
  );
}
