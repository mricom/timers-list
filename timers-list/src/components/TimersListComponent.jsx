import React, { useEffect, useState } from "react";
import SingleTimerComponent from "./SingleTimerComponent";
import TimerForm from "./TimerFormComponent";
import { Button } from "reactstrap";
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
  const isModalOpen = useSelector(
    (state) => state.timerModal.isOpen
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
      {timers.map((timer, index) => (
        <SingleTimerComponent
          timer={timer}
          index={index}
          key={index}
          toggleModal={() => toggleTimerModal(false, index)}
        />
      ))}
      <hr></hr>
      <Button onClick={() => toggleTimerModal(true)}>+ Add new timer</Button>
      <TimerForm
        isCreationModal={isCreationModal}
        toggle={toggleTimerModal}
        isOpen={isModalOpen}
      />
    </>
  );
}
