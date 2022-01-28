import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #000000;
  color: rgba(255, 255, 255, 0.7);
  padding: 2em 0;
  font-size: 1.2rem;

  @media (max-width: 800px) {
    position: absolute;
    bottom: -25em;
    padding: 1em;
  }

  @media (max-width: 500px) {
    bottom: -21em;
  }
`

const TextSection = styled.div`
  width: 85%;
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    aling-items: center;
    width: 100%;
  }
`
function Footer() {
  return <div>
    <FooterSection>
      <TextSection>
      <p>© 2019 Credit One Bank, N.A. All Rights Reserved. Member FDIC</p>
      </TextSection>
    </FooterSection>
  </div>;
}

export default Footer;
