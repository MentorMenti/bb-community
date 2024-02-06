import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#4a7999] flex gap-5 absolute w-full h-52 bottom-0">
      {/* left section */}
      <div className="w-1/2 flex justify-center flex-col items-center gap-5">
        <span className="bg-gradient-to-r from-blue-400 to-blue-100 text-3xl font-semibold text-transparent bg-clip-text">
          MentorHeal
        </span>
        <p className="text-sm font-semibold text-white w-[700px] text-center">
          MentorHeal is the holistic wellness mentorship platform where we
          connect the mentees with experienced, qualified and certified mentors
          across the country.
        </p>

        <div className="flex gap-3">
          <input
            className="rounded-full bg-white py-2 px-6 focus:outline-none "
            type="text"
            placeholder="Your email"
          />
          <button className="rounded-full border-2 border-white text-white font-semibold py-3 px-4 text-base bg-[#5d8aa6]">
            Subscribe Now!
          </button>
        </div>
      </div>

      {/* right section */}
      <div className="bg-blue-200 w-1/2">right</div>
    </div>
  );
};

export default Footer;
