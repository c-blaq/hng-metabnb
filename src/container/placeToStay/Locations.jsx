import React from "react";
import { Link } from "react-router-dom";

const Locations = () => {
  const LOCATIONS = [
    "Resturant",
    "Cottage",
    "Castle",
    "fantastic city",
    "beach",
    "Carcbins",
    "Off-grid",
    "Farm",
  ];
  return (
    <div className="flex items-center justify-between xl:mt-28 xl:mb-16">
      <div className="flex gap-12">
        {LOCATIONS.map((location) => (
          <Link className="text-black text-xl">{location}</Link>
        ))}
      </div>

      <div className="flex gap-10 xl:mr-12  border border-[#B4B4B4] rounded-2xl py-3 px-4">
        <span>Location</span>
        <img src="/assets/images/setting.png" alt="setting icon" />
      </div>
    </div>
  );
};

export default Locations;
