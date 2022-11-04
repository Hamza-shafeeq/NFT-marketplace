import ButtonBlack from "./ButtonBlack";
import ButtonGradient from "./ButtonGradient";
import "./HeroSection.css";
import elie from "./images/elie book.png";
import Cards from "./Cards";
import nft1 from "./images/nft1.png";
import nft2 from "./images/nft2.png";
import nft3 from "./images/nft3.png";
import nft4 from "./images/nft4.png";



export const NFTCards = (number)=> {
  const imgs = [
    { id: 1, imgPath: nft1, imgText: "NFT" },
    { id: 2, imgPath: nft2, imgText: "NFT" },
    { id: 3, imgPath: nft3, imgText: "NFT" },
    { id: 4, imgPath: nft4, imgText: "NFT" },
  ];
  const new_arr =[]
  if(number){
    imgs.length = number;
  }

  for(let i =0; i<imgs.length; i++){ 
   new_arr.push(<Cards img={imgs[i]} />)
    
  }
  return new_arr
  
}

function HeroSection() {
  return (
    <>
      <div class="hero-container">
        <div class="hero-navbar">
          <div class="hero-logo">
            <img src={elie} alt="book" class="hero-navbar-logo"></img>
          </div>
          <ul>
            <li class="hero-navbar-links">
              <a href="" class="hero-navbar-link">
                Buy / Sell
              </a>
            </li>
            <li class="hero-navbar-links">
              <a href="" class="hero-navbar-link">
                Grow
              </a>
            </li>
            <li class="hero-navbar-links">
              <a href="" class="hero-navbar-link">
                Markets
              </a>
            </li>
            <li class="hero-navbar-links">
              <a href="" class="hero-navbar-link">
                Business
              </a>
            </li>
            <li class="hero-navbar-links">
              <a href="" class="hero-navbar-link">
                Support
              </a>
            </li>
          </ul>
          <div class="hero-btns">
            <ButtonBlack text="SignIn" />
            <ButtonGradient text="SignUp" />
          </div>
        </div>

        <div class="hero-section">
          <div class="hero-text-section">
            <div class="hero-text-heading-div">
              <p class="hero-text-heading">
                {" "}
                Make Learning <br />
                Rewarding & Simple
              </p>
            </div>
            <div class="hero-text-div">
              <p class="hero-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                mattis in ipsum <br /> pharetra ultricies pharetra vel tempor.{" "}
              </p>
            </div>
            <div class="text-btns">
              <div class="hero-text-btns">
                <ButtonGradient text="Get Started" />
                <ButtonBlack text="Learn More" />
              </div>
            </div>
          </div>

          <div class="hero-cards-section">
            <div class="hero-cards">
              {NFTCards()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
