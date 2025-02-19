import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanyog Mahajan </span>
            from <span className="purple"> Pune, India.</span>
            <br /> I have completed Bachelors of Engineering
            in Information Technology from D. Y. Patil College of Engineering Akurdi, Pune. in may 2024
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> UI/UX Desinging
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            {/* "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */} 
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
