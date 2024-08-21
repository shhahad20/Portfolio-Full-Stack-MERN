// import { getProjects } from '../utils/api';
import '../styles/home.scss';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroHeading from '../components/HeroHeading';
import Hero from '../components/Hero';
import About from '../components/About';
import Summary from '../components/Summary';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Cards from '../components/Cards';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Story from '../components/Story';
import Footer from '../components/Footer';
import Contact2 from '../components/Contact2';
const HomePage = () => {
  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const projectData = await getProjects();
  //       setProjects(projectData);
  //     } catch (error) {
  //       console.error('Error fetching projects:', error);
  //     }
  //   };
  //   fetchProjects();
  // }, []);
  return (
    <div>
    {/* <Navbar /> */}
    <div id="first-section">
    {/* <HeroHeading /> */}
    <Cards/>
    {/* <Hero/> */}
    </div>
    <div className='include-cursor'>
    <About/>
    </div>
    <Education />
    <div>
    {/* <Skills/> */}
    <div className='include-cursor'>
    <Timeline/>
    </div>

    </div>
    <Summary/>
    {/* <Story/> */}
    <Contact2/>
    <Footer/>
    </div>
    
  );
};

export default HomePage;