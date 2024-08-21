import { useDispatch, useSelector } from "react-redux";
import "../styles/summary.scss";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchSkillData } from "../redux/slices/skillsSlice";

const Summary = () => {

    const { _skills, isLoading, error } = useSelector((state: RootState) => state.skillReducer);
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
      const fetchSkill = async () => {
        try {
          await dispatch(fetchSkillData())
        } catch (error) {
          console.log(error)
        }
      }
      fetchSkill()
    }, [dispatch])

  return (
    <div id="summary">
        <div id="summary-container">
        <div className="between-lines">
        <div>
        <h1 id="summ-header">A Quick Grasp of Key Information</h1>
        </div>
        </div>
            <div className="sum-content">

            {isLoading && <p>Loading education data...</p>}
          {error && <p>Error: {error}</p>}
          {!isLoading && !error && _skills.length > -1 && _skills.map((skill)=>{
           const { title, description, _id, image } = skill;
           return(
            <div className="container" key={_id}>
            <img src={skill.image as string} alt=''/>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
           ) 
          })}

            {/* <div className="container">
            <img src='/people.svg' alt='people' id='people_image'/>
                <h2>90+ Clients</h2>
                <p>120+ Students</p>
            </div>

            <div className="container">
            <img src='/folder.svg' alt='folder' id='folder_image'/>
                <h2>150+ Project</h2>
                <p>Graphic Design & UI / UX</p>
            </div>

            <div className="container">
            <img src='/repo.svg' alt='repo' id='repo_image'/>
                <h2>40+</h2>
                <p>GitHub Repositories</p>
            </div>
            <div className="container">
            <img src='/code.svg' alt='code' id='code_image'/>
                <h2>3 Languages</h2>
                <p>Prgramming Languages</p>
            </div> */}

            </div>
        </div>
    </div>
  );
};

export default Summary;
