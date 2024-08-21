import { useDispatch, useSelector } from "react-redux";
import "../styles/education.scss";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchEducationData } from "../redux/slices/edcuationSlice";

const Education = () => {
  const { _education, isLoading, error } = useSelector((state: RootState) => state.educationReducer);
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    const fetchEducation = async () => {
      try {
        await dispatch(fetchEducationData())
      } catch (error) {
        console.log(error)
      }
    }
    fetchEducation()
  }, [dispatch])

  return (
    <div className="education">
      <div className="between-lines">
      <div>
      <h1 className="education-header">Education</h1>
      </div>
      </div>
      <h1 className="second-header">Education and Training:<br></br> Building My Knowledge Foundation</h1>
      <div className="container">
        <div className="cards">

          {isLoading && <p>Loading education data...</p>}
          {error && <p>Error: {error}</p>}
          {!isLoading && !error && _education.length > -1 && _education.map((ed)=>{
           const { title, school, description, date, _id } = ed;
           return(
            <div className="card card-one" key={_id}>
            <h2 className="card-title">{title}</h2>
            <p className="date">
              <span className="card-span">{school}</span> {date}
            </p>
            <p className="description">{description}</p>
          </div>
           ) 
          })}
          {/* <div className="card card-one">
            <h2 className="card-title">Bachelor of Software Engineering</h2>
            <p className="date">
              <span className="card-span">University of Hail</span> 2018 - 2023
            </p>
            <p className="description">Major in Computer Science</p>
          </div> */}

          {/* <div className="card card-two">
            <h2 className="card-title">Software Development</h2>
            <p className="date">
              <span className="card-span">
                Saudi Digital Academy x Integrify
              </span>{" "}
              Sep 2023 - Dec 2023
            </p>
            <p className="description">Software Development Bootcamp, MERN.</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Education;
