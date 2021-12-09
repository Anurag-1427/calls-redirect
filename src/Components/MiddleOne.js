import React from "react";
import "./MiddleOne.css";

function MiddleOne() {
  return (
    <>
      <div className="middleone-container">
        <div className="available">
          <p>We Are Available For</p>
          <div className="line1"></div>
        </div>
        <div className="services">
          <div className="ser">
            <div className="ser-img">
              <img src="../images/Group 1.png" alt="service-1" />
            </div>
            <div className="ser-detail">
              <p className="one">Startups</p>
              <p className="second">Learn More</p>
            </div>
          </div>
          <div className="ser">
            <div className="ser-img">
              <img src="../images/Group 2.png" alt="service-1" />
            </div>
            <div className="ser-detail">
              <p className="one">Small Buisness</p>
              <p className="second">Learn More</p>
            </div>
          </div>
          <div className="ser">
            <div className="ser-img">
              <img src="../images/Group 3.png" alt="service-1" />
            </div>
            <div className="ser-detail">
              <p className="one">Enterprises</p>
              <p className="second">Learn More</p>
            </div>
          </div>
        </div>
        <div className="number">
          <p>Search Your Number</p>
          <div className="line2"></div>
        </div>
          <p className="inventory">Search our inventory and access thousands of local or toll free phone numbers instantly</p>
      </div>
    </>
  );
}

export default MiddleOne;
