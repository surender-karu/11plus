import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import {
    // Container,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem

} from 'reactstrap';

class EPNavigation extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            collapsed: true
        }
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <Navbar color="dark" dark expand="md">
                {/* <Container> */}
                <NavbarBrand className="mr-auto" tag={Link} to="/home">
                    <h3>
                        {" "}<FontAwesomeIcon icon={faGraduationCap} />{" 11PlusGuru"}
                        {/* <img src={process.env.PUBLIC_URL + "/logo.png"} alt="11Plus" height="80" /> */}
                    </h3>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar className="ml-sm-auto">
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Exams
                                </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag={Link} to="/mockexams/" activeclassname="active">
                                    Mock Exams
                                    </DropdownItem>
                                <DropdownItem tag={Link} to="/onlinetest/" activeclassname="active">
                                    Online Test
                                    </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag={Link} to="/results/" activeclassname="active">
                                    Results
                                    </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink tag={Link} to="/epshop/" activeclassname="active">11Plus Shop</NavLink>
                        </NavItem>                            <NavItem>
                            <NavLink tag={Link} to="/freeresources/" activeclassname="active">Free
                                    Resources</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/tution/" activeclassname="active">11 Plus Tution</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/contactus/" activeclassname="active">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                {/* </Container> */}
            </Navbar>
        )
    }
}

export default EPNavigation