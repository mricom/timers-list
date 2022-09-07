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
import { formatTimeString } from "../shared/utils";
import { useDispatch } from "react-redux";
import { deleteTimer } from "../redux/actions";
import "../css/SingleTimer.css";

export default function SingleTimerComponent(props) {
  const [optionsDropdownIsOpen, setOptionDropdownIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTimer({ timerIndex: props.index }));
  };

  const toggleDropdown = () => {
    setOptionDropdownIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <ListGroupItem>
        <Row>
          <Col xs={10} md={8}>
            <ListGroupItemHeading tag={"p"} className="single-timer-duration">
              {formatTimeString(props.timer.seconds)}
            </ListGroupItemHeading>
            <ListGroupItemText className="mb-0">
              {props.timer.name}
            </ListGroupItemText>
          </Col>
          <Col
            xs={2}
            md={4}
            className="d-flex align-items-center justify-content-end"
          >
            <Dropdown
              toggle={toggleDropdown}
              isOpen={optionsDropdownIsOpen}
              direction="left"
              className="d-md-none d-block"
              size="sm"
            >
              <DropdownToggle caret className="menu-dropdown-toggle-button">
                <i className="fa-solid fa-ellipsis-vertical fa-sm"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={props.toggleModal}>Edit</DropdownItem>
                <DropdownItem onClick={handleDelete}>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <div className="d-none d-md-block">
              <span onClick={props.toggleModal}>Edit</span>
              <span onClick={handleDelete}>Delete</span>
            </div>
          </Col>
        </Row>
      </ListGroupItem>
    </>
  );
}
