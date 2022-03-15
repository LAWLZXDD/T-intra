import React from "react";
import { Card } from "react-bootstrap";

function Windows(){

    const cardInfo = [
        {image: "", title:"Installing Windows", text:"Learn how to install windows with a disk and a network image"},
        {image: "", title:"Configuring the Boot Process", text:"Understand the startup process, boot sequence/phases, and Windows Registry"},
        {image: "", title:"MMC and Disk Management", text:"Making the most out of Microsoft Management Console"},
        {image: "", title:"Windows Networking", text:"Static and Dynamic Configuration of IP Address for Windows"},
        {image: "", title:"Creating a Domain", text:"Implement DNS, Active Directory Domain Services, Certificate Authority, DHCP, RADIUS, and other Servers"},
        {image: "", title:"Domain Name System", text:"In-depth explanation of the Domain Name System"},
        {image: "", title:"Active Directory", text:"Explanation of central authentication and creating objects within Active Directory"},
        {image: "", title:"Joining the domain", text:"Joining member servers and clients to your domain"},
        {image: "", title:"Windows Shared Folders", text:"Creating a filesystem to be used as a shared drive"},
        {image: "", title:"Windows Permissions", text:"Explanation and implementation of Windows share permissions and security(NTFS) permissions"},
        {image: "", title:"Group Policy Objects", text:"Utilizing GPOs and how they"},
        {image: "", title:"Working with Printers", text:"Installation of local and network printers, configure load balancing with printer pools"},
        {image: "", title:"Network and Application Security", text:"Principles of InfoSec, Security Protocols, Practices, Audit Logs and Event Viewer"},
        {image: "", title:"Managing Software", text:"Lifecycle of Software, GPOs to install, manage and maintain software"},
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
      <div className="container">
        <div class="home">
            <div class="row align-items-center">
                <div class="col-lg-12 d-none d-xl-block">
                <h1 class="font-weight-light">Windows</h1>
                    <p>
                    The Windows block of instruction is designed to introduce you to server-side management that allows users to perform
                    daily operations. Windows is a user friendly computing environment that you will commonly see in the Army and in the civilian sector.
                    You will become familiar with computing functionalities that extend beyond the Windows Operating System.
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

export default Windows