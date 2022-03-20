import React from "react";
import { Card } from 'react-bootstrap'
import vmimg from '../images/vmwarelogo1.png';
import lessonplanimg from '../images/LessonPlanLogo.png';

function Vmware(){

    const cardInfo = [
        {image: vmimg, title:"Virtualization Concepts and VMWare Hierarchy", text:"Intro to the VMWare VSphere Inventory Hierarchy"},
        {image: vmimg, title:"Build ESXi Hypervisors and Data Centers", text:"Implementation of physical hosts into usable resources in a Data Center"},
        {image: vmimg, title:"Utilizing Virtual Computing Resources", text:"Configuring clusters, resource pools, and datastores"},
        {image: vmimg, title:"Creating Virtual Machines", text:"Creating the Virtual Machines(servers and clients)"},
        {image: vmimg, title:"Creating Content Libraries", text:"How to create, deploy, and utilize content libraries"},
        {image: vmimg, title:"Creating Templates and Snapshots", text:"Recovery Procedures and rapid deployment of baseline configurations"},
        {image: vmimg, title:"Virtual Networking", text:"Configuring virtual networks to communicate with multiple VMs, data centers, physical servers and workstations "},
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
      <div className="container">
        <div class="home">
            <div class="row align-items-center">
                <div class="col-lg-12">
                <h1 class="font-weight-light">VMWare</h1>
                    <p class=" d-none d-xl-block">
                    The VMWare block of instruction is designed to familiarize you with cloud computing concepts.
                    Taking physical resources, virtualizing them and implement innovative solutions that are flexible, scalable,
                    and cost efficient. The information provided here will assist you in deploying your own cloud environment to
                    meet your organization's needs.
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

export default Vmware