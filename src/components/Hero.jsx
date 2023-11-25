import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mainImg from "../assets/main2.gif";
import qb from "../assets/qb.png";
import xero from "../assets/xero.png";

function Hero() {
  return (
    <div id="home" className="w-[100%] bg-[#F7F7F2] flex justify-center items-center">
    <Container className="p-2 md:p-20  w-full bg-[#F7F7F2]  flex justify-center items-center">
      <Row className="flex flex-col-reverse md:flex-row w-[95%] justify-center items-center">
        {/* Left Column */}
        <Col
          sm={12}
          md={6}
          lg={6}
          className="flex flex-col gap-4 justify-center "
        >
          <div className="flex flex-col gap-4 h-100 w-[100%] md:w-[80%]  justify-center">
            <p className="bg-[#FFE68E] text-black py-2 px-4 mb-4 w-[fit-content] rounded-[8px] font-roboto hero-section-intro text-center font-bold mb-2">
            Enhance Your Finance Intelligence
            </p>
            <h1 className="hero-section-h1 mb-4">
            Optimize Your Finances with AI-Driven Analytics
            </h1>
            <div className="flex flex-col justify-center gap-4">
              <p className="hero-section-p text-left mb-2">
              Unleash the potential of smart data analysis to streamline your financial processes. With our powerful AI chatbot, gain actionable insights and accelerate your business growth{" "}
              </p>

              <div className="flex flex-col md:flex-row justify-left gap-2 md:justify-left items-starts md:items-center gap-2">
                <button className="bg-[#061A2A] mr-2 text-white font-bold py-4 px-6 rounded-md">
                  Request demo
                </button>
               <div className="flex gap-2 justify-center items-center">
               <svg
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                  style={{
                    cursor:'pointer'
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.5 18C33.5 26.8366 26.3366 34 17.5 34C8.66344 34 1.5 26.8366 1.5 18C1.5 9.16344 8.66344 2 17.5 2C26.3366 2 33.5 9.16344 33.5 18Z"
                    fill="white"
                    fill-opacity="0.97"
                    stroke="#061A2A"
                    stroke-width="3"
                  />
                  <path
                    d="M25.0147 17.1607C25.6809 17.5463 25.6799 18.5086 25.0128 18.8928L14.5065 24.9439C13.8394 25.3281 13.0066 24.8461 13.0074 24.0763L13.0201 11.952C13.0209 11.1822 13.8548 10.7019 14.521 11.0875L25.0147 17.1607Z"
                    fill="#061A2A"
                  />
                </svg>

                <p style={{
                    cursor:'pointer'
                  }} className="hero-demo-p">Watch video</p>
               </div>
              </div>
              <div>
                <p className="hero-section-p text-left my-4">
                Seamlessly Integrates with Leading Accounting Platforms:{" "}
                </p>
                <div className="flex justify-left w-100 items-center">
                  <img src={qb} />
                  <img src={xero} />
                </div>
              </div>
            </div>
          </div>
        </Col>
        {/* Right Column */}
        <Col sm={12} md={6} lg={6} className="flex justify-center items-center">
          <img
            src={mainImg}
            alt="SVG Illustration"
            className="hero-image-main max-w-50"
          />
        </Col>
      </Row>
    </Container>
</div>
  );
}

export default Hero;
