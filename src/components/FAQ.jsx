import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const faqs = [
  {
    question: "How does billing work?",
    answer: "Billing is based on your chosen subscription plan and will be charged at the beginning of each billing cycle."
  },
  {
    question: "Can I change my plan later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time through your account settings."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 30-day free trial with access to all features. No credit card required."
  },
  {
    question: "What kind of support will I get?",
    answer: "We offer 24/7 customer support with all plans. You can contact us anytime via email, chat, or phone."
  },
  {
    question: "Do you offer discounts for non-profits or educational institutions?",
    answer: "Yes, we offer special pricing for non-profits and educational institutions. Please contact our sales team for more information."
  },
  // ... add more FAQs here
];

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleToggle = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div id="faq" className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <p className="text-black py-1 px-4 mb-4 rounded-md font-small text-center mb-2 inline-block bg-[#FFE68E]">
            FAQs
          </p>
          <h2 className="text-3xl font-bold text-[#061A2A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#061A2A]">
            Got questions? We have got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => handleToggle(index)}
                className="flex justify-between items-center w-full px-4 py-4 text-left text-black bg-[#F0F7EE] rounded-md focus:outline-none"
              >
                <span className="font-medium text-[#061A2A]">{faq.question}</span>
                <span>
                  {openFAQ === index ? '-' : '+'}
                </span>
              </button>
              <Transition
                show={openFAQ === index}
                enter="transition ease-out duration-300"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition ease-in duration-300"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <div className="mt-2 px-4 py-2 bg-[#FFE68E]">
                  <p className="text-black">{faq.answer}</p>
                </div>
              </Transition>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
