import React from "react";
import { formatTimeString } from "../shared/utils";
import { Row, Col, Card } from "reactstrap";
import ActionButton from "./ActionButtonComponent";
import "../css/CountdownTimer.css";

export default function CountdownTimerCard(props) {
  return (
    <>
      <Card body className="countdown-timer-container my-4">
        <Row>
          <Col className="text-center">
            <div>
              <h2>{props.timers.length ? props.timers[props.timerIndex].name : "Timers List"}</h2>
            </div>
            <div>
              <p>
                <span id="countdown-timer-numbers-big">
                  {formatTimeString(props.timeLeft)}
                </span>
              </p>
            </div>
            <Row className="mb-2 mx-auto">
              {props.isCountdownStarted ? (
                <>
                  <Col>
                    {props.isCountingDown ? (
                      <ActionButton
                        type="button"
                        onClick={props.stopTimer()}
                        className="me-2"
                      >
                        Stop
                      </ActionButton>
                    ) : (
                      <ActionButton
                        type="button"
                        onClick={props.resumeTimer()}
                        className="me-2"
                      >
                        Resume
                      </ActionButton>
                    )}
                  </Col>
                  <Col>
                    <ActionButton type="button" onClick={props.resetTimer()}>
                      Reset
                    </ActionButton>
                  </Col>
                </>
              ) : (
                <ActionButton
                  type="button"
                  variant="primary"
                  onClick={props.startTimer()}
                  disabled={!props.timers.length}
                >
                  Start
                </ActionButton>
              )}
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  );
}
