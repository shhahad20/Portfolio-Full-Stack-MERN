import "../styles/contact2.scss";

const Contact2 = () => {
  return (
    <div className="contact">
      <div className="contact-lines-background">
        <div className="contact-line"></div>
        <div className="contact-line"></div>
        <div className="contact-line"></div>
        <div className="contact-line"></div>
      </div>
      <div className="contact-lines-background-ver">
        <div className="contact-line"></div>
        <div className="contact-line"></div>
        <div className="contact-line"></div>
        <div className="contact-line"></div>
      </div>
      <div className="contact-container">
        <div className="between-lines">
          <div>
            <h1 className="contact-header">Contact</h1>
          </div>
        </div>
        <div className="contact-icons">
          <a href="https://www.behance.net/shhahad20">
            <div className="icon-div">
              <img src={"/behanceIcon.svg"} className="behnace-icon" alt="behance-icon" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/shahadaltharwa/">
            <div className="icon-div">
              <img src={"/linkedinIcon.svg"} className="linkedin-icon" alt="linkedin-icon"/>
            </div>
          </a>
          <a href="https://github.com/shhahad20">
            <div className="icon-div">
              <img src={"/githubIcon.svg"} className="github-icon" alt="github-icon" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
