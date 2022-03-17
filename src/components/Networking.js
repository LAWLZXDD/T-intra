import React from "react"
import { Card } from "react-bootstrap";

function Networking(){

    const cardInfo = [
        {image: "", title:"OSI and TCP IP Model", text:"More in depth analysis of each layer"},
        {image: "", title:"Wireshark", text:"Intro to Wireshark and understanding the network traffic"},
        {image: "", title:"Switches", text:"Intro to Cisco IOS, basic commands, and understanding VLANS"},
        {image: "", title:"Basic Routers", text:"Familiarizing routing concepts and protocols(RIPv2, OSPF, BGP), Standard ACLs, and router commands"},
        {image: "", title:"Advanced Routers", text:"Extended ACLs, Trunk Ports, and creating your first Router on a stick "},
        {image: "", title:"Recovery Procedures", text:"Understanding the device register and recover passwords and configuration files"},
        {image: "", title:"Practice and Review", text:"Practice test and key points to review"}
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
            <div class="row networkrow">
                <div class="col-lg-12 d-none d-xl-block">
                <h1 class="font-weight-light">Network Configuration</h1>
                    <p>
                    The Network Configuration block of instruction will introduce you to how computers communicate. The Internet
                    is being able to access resources and share information from across the world with other entities. Understanding how data
                    is passed and traverses through a variety of mediums will aide you in your job as network engineers, troubleshooting, and passing
                    a variety of certification exams.
                    </p>
                </div>
                <div class="col-lg-12">
                <div class="cardgrid">{cardInfo.map(renderCards)}</div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Networking