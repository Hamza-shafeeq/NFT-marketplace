import "./FooterSection.css";
import logo from "./images/elie book.png";
import { FaArrowRight } from "react-icons/fa";

function FooterSection() {
  return (
    <>
      <div class="footer-section-logo-container">
        <div class="footer-section-logo">
          <img src={logo} class="footer-logo"></img>
        </div>
      </div>
      <div class="footer-section-container">
        <div class="footer-section-text">
          <div class="footer-text">
            <p class="fs-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              elit ipsum neque, donec justo viverra viverra ac. Nulla non massa,
              sed nibh proin dui nec, erat est. Placerat feugiat integer amet
              gravida. Quis diam suspendisse nulla dignissim malesuada eget
              purus turpis.
            </p>
            <div class="NewsletterSection-input">
              <div class="nls-input">
                <input
                  type="email"
                  class="nls-email"
                  placeholder="Email Address"
                ></input>{" "}
                <FaArrowRight class="nls-icon" />
              </div>
            </div>
            <div class="footer-section-copyrights">
              <p class="fs-copyrights">© 2021 Elite</p>
            </div>
          </div>
        </div>
        <div class="footer-section-links">
          <ul class="footer-links">
            <li class="fs-links">
              <h4 class="fs-links-heading">Company</h4>
            </li>
            <li class="fs-links">
              <a href="" class="fs-link">
                About
              </a>
            </li>
            <li class="fs-links">
              <a href="" class="fs-link">
                Careers
              </a>
            </li>
            <li class="fs-links">
              <a href="" class="fs-link">
                Press
              </a>
            </li>
            <li class="fs-links">
              <a href="" class="fs-link">
                News
              </a>
            </li>
            <li class="fs-links">
              <a href="" class="fs-link">
                Merch
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-section-policies">
          <ul class="footer-policies">
            <li class="fs-policies">
              <h4 class="fs-policy-heading">
                Privacy Policy and Terms of Service
              </h4>
            </li>
            <li class="fs-policies">
              <a href="" class="fs-policy">
                Elite Policy
              </a>
            </li>
            <li class="fs-policies">
              <a href="" class="fs-policy">
                Elite Biometric Privacy Policy
              </a>
            </li>
            <li class="fs-policies">
              <a href="" class="fs-policy">
                Elite Financial Privacy Notice
              </a>
            </li>
            <li class="fs-policies">
              <a href="" class="fs-policy">
                Elite Terms of Service
              </a>
            </li>
            <li class="fs-policies">
              <a href="" class="fs-policy">
                Elite Trade Desk Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FooterSection;
