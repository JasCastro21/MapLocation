import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

function Navbar() {
  return (
    <>

    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>MapLocation</NavLogo>
            <MobileIcon>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about">About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="discover">Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="services">Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="singup">Sing Up</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>


    </>
  )
}

export default Navbar
