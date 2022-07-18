import React, { useState } from "react";
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ListGroupItemHeading,
  ListGroupItemText,
  ListGroupItem,
} from "reactstrap";
import { formatTime, formatTimeString } from "../shared/utils";
import { useDispatch } from "react-redux";
import { deleteTimer } from "../redux/actions";

export default function SingleTimerComponent(props) {
  const [optionsDropdownIsOpen, setOptionDropdownIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTimer({ timerIndex: props.index }));
  };

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
  };

  return (
    <>
      <ListGroupItem>
        <Row>
          <Col xs={11}>
            <ListGroupItemHeading tag={"h3"}>
              {formatTimeString(
                props.timer.hours,
                props.timer.minutes,
                props.timer.seconds
              )}
            </ListGroupItemHeading>
            <ListGroupItemText className="mb-0">{props.timer.name}</ListGroupItemText>
          </Col>
          <Col xs={1} className="d-flex align-items-center justify-content-center" >
            <Dropdown
              toggle={toggleDropdown}
              isOpen={optionsDropdownIsOpen}
              direction="left"
            >
              <DropdownToggle caret className="menu-dropdown-toggle-button">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={props.toggleModal}>Edit</DropdownItem>
                <DropdownItem onClick={handleDelete}>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </ListGroupItem>
    </>
  );
}
