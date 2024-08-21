import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/timeline.scss";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperienceData } from "../redux/slices/experienceSlice";
import { ExperienceDispatch } from "../types/slicesTypes";

const Timeline: React.FC = () => {
  const containerRef = useRef(null);
  const { _experiences, isLoading, error } = useSelector((state: RootState) => state.experienceReducer);

  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    const fetchExperience = async () => {
      try {
        await dispatch(fetchExperienceData())
      } catch (error) {
        console.log(error)
      }
    }
    fetchExperience()
  }, [dispatch])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 190%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    tl.fromTo(
      ".fade-in-item",
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
      }
    );

    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.pageX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.pageY}px`);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const fs = getComputedStyle(target).getPropertyValue("font-size");
      const lh = getComputedStyle(target).getPropertyValue("line-height");
      document.documentElement.style.setProperty(
        "--cursor-height",
        `calc( ${fs} + (${lh}/4) )`
      );
    };

  //   document.body.addEventListener("mousemove", handleMouseMove);
  //   document.body.querySelectorAll(".highlightable > *").forEach((el) => {
  //     el.addEventListener("mouseenter", handleMouseEnter);
  //   });

  //   return () => {
  //     tl.kill();
  //     document.body.removeEventListener("mousemove", handleMouseMove);
  //     document.body.querySelectorAll(".highlightable > *").forEach((el) => {
  //       el.removeEventListener("mouseenter", handleMouseEnter);
  //     });
  //   };
  // }, []);
  document.body.addEventListener("mousemove", handleMouseMove);
  const highlightableElements = document.body.querySelectorAll(".highlightable > *") as NodeListOf<HTMLElement>;

  highlightableElements.forEach((el) => {
    el.addEventListener("mouseenter", handleMouseEnter);
  });

  return () => {
    tl.kill();
    document.body.removeEventListener("mousemove", handleMouseMove);
    highlightableElements.forEach((el) => {
      el.removeEventListener("mouseenter", handleMouseEnter);
    });
  };
}, []);

  return (
    <div className="fade-in-container">
      <div className="between-lines">
      <div>
      <h1 className="experience-header">Work Experience</h1>
      </div>
      </div>
      {isLoading && <p>Loading experience data...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && _experiences.length > -1 && _experiences.map((exper) => {
        const { title, company, description, date, _id } = exper;
        return (
          <div className="fade-in-item" ref={containerRef} key={_id}>
            <h2>{title}</h2>
            <p className="company">
              {company} <span>{date}</span>
            </p>
            <p>{description}</p>
          </div>
        );
      })}
          {/* <div className="fade-in-item" ref={containerRef} key={exper._id}>
          <h2>Teaching Assistant</h2>
          <p className="company">
            University of Hail UOH <span>2024 – Present</span>
          </p>
          <p>
            - Assisted the lead instructor in preparing course materials,
            including lecture labs, assignments, and exams. <br /> - Graded
            assignments and provided constructive feedback to students to help
            them improve their programming skills.
            <br /> - Mentored and guided a diverse group of over 100 students,
            both in class and during office hours.
          </p>
        </div> */}
      {/* <div className="fade-in-item" ref={containerRef}>
        <h2>Graphic Designer – Freelance</h2>
        <p className="company">
          Home sweet home ;) <span>2018 – Present</span>
        </p>
        <p>
          - Executed 250+ projects including logo, magazine, brochure, company
          profile, social media designs and some web design using different
          tools: Adobe Photoshop, Adobe Illustrator, InDesign, Adobe XD
          <br />
        </p>
      </div> */}
      {/* <div className="fade-in-item" ref={containerRef}>
        <h2>Technology Ambassador</h2>
        <p className="company">
          Ministry of Communication and Information Technology MCIT{" "}
          <span>2021 – 2023</span>
        </p>
        <p>
          - Designed responsive and user-friendly interfaces for websites and
          web applications, mastering HTML, CSS, and JavaScript with a focus on
          optimizing web performance through lazy loading, etc. <br /> -
          Prioritized website accessibility with standards and semantic HTML.
          <br /> - Explored blockchain technology, delving into its
          decentralized and distributed ledger system applications beyond
          cryptocurrencies like Bitcoin. Completed a beginner-level Python
          course using Jupyter Notebooks.
        </p>
      </div> */}
      {/* <div className="fade-in-item" ref={containerRef}>
        <h2>Software Engineer– COOP</h2>
        <p className="company">
          GAFCO – Gulf Air Filters Factory Company<span>2022</span>
        </p>
        <p>
          - Contributed to a project transforming web design into ERP design.{" "}
          <br /> - Collaborated with a team of 5 members via Discord, gaining
          valuable insights from senior developers.
          <br />
        </p>
      </div> */}
    </div>
  );
};

export default Timeline;
