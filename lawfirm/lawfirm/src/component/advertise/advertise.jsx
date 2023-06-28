import "./advertise.css";
import logo from "../../assets/choose.svg";

export default function Advertise() {
  return (
    <>
      <div className="advertise">
        <div className="text1">Let's introduce ourself</div>
        <hr />
        <div className="typo">
          <span className="text2">Criminal lawyer</span>
          <span className="para">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </span>
        </div>
      </div>
      <div
        className="text1"
        style={{
          top: "1441px",
          textAlign: "center",
          width: "auto",
          left: "512px",
          position: "absolute",
        }}
      >
        Why Choose Us?
      </div>
      <div className="container">
        <div className="card">
          <img style={{height:"101px",width:"101px"}}src={logo} alt="logo" />
          <span className="info1">98% Sucess Rate</span>
          <span className="info2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </span>
          <div className="chooseButton">Read More</div>
        </div>
        <div className="card">
          <img style={{height:"101px",width:"101px"}}src={logo} alt="logo" />
          <span className="info1">100% Sucess Rate</span>
          <span className="info2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </span>
          <div className="chooseButton">Read More</div>
        </div>
        <div className="card">
          <img style={{height:"101px",width:"101px"}}src={logo} alt="logo" />
          <span className="info1">100% Sucess Rate</span>
          <span className="info2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </span>
          <div className="chooseButton">Read More</div>
        </div>
      </div>
    </>
  );
}
