import ButtonBlack from "./ButtonBlack";
import "./TextImageSection.css";

function TextImageSection(props) {
  return (
    <>
      <div class="TextImageSection-container">
        <div class="TextImageSection-image">
          <div class="tis-img">
            <img src={props.img} class="ti-img"></img>
          </div>
        </div>
        <div class="TextImageSection-text">
          <div class="tis-text">
            <h2 class="ti-heading">
              24/7 access to full service customer support
            </h2>
            <p class="ti-text">
              We invest more resources than any other platform in making sure
              great support from real people is a click away, whenever you need
              it.
            </p>

            <ButtonBlack text="Get Started" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TextImageSection;
