import React from 'react';

function Homepage() {

    return (
        <div>
            <div class="welcomecontainer d-none d-md-block">
                <div class="row welheader" style={{ margin: 0 }}>
                    <div class="col-2 welbox">
                        <img src={"/images/35T_Logo.png"} alt="35T Logo" class="tangologo img-fluid" />
                    </div>
                    <div class="col-8 welbox">
                        <h1>Welcome to Server Workstation Integration</h1>
                    </div>
                    <div class="col-2 welbox">
                        <img src={"/images/MI_Crest.png"} alt="MI Crest Logo" class="micrestlogo img-fluid" />
                    </div>
                </div>
            </div>
            <div class="derpcontainer d-none d-lg-block">
                <div class="row welpond" style={{ margin: 0 }}>
                    <div class="tempcontainer">
                    <div class="col-lg-3 carouselbanner">
                        <img src={"/images/305th_Logo.png"} alt="305th BN Logo" class="bn305logo" />
                    </div>

                    <div class="col-lg-6"></div>

                    <div class="col-lg-3 carouselbanner">
                        <img src={"/images/309th_Logo.png"} alt="309th BN Logo" class="bn309logo" />
                    </div>
                    </div>
                    

                </div>
            </div>
            <div class="charliecontainer">
                <div class="row" style={{ margin: 0 }}>
                    <div class="col-6 charliebox">
                        <h3>Division Mission Statement</h3>
                        <p>To foster critical thinking and logical reasoning to produce the Army's finest technicians</p>
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