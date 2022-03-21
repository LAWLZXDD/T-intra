import React from "react";
import { Card } from 'react-bootstrap';
import lessonplanimg from '../images/LessonPlanLogo.png';

function Troubleshooting() {

  const cardInfo = [
    { image: lessonplanimg, title: "Integration", text: "Integrate all previous lessons into one architecture. Checklist included" },
    { image: lessonplanimg, title: "Troubleshooting", text: "Troubleshooting Form" },
    { image: lessonplanimg, title: "The Engineer", text: "Utilizing previous knowledge, test your critical thinking skills by building complex system solutions to meet a business necessity" }
  ];

  const renderCards = (card, index) => {
    return (
      <Card border="dark" style={{ width: '18rem' }} key={index} className="cardbox">
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    )
  }

  return (
    <div class="tscontainer">
      <div class="row align-items-center" id="tsrow">
        <div class="col-lg-12" id="blockspace">
          <h1 class="font-weight-light">Troubleshooting</h1>
          <p class="d-none d-xl-block">
            The Integration block of instruction will be on your own. You will be building a network of servers and clients
            with little to no help. This block was designed to test your skills as an administrator. You will know everything about your network, servers, and client
            workstations.
            <br></br>
            <br></br>
            The Troubleshooting portion is a test of your understanding of the previous lessons learned. Can you spot DNS issues? Can you correct
            user account issues? The problems will never stop! Resulting in concrete experiences and a complete grasp of the concepts learned.
          </p>
        </div>
        <div class="col-lg-12">
          <div class="cardgrid">{cardInfo.map(renderCards)}</div>
        </div>
      </div>
    </div>
  );
}

export default Troubleshooting