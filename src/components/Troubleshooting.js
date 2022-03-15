import React from "react";
import { Card } from 'react-bootstrap';

function Troubleshooting(){

    const cardInfo = [
        {image: "", title:"Integration", text:"Integrate all previous lessons into one architecture. Checklist included"},
        {image: "", title:"Troubleshooting", text:"Troubleshooting Form"},
        {image: "", title:"The Engineer", text:"Utilizing previous knowledge, test your critical thinking skills by building complex system solutions to meet a business necessity"}
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
      <div className="container">
        <div class="home">
            <div class="row align-items-center">
                <div class="col-lg-12 d-none d-xl-block">
                <h1 class="font-weight-light">Troubleshooting</h1>
                    <p>
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
                <div class="push"></div>
            </div>
        </div>
      </div>
    );
}

export default Troubleshooting