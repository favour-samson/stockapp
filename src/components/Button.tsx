import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="md:bg-primary-200 bg-primary-500 w-[142px] h-[44px] text-white px-4 py-2 rounded-lg my-4">
      {text}
    </button>
  );
};

export default Button;
