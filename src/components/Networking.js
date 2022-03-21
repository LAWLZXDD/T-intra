import React from "react"
import { Card } from "react-bootstrap";
import ciscoimg from '../images/cisco2.png';
import wireimg from '../images/wireshark-logo.png';
import lessonplanimg from '../images/LessonPlanLogo.png';

function Networking(){

    const cardInfo = [
        {image: ciscoimg, title:"OSI and TCP IP Model", text:"A more in-depth analysis of each layer"},
        {image: wireimg, title:"Wireshark", text:"Intro to Wireshark and understanding the network traffic"},
        {image: ciscoimg, title:"Switches", text:"Intro to Cisco IOS, basic commands, and how switches communicate"},
        {image: ciscoimg, title:"Switches part 2", text:"Understanding VLANS, Spanning-Tree Protocol, Standard ACLs"},
        {image: ciscoimg, title:"Subnetting", text:"Learn about and how to subnet. The importance of network segementation"},
        {image: ciscoimg, title:"Routers", text:"Router Commands, familiarizing routing concepts and protocols(RIPv2, OSPF, BGP), Extended ACLs"},
        {image: ciscoimg, title:"Advanced Routers", text:"Trunk Ports and creating your first 'Router on a Stick' "},
        {image: ciscoimg, title:"Recovery Procedures", text:"Understanding the device register and recover passwords and configuration files"},
        {image: lessonplanimg, title:"Practice and Review", text:"Practice test and key points to review"}
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
        <div class="container">
            <div class="row networkrow">
                <div class="col-lg-12 ">
                <h1 class="font-weight-light">Network Configuration</h1>
                    <p class="netdescription">
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
    );
}

export default Networking