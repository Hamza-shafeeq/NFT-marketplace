import nft1 from "./images/nft1.png";
import "./Cards.css";
import {FaEthereum} from "react-icons/fa";
function Cards(props) {
  
  return (
    <>
      <div class="card-frame">
        <div class="card-image">
          <img src={props.img.imgPath} class="card-img"></img>
        </div>
        <div class="card-bottom-bar">
          <div class="card-name-text">
            <p>Super Influencers</p>
          </div>
          <div class ="card-lower-bar"> 
            <div class="card-id">
              <p>#1267</p>
            </div>
            <div class="card-price">
                <FaEthereum />
              <p>6.67</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
