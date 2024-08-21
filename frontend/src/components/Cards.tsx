import { useEffect } from "react";
import HeroHeading from "./HeroHeading";
import "../styles/cards.scss";

const Cards = () => {
  useEffect(()=>{
    const headHeadElement = document.querySelector('.head-head');

    const showHeadHead =()=>{
      // headHeadElement.classList.add('visible');
      if (headHeadElement) {
        headHeadElement.classList.add('visible');
      }
    };
    setTimeout(showHeadHead,100);
    
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry =>{
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    });
    if(headHeadElement){
      observer.observe(headHeadElement);
    }
    return()=>{
      observer.disconnect();
    };
  },[]);
  return (
    <div className="background">
        <div className="spotlight">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="lines-background">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="lines-background-ver">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="content">
      <HeroHeading/>
      <h2 className="head-head">Growth Focused</h2>
        <p className="para">
          A passionate person with a strong enthusiasm for building innovative
          and efficient software solutions.
        </p>
        <a href="#about-section" className="more-about-button">More About</a>
        </div>
    </div>
  );
};

export default Cards;
