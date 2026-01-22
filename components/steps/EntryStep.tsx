import React, { useState } from 'react';
import { EntryVal, StepProps } from '../../types';
import { ButtonOption } from '../ButtonOption';
import { Wallet } from 'lucide-react';

export const EntryStep: React.FC<StepProps> = ({ onNext }) => {
    const [selected, setSelected] = useState<EntryVal | null>(null);

    const handleSelect = (value: EntryVal) => {
        setSelected(value);
        setTimeout(() => {
            onNext({ entryVal: value });
        }, 400);
    };

    return (
        <div className="flex-1 p-6 flex flex-col animate-in fade-in slide-in-from-right-8 duration-300">
            <div className="mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                    <Wallet size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">O sistema PayJoy facilita muito a aprovação com uma pequena entrada.</h2>
                <p className="text-slate-500">Qual valor aproximado você teria disponível para dar de entrada hoje?</p>
            </div>

            <div className="flex flex-col gap-3">
                <ButtonOption
                    label="Entre R$ 150 e R$ 300"
                    onClick={() => handleSelect(EntryVal.RANGE_150_300)}
                    isSelected={selected === EntryVal.RANGE_150_300}
                />
                <ButtonOption
                    label="Entre R$ 300 e R$ 600"
                    onClick={() => handleSelect(EntryVal.RANGE_300_600)}
                    isSelected={selected === EntryVal.RANGE_300_600}
                />
                <ButtonOption
                    label="Acima de R$ 600 (Quero modelos top)"
                    onClick={() => handleSelect(EntryVal.ABOVE_600)}
                    isSelected={selected === EntryVal.ABOVE_600}
                />
                <ButtonOption
                    label="Prefiro parcelar a entrada (Verificar condições)"
                    onClick={() => handleSelect(EntryVal.INSTALLMENTS)}
                    isSelected={selected === EntryVal.INSTALLMENTS}
                />
            </div>
        </div>
    );
};
