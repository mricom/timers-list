import React from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";
import "../css/CustomNavbar.css";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar className="custom-navbar" light expand="md">
          <Container className="main-container">
            <NavbarBrand href="/">Timers List</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}
