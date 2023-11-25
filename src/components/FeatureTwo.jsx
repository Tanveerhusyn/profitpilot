import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import featureImg from "../assets/feature02.png";

function FeatureTwo() {
  return (
    <div id="service" className="w-[100%] mt-10  flex justify-center items-center">
      <Container>
        <Row className="mx-10 flex flex-col-reverse md:flex-row gap-4">
          <div className="w-[100%] md:w-[60%]">
            <div className="flex flex-col gap-6 justify-center items-start">
              <p className="bg-[#FFE68E] text-black py-2 px-4 mb-4 rounded-[8px] font-roboto hero-section-intro text-center font-bold mb-2">
                02 - Maximize your service
              </p>
              <h2 className="feature-one-h2 mb-4">
                Reduce working time with using high-deflection self-serve bot
              </h2>
              <p className="hero-section-p text-left mb-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <button className="items-center py-2 px-6 rounded-[22px] border border-[#061A2A] bg-white text-black">
                Read more
              </button>
            </div>
          </div>
          <div className="flex justify-end items-center w-[100%] md:w-[40%]">
            <div className="w-[fit-content] flex justify-center items-center rounded-md p-4 bg-[#F0F7EE]">
              <img src={featureImg} alt="Feature" className="w-auto h-[380px]" />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default FeatureTwo;
