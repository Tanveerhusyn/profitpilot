import React, { useState } from "react";
import { Switch } from "@headlessui/react";

function SubscriptionCard({ plan, features, price }) {
  const baseColor =
    plan === "Base" ? "bg-white" : plan === "Pro" ? "bg-[#061A2A]" : "bg-white";
  const textColor =  plan ==="Pro"?"text-white":"text-[#061A2A]";
  const textColorPro =plan === "Pro"? "text-[#061A2A]":"";
  const buttonColor = plan ==="Pro"?"bg-white":"bg-[#F4CE24]";
  const hoverColor = "hover:bg-[#FFD65E]";
  const scale = plan === "Pro" ? "transform scale-105" : "";

  return (
    <div
      className={`${baseColor} max-w-sm rounded-lg shadow-md overflow-hidden ${scale} transition-transform duration-300`}
    >
      <div className="p-5">
        <h5 className={`text-xl font-medium ${textColor} mb-4`}>{plan} Plan</h5>
        <ul className="mb-8">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-start ${textColor}`}>
              {plan == "Pro" ? (
                <svg
                  width="25"
                  height="31"
                  viewBox="0 0 25 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_34_199)">
                    <path
                      d="M10.7661 23.1731C10.3072 23.1731 9.87267 22.9556 9.59421 22.5805L5.82544 17.5219C5.70892 17.3656 5.62386 17.1876 5.57511 16.998C5.52636 16.8083 5.51488 16.6108 5.54133 16.4166C5.56778 16.2225 5.63164 16.0355 5.72925 15.8664C5.82687 15.6974 5.95633 15.5495 6.11024 15.4313C6.26409 15.3126 6.43948 15.2259 6.62638 15.1762C6.81327 15.1265 7.00798 15.1147 7.19935 15.1416C7.39072 15.1685 7.57499 15.2335 7.74159 15.3328C7.9082 15.4322 8.05386 15.564 8.17024 15.7206L10.6501 19.0466L16.8849 8.87569C17.0917 8.53987 17.4211 8.30108 17.801 8.21169C18.1809 8.1223 18.5801 8.18961 18.9112 8.39886C19.6 8.8339 19.812 9.75542 19.3816 10.4562L12.015 22.468C11.8892 22.674 11.7159 22.8457 11.51 22.9682C11.3041 23.0907 11.0719 23.1603 10.8336 23.171C10.8104 23.1731 10.7893 23.1731 10.7661 23.1731Z"
                      fill="#F0F7EE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_34_199">
                      <rect
                        width="14.9619"
                        height="15.6"
                        fill="white"
                        transform="translate(5.08508 7.87317)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="25"
                  height="31"
                  viewBox="0 0 25 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_34_156)">
                    <path
                      d="M10.7661 23.1731C10.3072 23.1731 9.87267 22.9556 9.59421 22.5805L5.82544 17.5219C5.70892 17.3656 5.62386 17.1876 5.57511 16.998C5.52636 16.8083 5.51488 16.6108 5.54133 16.4166C5.56778 16.2225 5.63164 16.0355 5.72925 15.8664C5.82687 15.6974 5.95633 15.5495 6.11024 15.4313C6.26409 15.3126 6.43948 15.2259 6.62638 15.1762C6.81327 15.1265 7.00798 15.1147 7.19935 15.1416C7.39072 15.1685 7.57499 15.2335 7.74159 15.3328C7.9082 15.4322 8.05386 15.564 8.17024 15.7206L10.6501 19.0466L16.8849 8.87569C17.0917 8.53987 17.4211 8.30108 17.801 8.21169C18.1809 8.1223 18.5801 8.18961 18.9112 8.39886C19.6 8.8339 19.812 9.75542 19.3816 10.4562L12.015 22.468C11.8892 22.674 11.7159 22.8457 11.51 22.9682C11.3041 23.0907 11.0719 23.1603 10.8336 23.171C10.8104 23.1731 10.7893 23.1731 10.7661 23.1731Z"
                      fill="#181059"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_34_156">
                      <rect
                        width="14.9619"
                        height="15.6"
                        fill="white"
                        transform="translate(5.08508 7.87317)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              )}
              <p className="text-base ml-3">{feature}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center">
          <span className={`text-3xl font-bold ${textColor} mb-4`}>
            {price}
          </span>
          <button
            className={`${buttonColor}   ${textColorPro}  py-2 px-6 rounded-md w-full transition duration-300 ease-in-out`}
          >
            Choose
          </button>
        </div>
      </div>
    </div>
  );
}

function Subscription() {
  const [billingCycle, setBillingCycle] = useState(true); // false for monthly, true for yearly

  return (
    <div id="pricing" className="w-full py-12 bg-[#F7F7F2]">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-black py-2 px-4 mb-4 rounded-md font-medium text-center mb-2 inline-block bg-[#FFE68E]">
            Join our platform
          </p>
          <h2 className="text-3xl font-extrabold text-[#061A2A] mb-4">
            Choose Pricing Plan
          </h2>
          <p className="text-[#061A2A] mb-6">
            Choose the right plan for your business or just start with us for
            free
          </p>
          {/* Billing cycle switch */}
          <Switch.Group
            as="div"
            className="flex items-center space-x-4 justify-center mb-8"
          >
            <Switch.Label className="text-[#061A2A]">Bill Yearly</Switch.Label>
            <Switch
              checked={billingCycle}
              onChange={setBillingCycle}
              className={`${!billingCycle ? "bg-[#F4CE24]" : "bg-gray-300"} 
                relative inline-flex items-center h-6 rounded-full w-11 outline-none transition-colors duration-300 ease-in-out`}
            >
              <span
                className={`${billingCycle ? "translate-x-6" : "translate-x-1"} 
                inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
              />
            </Switch>
            <Switch.Label className="text-[#061A2A]">Bill Monthly</Switch.Label>
          </Switch.Group>
        </div>

        {/* Subscription Cards */}
        <div className="flex flex-wrap -mx-4 gap-6 justify-center items-stretch">
          <SubscriptionCard
            plan="Base"
            features={[
              "Upload Video up to 720p Resolution",
              "Attachment & Post Scheduling",
              "Set your rates",
              "Exclusive Deals",
              "Advanced Statistics",
            ]}
            price={!billingCycle ? "$123/year" : "$123/month"}
            color="bg-gray-50"
            textColor="text-black"
          />
          <SubscriptionCard
            plan="Pro"
            features={[
              "Upload Video up to 720p Resolution",
              "10 free prompts",
              "Upload Files",
              "Analysis",
              "Sales forecasting",
            ]}
            price={!billingCycle ? "$200/year" : "$200/month"}
            color="bg-blue-800"
            textColor="text-white"
          />
          <SubscriptionCard
            plan="Enterprise"
            features={[
              "Upload Video up to 720p Resolution",
              "Attachment & Post Scheduling",
              "Set your rates",
              "Exclusive Deals",
              "Advanced Statistics",
            ]}
            price={!billingCycle ? "$300/year" : "$300/month"}
            color="bg-gray-50"
            textColor="text-black"
          />
        </div>
      </div>
    </div>
  );
}

export default Subscription;
