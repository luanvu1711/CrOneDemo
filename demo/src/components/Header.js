import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const HeaderSection = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoSection = styled.div`
  width: 75%;
  margin: 1em 0;
  img {
    width: 200px;
  }
`
function Header() {
  return (
    <HeaderSection>
      <LogoSection>
        <img className="image" src={logo}/>    
      </LogoSection>
    </HeaderSection>
  )
}

export default Header;
