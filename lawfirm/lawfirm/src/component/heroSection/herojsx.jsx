import "./hero.css";
import Model from "../../assets/model.png";
import emailLogo from "../../assets/email.svg"

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="firstLine">You don't have to </span>
          <span className="secondLine">fight them alone</span>
          <span className="para">
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </span>
          <div className="inputBox">
            <img className="email" src={emailLogo} alt="logo"/>
            <input type="text"placeholder="enter your email address"/>
            <div className="talkbutton">Let's Talk</div>
          </div>
        </div>
        <img
          
          src={Model}
          alt="model"
        />
      </div>
    </>
  );
}
