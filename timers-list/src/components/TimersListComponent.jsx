import React from "react";
import SingleTimerComponent from "./SingleTimerComponent";
import TimerForm from "./TimerFormComponent";
import { Button, ListGroup, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  closeTimerModal,
  setTimerModalCreate,
  setTimerModalUpdate,
} from "../redux/actions";
import "../css/TimersList.css";

export default function TimersList(props) {
  const timers = useSelector((state) => state.timers);
  const dispatch = useDispatch();
  const isCreationModal = useSelector(
    (state) => state.timerModal.isCreationModal
  );
  const isModalOpen = useSelector((state) => state.timerModal.isOpen);
  const updatingTimerIndex = useSelector(
    (state) => state.timerModal.updatingTimerIndex
  );

  const toggleTimerModal = (create, timerIndex = null) => {
    if (isModalOpen) {
      dispatch(closeTimerModal());
    } else {
      if (create) {
        dispatch(setTimerModalCreate());
      } else {
        dispatch(setTimerModalUpdate({ timerIndex }));
      }
    }
  };

  return (
    <>
      <TimerForm
        isCreationModal={isCreationModal}
        toggle={toggleTimerModal}
        isOpen={isModalOpen}
        updatingTimer={timers[updatingTimerIndex]}
        updatingTimerIndex={updatingTimerIndex}
      />
      <hr></hr>
      {timers.length > 0 ? (
        <ListGroup>
          {timers.map((timer, index) => (
            <SingleTimerComponent
              timer={timer}
              index={index}
              key={index}
              toggleModal={() => toggleTimerModal(false, index)}
            />
          ))}
        </ListGroup>
      ) : (
        <></>
      )}
      <Row>
        <Col className="d-flex justify-content-center mb-2">
          <Button
            onClick={() => toggleTimerModal(true)}
            className="add-timer-button"
            block
          >
            <i class="fa-solid fa-circle-plus me-1"></i> Add new timer
          </Button>
        </Col>
      </Row>
    </>
  );
}
