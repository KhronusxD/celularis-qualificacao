import React, { useState } from 'react';
import { DocStatus, StepProps } from '../../types';
import { ButtonOption } from '../ButtonOption';
import { FileText } from 'lucide-react';

export const DocStep: React.FC<StepProps> = ({ onNext }) => {
  const [selected, setSelected] = useState<DocStatus | null>(null);

  const handleSelect = (value: DocStatus) => {
    setSelected(value);
    setTimeout(() => {
      onNext({ docStatus: value });
    }, 400);
  };

  return (
    <div className="flex-1 p-6 flex flex-col animate-in fade-in slide-in-from-right-8 duration-300">
      <div className="mb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
          <FileText size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">O sistema exige documento oficial. Como está sua situação?</h2>
      </div>

      <div className="flex-col gap-3">
        <ButtonOption 
          label="Tenho RG ou CNH originais e legíveis em mãos" 
          onClick={() => handleSelect(DocStatus.ORIGINAL)}
          isSelected={selected === DocStatus.ORIGINAL}
        />
        <ButtonOption 
          label="Tenho apenas cópia ou documento vencido" 
          onClick={() => handleSelect(DocStatus.COPY_EXPIRED)}
          isSelected={selected === DocStatus.COPY_EXPIRED}
        />
        <ButtonOption 
          label="Não tenho documentos no momento" 
          onClick={() => handleSelect(DocStatus.NONE)}
          isSelected={selected === DocStatus.NONE}
        />
      </div>
    </div>
  );
};