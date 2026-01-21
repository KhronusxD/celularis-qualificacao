import React, { useState } from 'react';
import { AgeGroup, StepProps } from '../../types';
import { ButtonOption } from '../ButtonOption';
import { User } from 'lucide-react';

export const AgeStep: React.FC<StepProps> = ({ onNext }) => {
  const [selected, setSelected] = useState<AgeGroup | null>(null);

  const handleSelect = (value: AgeGroup) => {
    setSelected(value);
    // Add small delay for visual feedback before moving next
    setTimeout(() => {
      onNext({ ageGroup: value });
    }, 400);
  };

  return (
    <div className="flex-1 p-6 flex flex-col animate-in fade-in slide-in-from-right-8 duration-300">
      <div className="mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
          <User size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Para começar, qual a sua faixa etária?</h2>
        <p className="text-slate-500">Isso é necessário para a análise de crédito.</p>
      </div>

      <div className="flex-col gap-3">
        <ButtonOption 
          label="Menor de 18 anos" 
          onClick={() => handleSelect(AgeGroup.UNDER_18)}
          isSelected={selected === AgeGroup.UNDER_18}
        />
        <ButtonOption 
          label="Entre 18 e 65 anos" 
          onClick={() => handleSelect(AgeGroup.ADULT)}
          isSelected={selected === AgeGroup.ADULT}
        />
        <ButtonOption 
          label="Acima de 65 anos" 
          onClick={() => handleSelect(AgeGroup.SENIOR)}
          isSelected={selected === AgeGroup.SENIOR}
        />
      </div>
    </div>
  );
};