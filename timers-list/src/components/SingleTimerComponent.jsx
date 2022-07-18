import React, { useState } from "react";
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { formatTime, formatTimeString } from "../shared/utils";
import { useDispatch } from "react-redux";
import { deleteTimer } from "../redux/actions";

export default function SingleTimerComponent(props) {
  const [optionsDropdownIsOpen, setOptionDropdownIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTimer({timerIndex: props.index}));
  }

  // const handleEdit = () => {
  //   let timers = JSON.parse(window.localStorage.getItem("timers"));
  //   timers[props.index] = {
  //     ...timers[props.index],
      
      
  //   };
  //   props.setTimers(timers);
  //   window.localStorage.setItem("timers", JSON.stringify(timers));
  // };

  const toggleDropdown = () => {
    setOptionDropdownIsOpen((prevState) => !prevState);
  }

  return (
    <>
    <Row>
      <Col xs={11}>
        <h3>{formatTimeString(props.timer.hours, props.timer.minutes, props.timer.seconds)}</h3>
        <p>{props.timer.name}</p>
      </Col>
      <Col xs={1}>
        <Dropdown toggle={toggleDropdown} isOpen={optionsDropdownIsOpen} direction="left">
          <DropdownToggle caret className="menu-dropdown-toggle-button"><i className="fa-solid fa-ellipsis-vertical"></i></DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => props.toggleModal(false)}>Edit</DropdownItem>
            <DropdownItem onClick={handleDelete}>Delete</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col>
    </Row>
    </>
  );
}
