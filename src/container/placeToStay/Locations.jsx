import React from "react";
import { Link } from "react-router-dom";

const Locations = () => {
  const LOCATIONS = [
    "Resturant",
    "Cottage",
    "Castle",
    "fantastic city",
    "beach",
    "Carbins",
    "Off-grid",
    "Farm",
  ];
  return (
    <div className="text-sm md:text-base flex-wrap text-black xl:text-xl flex items-center justify-between gap-4 md:gap-0 my-7 md:mt-14 xl:mt-28 xl:mb-16">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-x-4 xl:gap-12">
        {LOCATIONS.map((location) => (
          <Link>{location}</Link>
        ))}
      </div>

      <div className="flex items-center gap-5 xl:gap-10 xl:mr-12  border border-[#B4B4B4] rounded-lg md:rounded-2xl p-2 md:py-3 md:px-4">
        <span>Location</span>
        <img src="/assets/images/setting.png" alt="setting icon" />
      </div>
    </div>
  );
};

export default Locations;
