import React from 'react';
import {
  Nav,
  HashLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav sticky= "top">
        <HashLink smooth to='/'>
          <img alt='logo' />
        </HashLink>
        <Bars />
        <NavMenu>
          <HashLink smooth to='#categories' activeStyle>
            Start Browsing
          </HashLink>
          <HashLink smooth to='#guide' activeStyle>
            Guide
          </HashLink>
          <HashLink smooth to='#about' activeStyle>
            About Us
          </HashLink>
          <HashLink smooth to='#sign-up' activeStyle>
            Sign Up
          </HashLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
