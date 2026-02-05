import React from "react";
import aboutImg from "../assets/assets_frontend/about_image.png"; // use your image path

function About() {
  return (
    <div className="w-full flex justify-center py-14">
      <div className="w-[90%]">

        {/* Heading */}
        <h1 className="text-center text-2xl font-semibold text-gray-500 mb-12">
          ABOUT <span className="text-black font-bold">US</span>
        </h1>

        {/* About Section */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-16">

          {/* Image */}
          <div className="md:w-[32%] w-full">
            <img
              src={aboutImg}
              alt="About Prescripto"
              className="w-full rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="md:w-[60%] w-full text-gray-600 text-sm leading-6">
            <p className="mb-4">
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto,
              we understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>

            <p className="mb-4">
              Prescripto is committed to excellence in healthcare technology.
              We continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment
              or managing ongoing care, Prescripto is here to support you every
              step of the way.
            </p>

            <h3 className="font-bold text-gray-700 mt-6 mb-2">
              Our Vision
            </h3>

            <p>
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-xl font-semibold text-gray-500 mb-8">
            WHY <span className="text-black font-bold">CHOOSE US</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-300">

            {/* Box 1 */}
            <div className="p-14 border-b md:border-b-0 md:border-r">
              <h4 className="font-semibold text-gray-700 mb-6">
                EFFICIENCY:
              </h4>
              <p className="text-sm text-gray-600 leading-6">
                Streamlined appointment scheduling <br />that fits into your busy
                lifestyle.
              </p>
            </div>
            {/* Box 2 */}
            <div className="p-14 border-b md:border-b-0 md:border-r">
              <h4 className="font-semibold text-gray-700 mb-6">
                CONVENIENCE:
              </h4>
              <p className="text-sm text-gray-600 leading-6">
                Access to a network of trusted <br /> healthcare professionals in
                your area.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-14">
              <h4 className="font-semibold text-gray-700 mb-6">
                PERSONALIZATION:
              </h4>
              <p className="text-sm text-gray-600 leading-6">
                Tailored recommendations and reminders to help you stay on
                top of your health.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
