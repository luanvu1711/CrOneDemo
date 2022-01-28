import React from "react";
import styled from "styled-components";
import image from "../assets/pexels-andrea-piacquadio-920382 (1).jpg";
const MainSection = styled.section`
  width: 100%;
  background-color: #f7f7f7;
  height: 78vh;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const MainContent = styled.div`
  width: 100%;
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index:1;
  top:15%;
  left: 15%;
  color: #076191;
  width: 50%;
  font-family: "Open Sans", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    max-width: 70%;
  }

  h3{
    max-width:80%;
    font-size: 2rem;
  }
  p {
    margin: 0.5em 0 0 2.5em;
  }
  p:nth-child(5) {
    margin-top: 1.5em;
  }
  p:nth-child(6){
    color: #9b9b9b;
    margin: 5rem 0 0 0;
    font-size: 1.1rem;
  }

  @media (max-width: 1440px) {
    width: 65%;
    top:10%;
    height: 100vh;
    h1 {
      font-size: 3rem;
    } 
    h3{
      font-size: 1.5rem;
    }
    p:nth-child(6){
      margin: 1rem 0 0 0;
    }

    @media (max-width: 800px) {
      padding: 0 2em;
      width: 100%;
      top:45%;
      left: 0;
      justify-content: center;
      align-items: center;
      h1 {
        text-align: center;
        font-size: 1.6rem;
      }
    
      h3{
        max-width:100%;
        font-size: 1.3rem;
        text-align: center;
      }
      p{
        margin: 0;
      }
      p:nth-child(5) {
        margin-top: 1.5em;
      }
      p:nth-child(6){
        margin: 1.5rem 0 0 0;
        font-size: 1rem;
        text-align: center;
      }
      }
    }

    @media (max-width: 500px) {
      top: 25%;
      padding: 0 1em;
    }
  }
`;

const MainRate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1.5em 0;
  h1 {
    font-size: 4rem;
  }

  p:nth-child(2) {
    border-right: 1px solid #076191;
    padding-right: 1em;
    line-height: 1.4;
  }
  p:nth-child(3) {
    max-width: 25%;
    line-height: 1.4;
    padding-top: 1em;
  }

  @media (max-width: 800px) {
    justfiy-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1em 0;
    h1 {
      font-size: 3.5rem;
    }
    p:nth-child(2) {
      border-right: none;
      border-bottom: 1px solid #076191;
      padding-right: 0;
      padding-bottom: 1em;
      text-align: center;
    }
    p:nth-child(3) {
      max-width: 100%;
      text-align: center;
    }
  }
`;
const MainButton = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;

  button {
    border: none;
    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
    color: rgb(255, 255, 255);
    font-size: 1.3rem;
    font-weight: 400;
    font-style: normal;
    background-color: rgb(255, 144, 0);
    cursor: pointer;
    padding: 14px 32px;
    border-radius: 5px;
    margin-right: 2em;
  }

  a {
    border: none;
    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
    color: #000000;
    font-size: 1.3rem;
    font-weight: 400;
    font-style: normal;
    background-color: #dedede;
    cursor: pointer;
    padding: 14px 32px;
    border-radius: 5px;
    text-decoration: none;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      margin-right: 0;
      margin-bottom: 1em;
      box-shadow: none;
      border: 1px solid #B26500;
    }

    a {
      box-shadow: none;
      border: 1px solid #8C8C8C;
    }
  }
`;
const MainImage = styled.img`
  width: 70%;
  object-fit: cover;
  mask-image: linear-gradient(270deg, #fff, transparent);

  @media (max-width: 800px) {
    width: 100%;
    mask-image: linear-gradient(180deg, #fff, transparent);
  }
`;
MainImage.defaultProps = {
  src: `${image}`,
};
function Main() {
  return (
    <div>
      <MainSection>
        <MainContent>
          <MainText>
            <h1>Consolidate Your Debt With A Lower&nbsp;Rate</h1>
            <MainRate>
              <h1>XX.XX%</h1>
              <p>
                <strong>Promotional APR</strong> <br />
                now through
                <br /> <strong>XX/XX/XXXX</strong>
              </p>
              <p>
                A <strong>XX.XX% variable APR</strong> <br />
                will apply after the promotional&nbsp;period*
              </p>
            </MainRate>
            <h3>
              Manage life's expenses by transfering a balance to your Credit One
              Bank account today
            </h3>
            <MainButton>
              <button>Accept Now</button>
              <a href="https://www.creditonebank.com/" target="_blank">
                No Thanks
              </a>
            </MainButton>
            <p>A fee may apply.</p>
            <p>
              *See the 'Disclosures and Terms & Conditions'
              <br /> on the application page by selecting the 'Accept Now'
              button.
            </p>
          </MainText>
        </MainContent>
        <MainImage />
      </MainSection>
    </div>
  );
}
export default Main;
