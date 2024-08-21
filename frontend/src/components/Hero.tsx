import "../styles/hero.scss";

const Hero = () => {
  return (
    <div id="hero-section">
      <div id="left-hero">
        <h2>Growth Focused</h2>
        <p>
          A passionate person with a strong enthusiasm for building innovative
          and efficient software solutions. My journey began when I graduated
          with a bachelor’s degree in Software Engineering, and I've since been
          on a quest to develop cutting-edge software that transforms the way we
          live and work.I have a curious mind for learning and trying out new
          things, as well as, finding creative solutions!
        </p>
        <div id="languages-container">
          <div id="py-container">
            <img src="/python.svg" alt="python" id="python_image" />
            <h3 id="python-header">Python</h3>
          </div>
          <div id="java-container">
            <img src="/java.svg" alt="java" id="java_image" />
            <h3 id="java-header">Java</h3>
          </div>
          <div id="js-container">
            <img src="/javascript.svg" alt="js" id="js_image" />
            <h3 id="js-header">JavaScript</h3>
          </div>
        </div>

        <div id="about-btn">
          <a id="hero-button" href="#">
            Want to know more?
          </a>
        </div>
      </div>
      <div id="right-hero">
        {/* <video
          src="/vidnobg.MOV"
          type="video/mp4"
          width="520"
          height="540"
          autoplay
          loop
          onError={(e) => console.error('Error playing video:', e.nativeEvent)}
        /> */}
        {/* <Coding/> */}
      </div>
    </div>
  );
};

export default Hero;
