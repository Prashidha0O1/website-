import React from 'react';

const TechBadge = ({ color, borderColor, textColor, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${borderColor} border-[1px] ${textColor} px-2 rounded-xl flex items-center justify-center gap-1`}
    >
      <div className={`w-2 h-2 rounded-full ${color}`}></div>
      <div className=''>{text}</div>
    </button>
  );
};

export default TechBadge;