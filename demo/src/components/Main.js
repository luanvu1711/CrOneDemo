import React from 'react';
import styled from 'styled-components';
import image from '../assets/pexels-andrea-piacquadio-920382 (1).jpg';
const MainSection = styled.section`
  width: 100%;
  background-color: #f7f7f7;
  height: 80vh;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  position: relative;
`
const MainContent = styled.div`
  width: 85%;
`

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top:15%;
  left: 15%;
  color: #076191;
  width: 50%;
  font-family: "Open Sans", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    max-width: 80%;
  }

  h3{
    max-width:80%;
    font-size: 2rem;
  }
`

const MainRate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1.5em 0;
  h1 {
    font-size: 4rem;
  }
  
  p{
    margin-left: 1em;
  }

  p:nth-child(2) {
    border-right: 1px solid #076191;
    padding-right: 1em;
  }
  p:nth-child(3) {
    max-width: 20%;
    margin-left: 2em;
  }
`

// const MainRateColumn = styled.div`
//   margin-left: 1em;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
// `

const MainImage = styled.img`
  width: 70%;
  object-fit: cover;
  mask-image: linear-gradient(270deg,#f7f7f7,transparent);
`
MainImage.defaultProps = {
  src: `${image}`
}
function Main() {
  return <div>
      <MainSection>
        <MainContent>
          <MainText>
            <h1>Consolidate Your Debt With A Lower Rate</h1>
            <MainRate>
              <h1>XX.XX%</h1>
              {/* <MainRateColumn> */}
              <p><strong>Promotional APR</strong><br/> now through<br/> <strong>XX/XX/XXXX</strong></p>
              <p>A <strong>XX.XX% variable APR</strong> <br/>will apply after the promotional period*</p>
              {/* </MainRateColumn> */}
            </MainRate>
            <h3>Manage life's expenses by trnasfering a balance to your Credit One Bank account today</h3>
          </MainText>
        </MainContent>
        <MainImage />
        {/* <img src={image}/> */}
      </MainSection>
  </div>;
}
export default Main;
