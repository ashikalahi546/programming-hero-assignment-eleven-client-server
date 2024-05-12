import React from "react";

const Accordion = () => {
  return (
    <div className="my-6 bg-gray-50 py-12">
      <div className=" xl:w-9/12 lg:w-10/12 lg:px-0 px-5 mx-auto">
        <div className="ml-2 mb-5">
          <h1 className="text-3xl font-semibold">FAQ</h1>
          <h4 className="text-lg font-medium mt-2">Need Help?</h4>
        </div>
        <div className="collapse collapse-arrow bg-base-100">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-base font-medium">
            How can i reset my password if i forget it?
          </div>
          <div className="collapse-content">
            <p className="text-gray-500 leading-7">
              Many websites and applications have a "Forgot Password" or "Reset
              Password" option on their login page. Click on this option, and
              you'll usually be prompted to enter your email address or username
              associated with your account. They will then send you instructions
              on how to reset your password via email.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-base font-medium">
            How do i create an account on your website?
          </div>
          <div className="collapse-content">
            <p className="text-gray-500 leading-7">
              Visit the Website: Go to the website's homepage. Find the Sign-Up
              or Register Option: Look for a button or link that says "Sign Up,"
              "Register," or something similar. This is usually located near the
              login section.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-base font-medium">
            What is your privacy and policy?
          </div>
          <div className="collapse-content">
            <p className="text-gray-500 leading-7">
              privacy and transparency in its use of AI technologies. If you're
              referring to OpenAI's privacy policy, it outlines how OpenAI
              collects, uses, and protects personal information in accordance
              with applicable laws and regulations. You can typically find the
              privacy policy on OpenAI's website or platform where its services
              are offered.
            </p>
          </div>
        </div>

        <div
          className="border-2 mt-5 border-[#0C3330] p-7 rounded-lg"
        >
            <div className="flex md:flex-row flex-col justify-between md:items-center items-start md:gap-0 gap-4">
                <div>
                    <h1 className="text-xl font-medium">Still have questions?</h1>
                    <p className="text-gray-500 text-base mt-1">Can’t find the answer you’re looking for. Please  chat to our friendly team.</p>
                </div>
                <button className="bg-[#0C3330] px-3.5 py-2 text-white font-medium rounded-lg ">Get in touch </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
