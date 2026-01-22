import React, { useState } from 'react';
import { Timeframe, StepProps } from '../../types';
import { ButtonOption } from '../ButtonOption';
import { Clock } from 'lucide-react';

export const TimeframeStep: React.FC<StepProps> = ({ onNext }) => {
    const [selected, setSelected] = useState<Timeframe | null>(null);

    const handleSelect = (value: Timeframe) => {
        setSelected(value);
        setTimeout(() => {
            onNext({ timeframe: value });
        }, 400);
    };

    return (
        <div className="flex-1 p-6 flex flex-col animate-in fade-in slide-in-from-right-8 duration-300">
            <div className="mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                    <Clock size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Se o seu crédito for pré-aprovado agora, quando você pretende retirar o aparelho?</h2>
                <p className="text-slate-500">Isso ajuda a reservarmos o estoque para você.</p>
            </div>

            <div className="flex flex-col gap-3">
                <ButtonOption
                    label="Hoje mesmo! 🚀"
                    onClick={() => handleSelect(Timeframe.TODAY)}
                    isSelected={selected === Timeframe.TODAY}
                />
                <ButtonOption
                    label="Amanhã"
                    onClick={() => handleSelect(Timeframe.TOMORROW)}
                    isSelected={selected === Timeframe.TOMORROW}
                />
                <ButtonOption
                    label="Ainda esta semana"
                    onClick={() => handleSelect(Timeframe.THIS_WEEK)}
                    isSelected={selected === Timeframe.THIS_WEEK}
                />
                <ButtonOption
                    label="Só estou pesquisando"
                    onClick={() => handleSelect(Timeframe.RESEARCHING)}
                    isSelected={selected === Timeframe.RESEARCHING}
                />
            </div>
        </div>
    );
};
