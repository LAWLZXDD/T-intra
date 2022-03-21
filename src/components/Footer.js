import React from "react";
import { Link } from 'react-router-dom'

function Footer() {

    return (
        <footer>
            <div className="foot-container">
                <div className="">
                    <h5 className="test">Schoolhouse Information</h5>
                    <ul className="schoolhouse-info">
                        <li className="schoolhouse-info"><Link to="#">Training Calendar</Link></li>
                        <li className="schoolhouse-info"><Link to="#">Building Cleaning Layout</Link></li>
                        <li className="schoolhouse-info"><Link to="#">Schoolhouse Contacts</Link></li>
                    </ul>
                </div>
                <div id="copyright" className="">
                    <h6 className="test d-none d-lg-block">©2022 U.S. Army, 35T1O. All Rights Reserved</h6>
                </div>
                <div className="">
                    <h5 className="test">Company Information</h5>
                    <ul className="schoolhouse-info">
                        <li className="schoolhouse-info"><Link to="#">Command Team</Link></li>
                        <li className="schoolhouse-info"><Link to="#">Command Programs</Link></li>
                        <li className="schoolhouse-info"><Link to="#">Duty Rosters</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer