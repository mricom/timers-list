import React from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";

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
        <Navbar color="light" className="mb-5" light expand="md">
          <Container>
            <NavbarBrand href="/">TimersList</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}