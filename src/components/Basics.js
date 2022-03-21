import React from "react"
import { Card } from "react-bootstrap";
import lessonplanimg from '../images/LessonPlanLogo.png';

function Basics(){

    const cardInfo = [
      {image: lessonplanimg, title:"Hardware Components", text:"Recognizing hardware components"},
      {image: lessonplanimg, title:"Firmware Lessons", text:"Defining characteristics of firmware"},
      {image: lessonplanimg, title:"Software Lessons", text:"Defining charactertistics of software"},
      {image: lessonplanimg, title:"OSI Model vs TCP/IP Model", text:"Explanation of the OSI Model and TCP/IP Model"},
      {image: lessonplanimg, title:"Intro to IP Addressing/Subnetting", text:"IP Addressing fundamentals and understanding subnetting principles"},
      {image: lessonplanimg, title:"Review and Practice", text:"Practice test and key points to review"}
    ];

    const renderCards = (card, index) => {
      return(
        <Card border="dark" style = {{width: '18rem'}}  key={index} className="cardbox">
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
        </Card>
      )
    }

    return(
    <div className="home">
      <div class="container">
        <div class="row basicrow">
          <div class="col-lg-12">
            <h1 class="font-weight-light">Computer Basics</h1>
            <p class="basicdescription">
              Computer Basics is an introductory block of instruction that will familiarize
              you with basic fundamentals of components that computers are commonly comprised of,
              how they function at a basic level, and how they relate/led to the modern day technology we use in the Army.
            </p>
          </div>
          <div class="col-lg-10">
            <div class="cardgrid basicgrid">{cardInfo.map(renderCards)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Basics