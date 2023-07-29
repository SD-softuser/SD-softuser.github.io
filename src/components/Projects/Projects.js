import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import grabbit from "../../Assets/Projects/Grabbit.png";
import sambhva from "../../Assets/Projects/sambhav.png"; 
import resumeAnalyser from "../../Assets/Projects/resume-analyser.png";
import weatherapp from "../../Assets/Projects/weather-application.png";
import choicePredictor from "../../Assets/Projects/custormer-choice-predictor.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grabbit}
              isBlog={false}
              title="Grabbit"
              description="It is a Community platform made by students for the students. That ensures every opportunity meant for
              students should reach them at earliest. Now this platform has reached 1K+ Users."
              ghLink="https://github.com/GrabBits/GrabBits_Website"
              demoLink="https://grabbits.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sambhva}
              isBlog={false}
              title="Sambhav"
              description="It is a technical festival offering a diverse range of events and competitions focused on technology and
              innovation. It provides a platform for individuals to showcase their skills, learn from others, and foster creativity,
              teamwork, and problem-solving abilities."
              ghLink="https://github.com/SambhavDYPCOE/Website"
              demoLink="https://sambhav-dypcoe.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumeAnalyser}
              isBlog={false}
              title="Resume Analyser"
              description="It analyzes the resume, tells the category in which the resume lies, also compares the resume
              with the job description and predicts the profile match, it gives the proper visual representation of the results
              for better understanding and user experience. The objective of the project is to ease the task of the
              recruiter as well as students."
              ghLink="https://github.com/SD-softuser/Resume-Analyser"
              demoLink="https://resumenalyser.streamlit.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Live Weather Application"
              description="This project is a live weather application that shows the current weather conditions for any location in the world.
              The user can enter a location in the search bar and the application will display the current weather conditions for
              that location. The application is built using ReactJS and the Open Weather API."
              ghLink="https://github.com/SD-softuser/Weather-App"
              demoLink="https://weather-app-green-theta-86.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={choicePredictor}
              isBlog={false}
              title="Customer-choice-predictor "
              description="It a simple application which shows the real time use of Apriori algorithm in shopping malls where how the arrangements of items is done and how the
              user choice get predicted with the help of other bought products"
              ghLink="https://github.com/SD-softuser/customer-choice-predictor"
              demoLink="https://customerchoicepredictor.streamlit.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
