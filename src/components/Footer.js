import React from "react";

function Footer(){

    return(
        <footer>
            <div className="foot-container">
                <div className="d-none d-lg-block">
                    <h5 className="test">Schoolhouse Information</h5>
                    <ul className="schoolhouse-info">
                        <li className="schoolhouse-info">Training Calendar</li>
                        <li className="schoolhouse-info">Building Cleaning Layout</li>
                        <li className="schoolhouse-info">Schoolhouse POC</li>
                    </ul>
                </div>
                <div id="copyright" className="d-none d-lg-block">
                    <h6 className="test">©2022 U.S. Army, 35T1O. All Rights Reserved</h6>
                </div>
                <div className="d-none d-lg-block">
                    <h5 className="test">Company Information</h5>
                    <ul className="schoolhouse-info">
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