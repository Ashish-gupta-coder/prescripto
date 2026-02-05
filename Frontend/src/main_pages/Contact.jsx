import React from "react";
import contactImg from "../assets/assets_frontend/contact_image.png"; // adjust path

function Contact() {
  return (
    <div className="w-full flex justify-center py-14">
      <div className="w-[70%]">

        {/* Heading */}
        <h1 className="text-center text-2xl font-semibold text-gray-500 mb-12">
          CONTACT <span className="text-black font-bold">US</span>
        </h1>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Left Image */}
          <div className="md:w-[38%] w-full">
            <img
              src={contactImg}
              alt="Contact Prescripto"
              className="w-full rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-[55%] w-full text-gray-600 text-sm">

            {/* Office */}
            <h3 className="font-semibold text-gray-600 text-xl mb-3">
              OUR OFFICE
            </h3>

            <p className="mb-3 leading-6">
              54709 Wilms Station <br />
              Suite 350, Washington, USA
            </p>

            <p className="mb-6 leading-6">
              Tel: (415) 555-0132 <br />
              Email: greatstackdev@gmail.com
            </p>

            {/* Careers */}
            <h3 className="font-semibold text-gray-700 text-2xl mb-2">
              CAREERS AT PRESCRIPTO
            </h3>

            <p className="mb-5">
              Learn more about our teams and job openings.
            </p>

            <button className="px-6 py-2 border border-gray-700 text-gray-700 text-sm hover:bg-gray-700 hover:text-white transition">
              Explore Jobs
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
