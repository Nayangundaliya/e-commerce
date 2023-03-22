import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

const Header = () => {
  return (
      <MainHeader>
          <NavLink to='/'>
              <img className='logo' src="./Img/logo1.png" alt="logo" />
              {/* <h2>Shopping</h2> */}
          </NavLink>
          <Navbar/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color:${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items:center;
    position:relative;

    .logo {
        height: 10rem;
    }
`

export default Header
