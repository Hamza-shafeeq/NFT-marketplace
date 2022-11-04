import "./App.css";
import HeroSection from "./HeroSection";
import CardsSection from "./CardsSection";
// import { TbArrowsLeftRight } from "react-icons/tb";
// import { FcMultipleCameras } from "react-icons/fc";
// import { BiWallet } from "react-icons/bi";
import vector from "./images/Vector.png";
import vector1 from "./images/Vector1.png";
import vector2 from "./images/Vector2.png";
import eth from "./images/eth.png";
import TextSection from "./TextSection";
import TextImageSection from "./TextImageSection";
import ti_img from "./images/img.png";
import TextImageSection2 from "./TextImageSection2";
import assets from "./images/assets.png";
import CardTextSection from "./CardTextSection";
// import Cards from "./Cards";
import NewsletterSection from "./NewsletterSection";
import FooterSection from "./FooterSection";
import React , {useState, useEffect , useRef} from 'react';
import { render } from "@testing-library/react";



function App() {
  const cards_data = [
    {
      card_icon: vector1,
      card_heading: "Trade Desk",
      card_text:
        "Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform",
      card_link: "Get Started",
    },
    {
      card_icon: vector,
      card_heading: "Elite ATMs",
      card_text:
        "We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto",
      card_link: "Find an ATM",
    },

    {
      card_icon: vector2,
      card_heading: "Elite Wallet",
      card_text:
        "Store your growing investments in our non-custodial wallet that gives you access to a full suite of DeFi services in one place",
      card_link: "Download the App",
    },
  ];

  function mainpage_cards() {
    const new_arr = [];
    for (let i = 0; i < cards_data.length; i++) {
      new_arr.push(<CardsSection data={cards_data[i]} />);
    }
    return new_arr;
  }

  const data = [
    {
      TS_img: eth,
      TS_heading: "A crypto NFT platform that rewards you for reading",
      TS_text:
        "We invest more resources than any other platrom in making sure great support from real people is a click away, whenever you need it.",
      TS_btn: "Get Started",
    },
    {
      TS_heading: "Buy and sell with the lowest fees in the industry",
      TS_text:
        "Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.",
      TS_btn: "Learn More",
    },
  ];

   l
  return (
    <>
      <div class="mainpage-container">

       
        <HeroSection />
        <div class="mainpage-cards-section">{mainpage_cards()}</div>
        <div class="mainpage-text-section">
          <TextSection data={data[0]} />
        </div>
        <div class="mainpage-text-image-section">
          <TextImageSection img={ti_img} />
        </div>
        <div class="mainpage-text-section">
          <TextSection data={data[1]} />
        </div>
        <div class="mainpage-text-image-section2">
          <TextImageSection2 img2={assets} />
        </div>
        <div class="mainpage-card-text-section">
          <CardTextSection />
        </div>
        <div class="mainpage-newsletter-section">
          <NewsletterSection />
        </div>
        <div class="mainpage-footer-section"> <FooterSection /></div>
      </div>
    </>
  );
}

export default App;
