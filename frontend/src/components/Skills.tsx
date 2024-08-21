import "../styles/skills.scss";

const Skills = () => {
  return (
    <div id="skills">
      <div id="skills_container">
        <div className="skill1">
          <div className="content_container">
            {/* <div className="shape1_container">
              <img src="/Asset7.svg" alt="shape1" id="shape1" />
            </div> */}
            <h1>Teaching Assistant</h1>
            <p>University of Hail UOH</p>
            <p className="details">
              ● Assisted the lead instructor in preparing course materials,
              including lecture labs, assignments, and exams.
              <br />
              ● Gradedassignments and provided constructive feedback to students
              to help them improve their programming skills.
              <br />● Mentored and guided a diverse group of over 100 students,
              both in class and during office hours.
            </p>
          </div>
        </div>
        <div className="skill2">
          <div className="content_container">
            {/* <div className="shape2_container">
              <img src="/Asset8.svg" alt="shape2" id="shape2" />
            </div> */}
            <h1>Technology Ambassador</h1>
            <p>Ministry of Communication and Information Technology MCIT</p>
            <p className="details">
              ● Designed responsive and user-friendly interfaces for websites
              and web applications, mastering HTML, CSS, and JavaScript with a
              focus on optimizing web performance through lazy loading, etc.
              <br />
              ● Prioritized website accessibility with standards and semantic
              HTML.
              <br />● Explored blockchain technology, delving into its
              decentralized and distributed ledger system applications beyond
              cryptocurrencies like Bitcoin. Completed a beginner-level Python
              course using Jupyter Notebooks.
            </p>
          </div>
        </div>
        <div className="skill3">
          <div className="content_container">
            {/* <div className="shape3_container">
              <img src="/Asset10.svg" alt="shape3" id="shape3" />
            </div> */}
            <h1>Software Engineer</h1>
            <p>COOP - Gulf Air Filters Factory Company</p>
            <p className="details">
              ● Contributed to a project transforming web design into ERP
              design.
              <br />
              ● Collaborated with a team of 5 members via Discord, gaining
              valuable insights from senior developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
