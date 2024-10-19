import React from "react";

const CustomButton = ({ buttonText, bgColor, hoverBgColor }) => {
  const handleMouseEnter = () => {
    document.body.style.backgroundColor = hoverBgColor; // Change to the desired hover background color
  };

  const handleMouseLeave = () => {
    document.body.style.backgroundColor = bgColor; // Reset to the default background color
  };

  return (
    <button
      className="green-style cursor-pointer mt-8 bg-transparent text-neutral-200 hover:text-[#171415] transition-all duration-300 rounded-full px-10 py-5 text-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonText}
    </button>
  );
};

export default CustomButton;
