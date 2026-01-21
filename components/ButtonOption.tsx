import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ButtonOptionProps {
  label: string;
  onClick: () => void;
  isSelected?: boolean;
}

export const ButtonOption: React.FC<ButtonOptionProps> = ({ label, onClick, isSelected }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-5 mb-3 rounded-xl text-left font-medium text-lg transition-all duration-200 border-2 flex items-center justify-between group
        ${isSelected 
          ? 'border-brand-green bg-green-50 text-brand-darkGreen shadow-[0_0_15px_rgba(16,185,129,0.3)] scale-[1.02]' 
          : 'border-slate-200 bg-white hover:border-brand-green/50 text-slate-700 hover:bg-slate-50'
        }
      `}
    >
      <span>{label}</span>
      {isSelected && <CheckCircle2 className="w-6 h-6 text-brand-green animate-in zoom-in duration-200" />}
    </button>
  );
};