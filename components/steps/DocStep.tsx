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
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
          <FileText size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Para finalizar a análise: Como está a situação do seu documento (RG ou CNH)?</h2>
        <p className="text-slate-500">O filtro técnico obrigatório.</p>
      </div>

      <div className="flex flex-col gap-3">
        <ButtonOption
          label="Tenho o original físico em mãos"
          onClick={() => handleSelect(DocStatus.ORIGINAL)}
          isSelected={selected === DocStatus.ORIGINAL}
        />
        <ButtonOption
          label="Tenho o RG Digital (App oficial)"
          onClick={() => handleSelect(DocStatus.DIGITAL)}
          isSelected={selected === DocStatus.DIGITAL}
        />
        <ButtonOption
          label="Tenho apenas foto/xerox (Alerta Amarelo)"
          onClick={() => handleSelect(DocStatus.PHOTO_COPY)}
          isSelected={selected === DocStatus.PHOTO_COPY}
        />
        <ButtonOption
          label="Não tenho documento/Está vencido (Alerta Vermelho)"
          onClick={() => handleSelect(DocStatus.NONE)}
          isSelected={selected === DocStatus.NONE}
        />
      </div>
    </div>
  );
};