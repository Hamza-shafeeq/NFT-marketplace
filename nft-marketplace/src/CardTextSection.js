import ButtonGradient from "./ButtonGradient";
import "./CardTextSection.css";
import HeroSection from "./HeroSection";
import { NFTCards } from "./HeroSection";
function CardTextSection() {
  return (
    <>
      <div class="cts-container">
        <div class="CardTextSection-container">
          <div class="CardTextSection-text">
            <div class="cts-text">
              <h2 class="ct-heading">
                Take your first step into safe, secure NFT investing
              </h2>
              <p class="ct-text">
                Separated they live in Bookmarks right at the coast of the
                famous Semantics, large language ocean Separated they live in
                Bookmarks right at the coast.
              </p>
              <ButtonGradient text="Get Started" />
            </div>
          </div>

          <div class="CardTextSection-cards">
            <div class="ct-cards">{NFTCards(3)}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardTextSection;
