import React from "react";
import { Card } from "react-bootstrap";
import win16img from '../images/Windows-Server-2016.png';
import win10img from '../images/win10logo.png';
import lessonplanimg from '../images/LessonPlanLogo.png';

function Windows(){

    const winlogo = "/images/Windows-Server-2016.png";
    const win10logo = "/images/win10logo.png";

    const cardInfo = [
        {image: win16img, title:"Installing Windows", text:"Learn how to install Windows with a disk and a network image"},
        {image: win10img, title:"Configuring the Boot Process", text:"Understand the startup process, boot sequence/phases, and Windows Registry"},
        {image: win16img, title:"MMC and Disk Management", text:"Making the most out of Microsoft Management Console"},
        {image: win10img, title:"Windows Networking", text:"Static and Dynamic Configuration of IP Addressing for Windows"},
        {image: win16img, title:"Creating a Domain", text:"Implement DNS, Active Directory Domain Services, Certificate Authority, DHCP, RADIUS, and other Servers"},
        {image: win10img, title:"Domain Name System", text:"In-depth explanation of the Domain Name System"},
        {image: win16img, title:"Active Directory", text:"Explanation of central authentication and creating objects within Active Directory"},
        {image: win10img, title:"Joining the domain", text:"Joining member servers and client workstations to your domain"},
        {image: win16img, title:"Windows Shared Folders", text:"Creating a filesystem to be used as a shared drive"},
        {image: win10img, title:"Windows Permissions", text:"Explanation and implementation of Windows share permissions and security(NTFS) permissions"},
        {image: win16img, title:"Group Policy Objects", text:"Utilizing GPOs to define system appearances, security and maintenance options, startup scripts and network drive mapping and more"},
        {image: win10img, title:"Working with Printers", text:"Installation of local and network printers, configure load balancing with printer pools"},
        {image: win16img, title:"Network and Application Security", text:"Principles of InfoSec, Security Protocols, Practices, Audit Logs and Event Viewer"},
        {image: win10img, title:"Managing Software", text:"Lifecycle of Software, using GPOs to install, manage and maintain software"},
        {image: lessonplanimg, title:"Practice and Review", text:"Practice test and key points to review"}
      ];
  
      const renderCards = (card, index) => {
        return(
          <Card border="dark" style = {{width: '18rem'}}  key={index} className="cardbox" id="wincards">
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