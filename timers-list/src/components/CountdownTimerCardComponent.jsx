import React from "react";
import { formatTimeString } from "../shared/utils";
import { Row, Col, Card } from "reactstrap";
import ActionButton from "./ActionButtonComponent";
import "../css/CountdownTimer.css";

export default function CountdownTimerCard(props) {
  return (
    <>
      <Card body className="countdown-timer-container">
        <Row>
          <Col lg={7} md={12}>
            <div>
              <p>
                <span id="countdown-timer-numbers-big">
                  {formatTimeString(props.timeLeft)}
                </span>
              </p>
            </div>
            <div className="mb-2 mx-auto">
              {props.isCountdownStarted ? (
                <>
                  {props.isCountingDown ? (
                    <ActionButton
                      type="button"
                      onClick={props.stopTimer}
                      className="me-2"
                    >
                      Stop
                    </ActionButton>
                  ) : (
                    <ActionButton
                      type="button"
                      onClick={props.resumeTimer}
                      className="me-2"
                    >
                      Resume
                    </ActionButton>
                  )}
                  <ActionButton type="button" onClick={props.resetTimer()}>
                    Reset
                  </ActionButton>
                </>
              ) : (
                <ActionButton
                  type="button"
                  variant="primary"
                  onClick={props.startTimer()}
                >
                  Start
                </ActionButton>
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
