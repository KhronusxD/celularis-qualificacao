import React, { useState } from 'react';
import { TradeInStatus, StepProps } from '../../types';
import { ButtonOption } from '../ButtonOption';
import { Smartphone } from 'lucide-react';

export const TradeInStep: React.FC<StepProps> = ({ onNext }) => {
  const [selected, setSelected] = useState<TradeInStatus | null>(null);

  const handleSelect = (value: TradeInStatus) => {
    setSelected(value);
    setTimeout(() => {
      onNext({ tradeIn: value });
    }, 400);
  };

  return (
    <div className="flex-1 p-6 flex flex-col animate-in fade-in slide-in-from-right-8 duration-300">
      <div className="mb-6">
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
          <Smartphone size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Você possui um smartphone antigo?</h2>
        <p className="text-slate-500">Aceitamos Samsung ou Motorola como entrada.</p>
      </div>

      <div className="flex-col gap-3">
        <ButtonOption 
          label="Tenho aparelho para troca" 
          onClick={() => handleSelect(TradeInStatus.HAS_DEVICE)}
          isSelected={selected === TradeInStatus.HAS_DEVICE}
        />
        <ButtonOption 
          label="Prefiro dar entrada em dinheiro" 
          onClick={() => handleSelect(TradeInStatus.CASH)}
          isSelected={selected === TradeInStatus.CASH}
        />
      </div>
    </div>
  );
};