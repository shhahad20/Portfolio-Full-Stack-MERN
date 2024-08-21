import React, { useRef, useState, useEffect } from "react";
import "../styles/about.scss";

interface Paragraphs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

const About = () => {

  const paragraphs: Paragraphs = {
    "Software Engineering": useRef<HTMLDivElement>(null),
    "Full-Stack": useRef<HTMLDivElement>(null),
    "Graphic Design": useRef<HTMLDivElement>(null),
    "Teaching Assistant": useRef<HTMLDivElement>(null),
  };

  const [highlighted, setHighlighted] = useState<string | number>("");
  useEffect(() => {
    if (highlighted) {
      const timer = setTimeout(() => {
        setHighlighted("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [highlighted]);

  const scrollToParagraph = (keyword: keyof typeof paragraphs) => {
    if (paragraphs[keyword]?.current) {
      paragraphs[keyword].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest" 
      });
      setHighlighted(keyword);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    document.documentElement.style.setProperty("--mouse-x", `${e.pageX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${e.pageY}px`);
  };

  const handleMouseEnter = (e:MouseEvent) => {
    const target = e.target as HTMLElement;
    const fs = getComputedStyle(target).getPropertyValue("font-size");
    const lh = getComputedStyle(target).getPropertyValue("line-height");
    document.documentElement.style.setProperty(
      "--cursor-height",
      `calc( ${fs} + (${lh}/4) )`
    );
  };
  // useEffect(() => {
  //   document.body.addEventListener("mousemove", handleMouseMove);
  //   document.body.querySelectorAll(".highlightable > *").forEach((el) => {
  //     el.addEventListener("mouseenter", handleMouseEnter);
  //   });

  //   return () => {
  //     document.body.removeEventListener("mousemove", handleMouseMove);
  //     document.body.querySelectorAll(".highlightable > *").forEach((el) => {
  //       el.removeEventListener("mouseenter", handleMouseEnter);
  //     });
  //   };
  // }, []); 
  useEffect(() => {
    document.body.addEventListener("mousemove", handleMouseMove);
    const highlightableElements = document.body.querySelectorAll(".highlightable > *") as NodeListOf<HTMLElement>;

    highlightableElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
    });

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      highlightableElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
      });
    };
  }, []);

  return (
    <div id="about-section">
      <div id="about-paragraph">
        <div className="between-lines">
          <div>
            <h1 className="about-me-header">About Me</h1>
          </div>
        </div>
        <h1 className="second-header">Shahad Altharwa <br /> Behind the Code</h1>
        <div id="keywords-container">
          {Object.keys(paragraphs).map((keyword) => (
            <a
              key={keyword}
              onClick={() => scrollToParagraph(keyword as keyof typeof paragraphs)}
              className={highlighted === keyword ? "active" : ""}
            >
              {keyword}
            </a>
          ))}
        </div>
        <p
          ref={paragraphs["Full-Stack"]}
          className={highlighted === "Full-Stack" ? "highlighted" : ""}
        >
          Over the year, I've gathered diverse experiences in software development. I started as a front-end developer, crafting intuitive user interfaces with HTML, CSS, and JavaScript. I then transitioned into backend development, utilizing technologies like Python to build robust server-side applications. Along the way, I've mastered database management, API integration, and the art of debugging.
        </p>
        <p
          ref={paragraphs["Software Engineering"]}
          className={highlighted === "Software Engineering" ? "highlighted" : ""}
        >
          As a Software Engineer, my strengths include a deep understanding of software architecture, algorithm design, and problem-solving. I excel in multiple programming languages and frameworks and have a knack for optimizing code for performance and reliability. I’m dedicated to keeping up with the ever-evolving tech landscape and staying adaptable in the face of change.
        </p>
        <p
          ref={paragraphs["Graphic Design"]}
          className={highlighted === "Graphic Design" ? "highlighted" : ""}
        >
          In addition to my software development expertise, I worked as a freelance Graphic Designer for over five years, completing more than 200 projects. This extensive experience in delivering high-quality visual solutions has honed my skills in visual design and user experience, enabling me to create engaging and user-centric digital products.
        </p>
        <p
          ref={paragraphs["Teaching Assistant"]}
          className={highlighted === "Teaching Assistant" ? "highlighted" : ""}
        >
          Currently, I'm a Teaching Assistant at the University of Hail, where I teach Java and data structures, guiding the next generation of developers in mastering fundamental programming concepts and efficient coding practices.
        </p>
        <p>
          Looking ahead, I'm determined to keep pushing the boundaries of what's possible in the realm of software engineering. I aspire to specialize as a full-stack developer and explore data science to create intelligent and scalable software. My goal is to contribute to projects that revolutionize industries and improve people's lives.
        </p>
      </div>
    </div>
  );
};

export default About;
