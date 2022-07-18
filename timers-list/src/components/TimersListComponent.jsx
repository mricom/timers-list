import React, { useEffect, useState } from "react";
import SingleTimerComponent from "./SingleTimerComponent";
import TimerForm from "./TimerFormComponent";
import { Button, ListGroup } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  closeTimerModal,
  setTimerModalCreate,
  setTimerModalUpdate,
} from "../redux/actions";

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
      <Button onClick={() => toggleTimerModal(true)}>+ Add new timer</Button>
      <TimerForm
        isCreationModal={isCreationModal}
        toggle={toggleTimerModal}
        isOpen={isModalOpen}
        updatingTimer={timers[updatingTimerIndex]}
        updatingTimerIndex={updatingTimerIndex}
      />
      <hr></hr>

      <ListGroup flush>
        {timers.map((timer, index) => (
          <SingleTimerComponent
            timer={timer}
            index={index}
            key={index}
            toggleModal={() => toggleTimerModal(false, index)}
          />
        ))}
      </ListGroup>
    </>
  );
}
