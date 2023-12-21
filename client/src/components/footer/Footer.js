import React from "react";
import discord from "../../assets/images/discord.png";

import logo from "../../assets/images/logo.png";
import certificate from "../../assets/images/certificate.png";
export default function Footer() {
  return (
    <div>
      <div className="col-12 footer">
        <div className=" section background ">
          <div
            className="row gap-20 justify-content-center"
            style={{ marginBottom: "20px" }}
          >
            <div className="col-sm-3 d-flex justify-content-center">
              <img
                src={logo}
                className="logo"
                style={{ width: 130, height: 130 }}
                alt="logo"
              />
            </div>
            <div className="col-sm-3 d-flex justify-content-center">
              <a href="https://discord.com/invite/bSUGrGD" target="_blank">
                <img
                  src={discord}
                  className="logo"
                  style={{ width: 130, height: 130 }}
                  alt="discord"
                />
              </a>
            </div>
            <div className="col-sm-3 d-flex justify-content-center">
              <img
                src={certificate}
                style={{ width: 130, height: 130 }}
                alt="certificate"
              />
            </div>
          </div>
          <div className="col-12 copyright">
            COPYRIGHT © 2024 - ALL RIGHTS RESERVED BY XPAFY
            <span className="vertical-bar">|</span>{" "}
            <span
              className="pointer"
              onClick={() => window.open("mailto:info@xpafy.com")}
            >
              Contact Us
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
