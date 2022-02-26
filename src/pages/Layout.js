import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Outlet } from "react-router-dom";
import '../App.css';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn
} from './NavBar';

function Layout({ signOut, user }) {
  return (
    <>
      <h1 className='apph12'>Aquaculture Management Software</h1>
      <Nav>
        <Bars />

        <NavMenu>
        <NavBtn>
            Hi! {user.username}
          </NavBtn>
          <NavBtn></NavBtn>
          <NavBtn></NavBtn>
          <NavBtn></NavBtn>
          <NavBtn></NavBtn>
          <NavLink to='/ponds'>
            Ponds
          </NavLink>
          <NavLink to='/'>
            Feed Time
          </NavLink>
          <NavLink to='/expenses'>
            Expenses
          </NavLink>
          <NavLink to='/income'>
            Income
          </NavLink>
          <NavLink to='/test'>
            Test
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
