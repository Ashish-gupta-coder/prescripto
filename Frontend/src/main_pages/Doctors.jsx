import React from "react";
import { doctors } from "../assets/assets_frontend/assets";

function Doctors() {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-[90%]">
        <div className="mb-6">
          <span className="text-gray-500">
            Browse through the doctors specialist.
          </span>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-4">
            {doctors.slice(0, 6).map((itme) => (
              <button className="w-52 h-10 border border-gray-400 text-gray-700 rounded-md text-sm">
                {itme.speciality}
              </button>
            ))}
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-4 gap-6">
              {doctors.map((itme, index) => (
                <div
                  key={index}
                  className="w-full h-72 shadow-sm rounded-xl border border-[#eaefff] hover:shadow-lg transition"
                >
                  <div className="h-[75%] bg-[#eaefff] rounded-t-xl relative flex items-end justify-center">
                    <img
                      src={itme.image}
                      alt="doctors"
                      className="h-full object-contain"
                    />
                  </div>
                  <div className="h-[25%] px-4 py-2 flex flex-col justify-center">
                    <span className="text-green-500 font-medium text-sm flex items-center gap-1">
                      ● Available
                    </span>
                    <span className="text-base font-semibold text-gray-700">
                      {itme.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {itme.speciality}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
