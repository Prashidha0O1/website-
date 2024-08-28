import { ExternalLink } from "lucide-react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#1f1f1f] border-[2px] border-[#3a3a3a] rounded-xl text-sm text-gray-300 py-1 px-3 flex items-center gap-2 hover:bg-[#3a3a3a] transition-all"
    >
      {text}
      <ExternalLink className="w-4 h-4"/>
    </button>
  );
};

export default Button;