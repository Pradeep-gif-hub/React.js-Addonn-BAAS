import "./Pages.css";

const About = () => {
  return (
    <div className="page-container">
      <div className="card">
        <h1>About Me </h1>
        <p>
          Hi, I’m <b>Pradeep Awasthi</b>, an NIT Jalandhar student passionate about
          coding, hardware, and innovation. I love blending circuits and code — from
          Arduino to web apps!
        </p>
        <p>
          My journey includes projects with ISRO, Arduino Uno, Flask ML models,
          and interactive web development using React.
        </p>
        <button onClick={()=>window.open("http://github.com/pradeep-gif-hub","_blank")}  className="btn-primary">Know More</button>
      </div>
    </div>
  );
};

export default About;
