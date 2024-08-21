import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { storyContent } from "../utils/storyContent";

import "../styles/story.scss";
import { storyContent } from "../utils/storyContent";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const sections = gsap.utils.toArray(".section")as HTMLElement[];
    sections.forEach((section, idx) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onEnter: () => handleScroll(idx),
        onEnterBack: () => handleScroll(idx),
      });
    });
  }, []);

  const handleScroll = (idx:number) => {
    setIndex(idx);
    const rightImg = document.querySelector(".right-img");
    const leftImg = document.querySelector(".left-img");
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff"]; // Example colors

    if (rightImg) {
      gsap.to(rightImg, { fill: colors[idx % colors.length], duration: 0.5 });
    }
    if (leftImg) {
      gsap.to(leftImg, { fill: colors[idx % colors.length], duration: 0.5 });
    }
  };

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % storyContent.sections.length);
  };

  const getImageProps = () => {
    switch (index) {
      case 0:
        return {
          src: "/Asset 6.svg",
          alt: "Yellow Circle",
          width: 150,
          // height: 1080,
        };
      case 1:
        return {
          src: "/circle2.svg",
          alt: "Yellow and blue Circle",
          width: 284,
          height: 284,
        };
      case 2:
        return {
          src: "/circle3.svg",
          alt: "Blue, Yellow and Orange Circle",
          width: 284,
          height: 284,
        };
      case 3:
        return {
          src: "/circle4.svg",
          alt: "Blue, Yellow, Orange and dark blue Circle",
          width: 382,
          height: 382 ,
        };
      case 4:
        return {
          src: "/circle5.svg",
          alt: "blurred Circle",
          width: 602 ,
          height: 602 ,
        };
      case 5:
        return {
          src: "/circle6.svg",
          alt: "blurred Circle with effect",
          width: 602 ,
          height: 602 ,
        };
      default:
        return {
          src: "/circle2.svg",
          alt: "Yellow Circle",
          width: "204",
          height: "204",
        };
    }
  };

  return (
    <div className="story">
    <div>
    <p className="date">{storyContent.sections[index].date}</p>
    <h1 className="header">{storyContent.sections[index].header}</h1>
    </div>
      <div className="circle">
      <img src="/Asset 3.svg" className="right-img" alt="Circle"/>
        <img
          src={getImageProps().src}
          className="circle-area"
          alt={getImageProps().alt}
          width={getImageProps().width}
          // height={getImageProps().height}
        />
        <img src="/Asset 4.svg" className="left-img" alt="image2"/>
      </div>
      <div>
      <p className="content">{storyContent.sections[index].content}</p>
      <div className="color">
        <div className="square"></div>
        <p className="color-def">{storyContent.sections[index].color_def}</p>
        <button onClick={handleClick}>Click me</button>
      </div>
      </div>

    </div>
  );
};

export default Story;
