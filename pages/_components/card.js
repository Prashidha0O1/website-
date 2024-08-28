import React from 'react';
import Button from '../_components/button';
import TechBadge from './tech';

const CardComponent = ({
  title,
  description,
  domain,
  color,
  borderColor,
  textColor,
  sourceUrl,
  demoUrl
}) => {
  return (
    <div className="w-[330px] h-[15rem] p-4 bg-[#1f1f1f] border-[2px] border-[#3a3a3a] text-white rounded-2xl shadow-lg flex flex-col justify-between cursor-pointer hover:scale-95 transition-all">
      <div>
        <TechBadge
          color={color}
          borderColor={borderColor}
          textColor={textColor}
          text={domain}
        />
        <div className="mt-2 mb-2 flex flex-col gap-0">
          <div className="text-md">{title}</div>
          <div className="text-gray-400 text-sm">{description}</div>
        </div>
      </div>
      <div className="flex items-center gap-4 my-2">
        {sourceUrl && (
          <Button text="Source" onClick={() => window.open(sourceUrl, '_blank')} />
        )}
        {demoUrl && (
          <Button text="Demo" onClick={() => window.open(demoUrl, '_blank')} />
        )}
      </div>
    </div>
  );
};

export default CardComponent;