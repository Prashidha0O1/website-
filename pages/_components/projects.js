import React from 'react';
import CardComponent from '../_components/card';

const projects = [
  {
    "title": "Rustic Depixelate",
    "description": "A backend service built in Rust that uses advanced algorithms to depixelate and enhance low-resolution images. This project focuses on real-time image processing and optimization for better visual clarity.",
    "domain": "backend",
    "sourceUrl": "https://github.com/Prashidha0O1/rusty-depixelate",  
    "demoUrl": ""     
  },
  {
    "title": "Sol-Up",
    "description": "A decentralized trading platform built on the Solana blockchain. Developed the frontend using React.js and the backend with Node.js. Implemented smart contracts and developed advanced trading algorithms to facilitate secure and efficient trading. Still work in progress",
    "domain": "full-stack (WIP)",
    "sourceUrl": "",  
    "demoUrl": ""     
  },
  {
    "title": "FlashPay",
    "description": "A decentralized crowdfunding platform enabling startups to receive crypto payments and conduct live auctions on platforms like YouTube, X, and Twitch. Designed the smart contract architecture and integrated payment processing using blockchain technology.",
    "domain": "web3 (WIP)",
    "sourceUrl": "", 
    "demoUrl": ""     
  },
];

const domainColors = {
  'web 3': { color: 'bg-[#edc678]', borderColor: 'border-[#edc678]', textColor: 'text-[#edc678]' },
  'web 2': { color: 'bg-green-500', borderColor: 'border-green-500', textColor: 'text-green-500' },
  'ai / ml': { color: 'bg-purple-500', borderColor: 'border-purple-500', textColor: 'text-purple-500' },
  'devops': { color: 'bg-[#60a5fa]', borderColor: 'border-[#60a5fa]', textColor: 'text-[#60a5fa]' },
};

const ProjectsList = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => {
          const { color, borderColor, textColor } = domainColors[project.domain] || {};
          return (
            <CardComponent
              key={index}
              title={project.title}
              description={project.description}
              domain={project.domain}
              color={color}
              borderColor={borderColor}
              textColor={textColor}
              sourceUrl={project.sourceUrl}
              demoUrl={project.demoUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsList;