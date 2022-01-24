import React from "react"

//make cards for left hand side that will flow from left to right and wrap around: 5-6 cards
//Hardware Components, Firmware lessons, Software lessons, OSI vs TCP/IP Model, Intro to IP addressing/subnet

function Basics(){

    return(
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-xl-5">
            <h1 class="font-weight-light">Computer Basics</h1>
            <p>
              Computer Basics is an introductory block of instruction that will familiarize
              you with very basic fundamentals of components computers are commonly comprised of,
              how they function at a basic level, and how they relate/led to the modern day technology we use in the Army.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Basics