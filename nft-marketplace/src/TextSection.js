import ButtonGradient from "./ButtonGradient";
import "./TextSection.css";

function TextSection(props) {
  return (
    <>
      <div class="TextSection-container">
        <div class="TextSection-image">
          <img src={props.data.TS_img} class="ts-img" />
        </div>
        <div class="TextSection-heading">
          <h2 class="ts-heading">
            {props.data.TS_heading}
          </h2>
        </div>
        <div class="TextSecton-text">
          <p class="ts-text">
           {props.data.TS_text}
          </p>
        </div>
        <div class="TextSection-btns">
          <ButtonGradient text={props.data.TS_btn} />
        </div>
      </div>
    </>
  );

    
}

export default TextSection;
