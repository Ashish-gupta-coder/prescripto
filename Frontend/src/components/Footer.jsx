import React from "react";
import { assets } from '../assets/assets_frontend/assets'

function Footer() {
  return (
    <div className="w-full h-[300px] flex flex-col items-center justify-center mt-24">
      <div className="w-[80%] h-[85%] flex justify-between text-gray-600">
        <div className="w-[60%] flex flex-col gap-8">
          <div className="w-[200px]">
            <img src={assets.logo} alt="logo" />
          </div>
          <div className="w-[80%] flex-wrap">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when on unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="font-medium text-black">
            <h1>COMPANY</h1>
          </div>
          <div className="">
            <ul className="flex flex-col justify-center gap-2">
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="font-medium text-black">
            <h1>GET IN TOUCH</h1>
          </div>
          <div className="">
            <ul className="flex flex-col justify-center gap-2">
              <li>+1-212-456-7890</li>
              <li>ashishgupta.dev1@gmail.com</li>
             
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[80%] flex flex-col items-center gap-5 relative bottom-5">

     <hr className="w-full border-[1.5px] border-gray-200"/>
     <span>Copyright @ 2026 Ashish_gupta - All right Reserved</span>
      </div>
    </div>
  );
}

export default Footer;
