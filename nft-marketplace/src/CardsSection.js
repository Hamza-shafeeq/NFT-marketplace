import { TbArrowsLeftRight } from "react-icons/tb";
import "./CardsSection.css";
import { FaArrowRight } from "react-icons/fa";

function CardsSection(props) {
  return (
    <>
      <div class="cardsSection-container">
        <div class="cardsSection-Card">
          <div class="cardsSection-icon">
            {/* <TbArrowsLeftRight  class= "cs-icon" /> */}
            <img src={props.data.card_icon} class ="cs-icon"/>
          </div>
          <div class="cardsSection-heading">
            <h2 class="cs-heading">{props.data.card_heading}</h2>
          </div>
          <div class="cardsSection-text">
            <p class="cs-text">
              {props.data.card_text}
            </p>
          </div>
          <div class="cardsSection-link">
            <a href="https://google.com" class="cs-link">
              <span>{props.data.card_link} </span>
              <FaArrowRight class="cs-link-icon" />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsSection;
