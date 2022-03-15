import React from "react";
import { Card } from 'react-bootstrap';

function Linux(){

    const cardInfo = [
        {image: "", title:"Intro to Linux", text:"Pros and Cons of Linux, brief overview of the Operating System "},
        {image: "", title:"Installing the Operating System", text:"Installing Redhat 6/7 and CentOS"},
        {image: "", title:"Navigating the Linux Filesystem", text:"Learn to navigate the Linux OS using Command Line, understanding Relative and Absolute location"},
        {image: "", title:"Using the Text Line Editor", text:"Using VI or VIM to create and modify text documents"},
        {image: "", title:"Configuring Linux Networking Interfaces", text:"Become familiar with files to set up hostnames, IP addresses, DNS using Command Line"},
        {image: "", title:"More Filesystem Commands", text:"Utilzing various commands to perform multiple functions within a filesystem"},
        {image: "", title:"Using CentOS Graphical User Interface", text:"Knowing multiple ways to accomplish a task is essential in IT. Explore Linux's GUIs"},
        {image: "", title:"Filesystem backups", text:"Learn to use TAR Command and learn about file compression types"},
        {image: "", title:"Partitioning Linux Hard Drives", text:"Learn to make a fresh new HDD usable to the OS and store data on it"},
        {image: "", title:"RPM Package Manager", text:"Installing applications and other service tools from repositories using Yum and and RPM commands"},
        {image: "", title:"Linux Boot Process", text:"Understand how the Operating System boots up and the various directories used to start services"},
        {image: "", title:"Linux Services", text:"Learn to start and stop services permanently and temporarily for boot up operations and system hardening"},
        {image: "", title:"Network File System", text:"Setting up NFS and familiarizing with files needed to share directories across a network, both server and client"},
        {image: "", title:"Linux User and Groups", text:"Creating users and groups and learning where their local information is stored using Command Line."},
        {image: "", title:"Linux Shell Environments", text:"Modifying shell environments and creating custom user shell environments"},
        {image: "", title:"Filesystem Permissions", text:"Learn to read and setup permissions on a filessytem."},
        {image: "", title:"Access Control Lists", text:"Caveat on filesystem permissions to allow individuals and groups to a directory and files"},
        {image: "", title:"Linux Printers", text:"Setting up local and network printers on the Linux Operating System"},
        {image: "", title:"Security", text:"Perform more system hardening practices to comply with DoD and Army IA regulations"},
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
                <h1 class="font-weight-light">Linux</h1>
                    <p>
                    Linux is a lightweight versatile operating system known for its security, reliablity and stability. It is very common to see 
                    servers running some sort of version of a Linux based operating system(both Military and Civilian sectors). Many of the servers you will be maintaining and implementing
                    during your Army career will be linux based. The learning curve for this operating system is high but the knowledge is essential and lucrative during
                    your time in the Army and when you get out.
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

export default Linux