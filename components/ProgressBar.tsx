import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = Math.min(((currentStep) / totalSteps) * 100, 100);

  return (
    <div className="w-full h-2 bg-slate-100">
      <div 
        className="h-full bg-brand-green transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};