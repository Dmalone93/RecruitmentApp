import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import '../../css/FooterContainer.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div className="footer">
      <hr />
      <Nav>
      <NavItem>
      <NavLink href="https://github.com/Dmalone93/RecruitmentApp" target="_blank">GitHub</NavLink>
      </NavItem>
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle nav caret>
      Contributors GitHub
      </DropdownToggle>
      <DropdownMenu direction="left">
      <DropdownItem href="https://github.com/Dmalone93" target="_blank">Declan Malone</DropdownItem>
      <DropdownItem divider />
      <DropdownItem href="https://github.com/fraser182" target="_blank">Fraser Ross</DropdownItem>
      </DropdownMenu>
      </Dropdown>

      </Nav>

      </div>
    );
  }
}
