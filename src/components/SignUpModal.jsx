import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const SignUpModal = ({ show, handleClose }) => {
  return (
    <>
      {show && (
        <div className="justify-center text-black items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-lg">
            {/* Content */}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#F7F7F2] outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Sign Up</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={handleClose}
                >
                  <span className="text-black text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/* Body */}
              <div className="relative p-6 flex-auto">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </form>
              </div>
              {/* Footer */}
              <div className="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
                <button
                  className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  className="bg-[#061A2A] rounded-md text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={handleClose}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {show && <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>}
    </>
  );
};

export default SignUpModal;
