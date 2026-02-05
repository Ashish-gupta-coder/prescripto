import React from "react";
import { assets, doctors, specialityData } from "../assets/assets_frontend/assets";

function Home() {
  return (
    <>
    <div className="w-full flex items-center justify-center py-16">
      <div className="w-[90%] h-[80vh] bg-[#5f6fff] rounded-xl relative flex items-center px-20">
      <div className=" absolute right-0 bottom-0 w-[500px]"> 
        <img src={assets.header_img} alt="" />
      </div>
      <div className="w-[55%]">
        <div className="text-white text-5xl font-medium leading-tight"> 
          <span>Book Appointment <br />with Trusted Doctors</span>
        </div> 
        <div className="mt-5 flex gap-2">
          <div className="w-36"><img src={assets.group_profiles} alt="" /></div>
          <span className="text-indigo-100 text-sm">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free. </span>
        </div>
         <div className="mt-5">
        <button className="bg-white w-56 h-11 rounded-full">Book appointment <span>ar</span></button>
      </div>
      </div>

      </div>
    </div>
    {/* speciality section  */}
    <div className=" flex flex-col items-center justify-center">
     <div className="flex flex-col items-center gap-5">
      <h1 className="text-4xl font-medium">Find by Speciality</h1>
      <p className="text-gray-500 text-center">Simply browse through list of trusted doctors, Schedule <br /> your appointment hassle-fee</p>
     </div>
     <div className="mt-12 flex flex-wrap justify-center gap-5">
  {specialityData.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center gap-3 cursor-pointer  group"
    >
      <div className="w-[90px] h-[90px] rounded-full bg-blue-50 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.speciality}
          className="w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
        />
      </div>

      <span className="text-gray-700 font-medium">
        {item.speciality}
      </span>
    </div>
  ))}
</div>

    </div>
    {/* Doctors to book section  */}
    <div className="mt-24 flex flex-col items-center">
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-bold text-4xl">Top Doctors to Book</h1>
        <span className="text-gray-600">simply browse through our extensive list of trusted doctors</span>
      </div>
      <div className="mt-16 flex flex-wrap items-center justify-center gap-5">
        {doctors.slice(0,10).map((itme,index)=>(
<div className="w-52 h-72  shadow-md rounded-md border border-[#eaefff]">
          <div className="h-[75%] rounded-t-md bg-[#eaefff] relative"><img src={itme.image} alt="doctors" className=" absolute bottom-0"/></div>
          <div className="h-[25%] px-3 flex flex-col">
            <span className="text-green-500 font-medium text-[13px] ">Available</span>
            <span className="text-lg font-medium text-gray-700">{itme.name}</span>
            <span className="text-[13px] text-gray-500 font-medium">{itme.speciality}</span>
          </div>
        </div>
        ))}
        
      </div>
      <div className="mt-12"><button className="bg-[#eaefff] w-32 h-10 rounded-full">more</button></div>
    </div>

     <div className="w-full flex items-center justify-center py-16">
      <div className="w-[90%] h-[70vh] bg-[#5f6fff] rounded-xl relative flex items-center px-20">
      <div className=" absolute right-0 bottom-0 w-[400px]">
        <img src={assets.appointment_img} alt="" />
      </div>
      <div className="w-[60%]">
        <div className="text-white text-5xl font-medium leading-tight">
          <span>Book Appointment <br />with 100+ Trusted Doctors</span>
        </div>
        
         <div className="mt-3">
        <button className="bg-white w-40 h-11 rounded-full">Create account</button>
      </div>
      </div>
     
      </div>
    </div>
    </>
  );
}

export default Home;
