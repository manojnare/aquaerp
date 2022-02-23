import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Outlet, Link } from "react-router-dom";
import '../App.css';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavBar';

function Layout({ signOut, user }) {
  return (
    <>
      <h1 className='apph1'>Welcome to Aquaculture Management Software</h1>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/ponds' activeStyle>
            Ponds
          </NavLink>
          <NavLink to='/Medicine' activeStyle>
            Medicine
          </NavLink>
          <NavLink to='/team' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
        </NavMenu>
        <NavBtn>
        <button className='btn btn-danger' onClick={signOut}>Sign out</button>
        
        </NavBtn>
      </Nav>

      <Outlet />
    </>
  )
};

export default withAuthenticator(Layout);
