import React from "react"
import { Card } from "react-bootstrap";

//make cards for left hand side that will flow from left to right and wrap around: 5-6 cards
//Hardware Components, Firmware lessons, Software lessons, OSI vs TCP/IP Model, Intro to IP addressing/subnet

function Basics(){

  const image = "/images/LessonPlanLogo.png"

    const cardInfo = [
      {image: image, title:"Hardware Components", text:"Recognizing hardware components"},
      {image: image, title:"Firmware Lessons", text:"Defining characteristics of Firmware"},
      {image: image, title:"Software Lessons", text:"Defining charactertistics of Software"},
      {image: image, title:"OSI Model vs TCP/IP Model", text:"Explanation of the OSI Model and TCP/IP Models"},
      {image: image, title:"Intro to IP Addressing/Subnetting", text:"IP Addressing fundamentals and understanding subnetting principles"},
      {image: image, title:"Review and Practice", text:"Practice test and key points to review"}
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
            <p class=" d-none d-xl-block">
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