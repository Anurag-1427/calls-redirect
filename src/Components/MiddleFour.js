import React from 'react'
import './MiddleFour.css'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'

function MiddleFour() {
    return (
        <>
           <div className="middleFour-container">
            <div className="center-container">
                <div className="heading">
                    Our Beloved Customer
                    <div className="line4"></div>
                </div>
                <div className="reviews">
                    <div className="left-img">
                        <img src="../images/review-person.png" alt="" />
                    </div>
                    <div className="right-review">
                        <p>"The customer service of CallsRedirect is great. I spoke to Clara and she was very fantastic. She setup several advanced features for our new numbers. I highly recommend"</p>
                        <span>-Cyrille S. CEO, onfleeck.com</span>
                    </div>
                </div>
                <div className="buttons">
                    <div className="left"><LeftCircleOutlined /></div>
                    <div className="right"><RightCircleOutlined /></div>
                </div>
            </div>
            </div> 
        </>
    )
}

export default MiddleFour
