import "./NewsletterSection.css";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

function NewsletterSection() {
  return (
    <>
      <div class="NewsletterSection-container">
        <div class="NewsletterSection-heading">
          <h2 class="nls-heading">Receive Transmissions</h2>
        </div>
        <div class="NewsletterSection-text">
          <p class="nls-text">
            Unsubscribe at any time.{" "}
            <a href="" class="nls-link">
              Privacy Policy
              <FiArrowUpRight />
            </a>
          </p>
        </div>
        <div class="NewsletterSection-input">
          <div class="nls-input">
            <input type="email" class="nls-email" placeholder="Email Address"></input> <FaArrowRight class="nls-icon"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsletterSection;
