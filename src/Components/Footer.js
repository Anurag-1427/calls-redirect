import React from "react";
import "./Footer.css";
import { LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="left-footer">
          <div class="grid-container">
                <div class="grid-item line-through">home</div>
                <div class="grid-item">terms of use</div>
                <div class="grid-item">features</div>
                <div class="grid-item">about us</div>
                <div class="grid-item">support</div>
                <div class="grid-item">career</div>
          </div>
          <div className="contact">
              <p>contact@callsredirect.com</p>
              <div className="last-line"></div><br/>
              <p>Call us : +1-888-803-0060</p>
          </div>
          <div className="policy-use">
              <p>Privacy policy</p>
              <p>terms of use</p>
          </div>
          <div className="copyright">
              <p>&copy;Copyright 2021 CallsRedirect. All Rights Reserved</p>
          </div>
        </div>
        <div className="right-footer">
          <div className="tagline">
            <div className="shy">
              <p>Why be shy</p>
            </div>
            <div className="say">
              <p>
                say hi <span>.</span>
              </p>
            </div>
          </div>
          <div className="social-media">
            <p>
              LinkedIn
              <LinkedinOutlined />
            </p>
            <p>
              Twitter
              <TwitterOutlined />
            </p>
          </div>
          <div className="footer-right-end">
            <img src="../images/haspr.png" alt="haspr logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
