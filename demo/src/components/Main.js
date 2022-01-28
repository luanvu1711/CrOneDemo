import React from "react";
import "../style/Main.css";
import styled from "styled-components";
import image from "../assets/pexels-andrea-piacquadio-920382 (1).jpg";

function Main({ handleClick }) {
  return (
    <section class="main__section">
      <div className="main__content">
        <div className="main__text">
          <h1>Consolidate Your Debt With A Lower&nbsp;Rate</h1>
          <div className="main__rate">
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
          </div>
          <h3>
            Manage life's expenses by transfering a balance to your Credit One
            Bank account today
          </h3>
          <div className="main__button">
            <button onClick={handleClick}>Accept Now</button>
            <a href="https://www.creditonebank.com/" target="_blank">
              No Thanks
            </a>
          </div>
          <p>A fee may apply.</p>
          <p>
            *See the 'Disclosures and Terms & Conditions'
            <br /> on the application page by selecting the 'Accept Now' button.
          </p>
        </div>
      </div>
      <img className="main__image" src={image} />
    </section>
  );
}
export default Main;
