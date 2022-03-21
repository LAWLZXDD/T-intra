import React from 'react';
import tangoimg from '../images/35T_Logo.png';
import micrest from '../images/MI_Crest.png';

function Homepage() {

    return (
        <div>
            <div class="welcomecontainer">
                <div class="row welheader" style={{ margin: 0 }}>
                    <div class="col-2 welbox">
                        <img src={tangoimg} alt="35T Logo" class="tangologo img-fluid" />
                    </div>
                    <div class="col-8 welbox">
                        <h1>Welcome to Server Workstation Integration</h1>
                    </div>
                    <div class="col-2 welbox">
                        <img src={micrest} alt="MI Crest Logo" class="micrestlogo img-fluid" />
                    </div>
                </div>
            </div>
            <div class="derpcontainer">
            </div>
            <div class="charliecontainer">
                <div class="row" style={{ margin: 0 }}>
                    <div class="col-6 charliebox">
                        <h3>Division Mission Statement</h3>
                        <p>To foster critical thinking and logical reasoning to produce the Army's finest technicians.
                            Developing sharp minds to innovate and
                        </p>
                    </div>
                    <div class="col-6 charliebox">
                        <h3>Schoolhouse Mission Statement</h3>
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