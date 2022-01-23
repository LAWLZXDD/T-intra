import React from "react";

//TODO
//Make list for Training Calendar Link, Building Cleanup, Address

function Footer(){

    return(
        <footer>
            <div className="container">
                <div className="box" className="d-none d-md-block">
                    <h6>Schoolhouse Information</h6>
                    <ul>
                        <li className="schoolhouse-info">Building Cleaning Layout</li>
                        <li className="schoolhouse-info">Training Calendar</li>
                        <li className="schoolhouse-info">Schoolhouse POC</li>
                    </ul>
                </div>
                <div className="box" className="d-none d-md-block">©2022 U.S. Army, 35T1O. All Rights Reserved</div>
                <div className="box" className="d-none d-md-block">
                    <h6>Company Information</h6>
                    <ul>
                        <li className="schoolhouse-info">Command Team</li>
                        <li className="schoolhouse-info">Command Programs</li>
                        <li className="schoolhouse-info">Duty Rosters</li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer