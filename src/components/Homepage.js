import React from 'react';
import { Carousel } from 'react-bootstrap';

function Homepage(){

    return (
        <div>
            <div class="welcomecontainer d-none d-md-block">
                <div class="row welheader" style={{margin: 0}}>
                    <div class="col-2 welbox">
                        <img src={"/images/35T_Logo.png"} alt="35T Logo" class="tangologo img-fluid"/>
                    </div>
                    <div class="col-8 welbox">
                        <h1>Welcome to Server Workstation Integration</h1>
                    </div>
                    <div class="col-2 welbox">
                        <img src={"/images/MI_Crest.png"} alt="MI Crest Logo" class="micrestlogo img-fluid"/>
                    </div>
                </div>
            </div>
            <div class="derpcontainer d-none d-lg-block">
            <div class="row welpond" style={{margin: 0}}>
                        <div class="col-lg-2 carouselbanner">
                            <img src={"/images/305th_Logo.png"} alt="305th BN Logo" class="bn305logo img-fluid"/>
                        </div>
                        <div class="col-lg-8 carouselcontainer img-fluid d-block" >
                        <Carousel class="mycarousel">
                        <Carousel.Item interval={5000}>
                                <img 
                                src="/images/coverphoto.png"
                                alt="cover photo"
                                width={'1000px'}
                                height={'600px'}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img 
                                src="/images/TeamTango.png"
                                alt="First slide"
                                width={'1000px'}
                                height={'600px'}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img 
                                src="/images/carousel10.png"
                                alt="Second slide"
                                width={'1000px'}
                                height={'600px'}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img
                                src="/images/carousel11.png"
                                alt="Third slide"
                                width={'1000px'}
                                height={'600px'}
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img
                                src="/images/carousel12.png"
                                alt="Fourth slide"
                                width={'1000px'}
                                height={'600px'}
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img
                                src="/images/carousel13.png"
                                alt="Fifth slide"
                                width={'1000px'}
                                height={'600px'}
                                />
                                
                            </Carousel.Item>
                        </Carousel>
                        </div>
                        <div class="col-lg-2 carouselbanner">
                            <img src={"/images/309th_Logo.png"} alt="309th BN Logo" class="bn309logo img-fluid"/>
                        </div>
                    </div>
            </div>
                    
                    <div class="charliecontainer">
                        <div class="row" style={{margin: 0}}>
                            <div class="col-6 charliebox">
                                <h3>Division Mission Statement</h3>
                                <p>To foster critical thinking and logical reasoning to produce the Army's finest technicians</p>
                            </div>
                            <div class="col-6 charliebox">
                                <h3>Schoolhouse Mission Satement</h3>
                                <p>To train technically competant and physically fit Military Intelligence Systems Maintainers who live by
                                    the Army Values capable of joining the ranks within the Army, Joint Commands, and National Agencies.
                                </p>
                            </div>

                    

                        </div>
                    </div>
                
            
        </div>
    )
}
export default Homepage