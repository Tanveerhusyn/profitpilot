import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import featureOneImg from "../assets/featurethree.jpg";
import { FaRegHandshake, FaChartLine, FaRobot, FaCloud } from "react-icons/fa"; // Import icons
const features = [
    {
      title: "Seamless App Integration",
      description: "Our platform integrates smoothly with multiple applications.",
      Icon: FaRegHandshake,
    },
    {
      title: "Real-Time Data Analytics",
      description: "Leverage real-time analytics to make informed decisions.",
      Icon: FaChartLine,
    },
    {
      title: "Advanced Automation",
      description: "Utilize advanced AI to automate routine tasks, saving time and resources.",
      Icon: FaRobot,
    },
    {
      title: "Cloud-Based Solutions",
      description: "Access your work and data securely from anywhere with our cloud-based solutions.",
      Icon: FaCloud,
    },
    {
      title: "Customer Engagement",
      description: "Enhance customer interaction and engagement with smart AI tools.",
      Icon: FaRegHandshake, // Replace with an appropriate icon for Customer Engagement
    }
  ];
function FeatureOne() {
  return (
    <div id="about" className="w-[100%] mt-10  flex justify-center items-center ">
      <Container>
        <Row className="mx-10">
          <Col>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="flex flex-col justify-center items-left">
                <p className="bg-[#FFE68E] text-black py-2 px-4 mb-4 w-[fit-content] rounded-[8px] font-roboto hero-section-intro text-center font-bold mb-2">
                  01-Feature/ Why Choose Us
                </p>
                <h2 className="feature-one-h2 mb-4">
                  Maximize our productivity time with intense bots
                </h2>
              </div>
              <svg
  id="rotatable-svg"
  width="11"
  height="162"
  viewBox="0 0 11 162"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect x="0.5" width="10" height="162" rx="5" fill="#FFE68E" />
</svg>

              <div className="flex justify-start items-center">
              <div className="flex flex-col justify-center items-center gap-8">
                <h2 className="feature-one-num">95%</h2>
                <p className="feature-one-p">
                  Almost 95% faster prompting and instant result
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-8">
                <h2 className="feature-one-num">10k+</h2>
                <p className="feature-one-p">
                  Almost 95% faster prompting and instant result
                </p>
              </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="bg-[#F0F7EE] flex flex-col md:flex-row justify-center items-starts p-4 my-10 gap-6 rounded-xl mx-1 md:mx-10">
          <Col  sm={12} md={6} lg={6} className="w-[100%]">
            <img className="image-main rounded-xl" src={featureOneImg} alt="Feature" />
          </Col>
          <Col sm={12} md={6} lg={6} className="w-[100%] flex flex-col gap-4">
            {features.map(({ title, description, Icon }) => (
              <div key={title} className="bg-white p-4 flex justify-center items-center rounded-md w-[100%]">
                <div className="flex flex-col gap-2 text-left w-[80%]">
                  <p className="feature-one-card-text-main">{title}</p>
                  <p className="feature-one-card-text-sub">{description}</p>
                </div>
                <div className="bg-[#061A2A] hover:bg-[#F4CE24] p-4 rounded-xl">
                  <Icon size={30} color="white" />
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FeatureOne;
