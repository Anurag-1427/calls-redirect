import React from "react";
import "./MiddleTwo.css";

function MiddleTwo() {
  return (
    <>
      <div className="middleTwo-container">
        <img src="./images/image 3.png" alt="" />
        <div className="left">
            <div className="upper">
                <p>Select Country</p>
                <input type="text" placeholder="  United States" />
            </div>
            <div className="lower">
                <p>Enter Area Code</p>
                <input type="text" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;881" />
            </div>
            <div className="lower">

            </div>
        </div>
        <div className="right">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg> &nbsp;&nbsp;
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default MiddleTwo;
