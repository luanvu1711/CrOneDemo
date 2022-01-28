import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const HeaderSection = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #fff;
`

const LogoSection = styled.div`
  width: 85%;
  margin: 1.5em 0;
  img {
    width: 200px;
  }

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    aling-items: center;
    width: 100%;
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
