import React, { useState } from 'react';
import { Usage, StepProps } from '../../types';
import { ButtonOption } from '../ButtonOption';
import { Laptop } from 'lucide-react';

export const UsageStep: React.FC<StepProps> = ({ onNext }) => {
    const [selected, setSelected] = useState<Usage | null>(null);

    const handleSelect = (value: Usage) => {
        setSelected(value);
        setTimeout(() => {
            onNext({ usage: value });
        }, 400);
    };

    return (
        <div className="flex-1 p-6 flex flex-col animate-in fade-in slide-in-from-right-8 duration-300">
            <div className="mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                    <Laptop size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Qual será o uso principal do aparelho?</h2>
                <p className="text-slate-500">Isso nos ajuda a encontrar o modelo ideal para você.</p>
            </div>

            <div className="flex flex-col gap-3">
                <ButtonOption
                    label="Trabalho / Apps de Corrida (Preciso de bateria e GPS)"
                    onClick={() => handleSelect(Usage.WORK)}
                    isSelected={selected === Usage.WORK}
                />
                <ButtonOption
                    label="Redes Sociais e Fotos (Preciso de câmera boa)"
                    onClick={() => handleSelect(Usage.SOCIAL)}
                    isSelected={selected === Usage.SOCIAL}
                />
                <ButtonOption
                    label="Jogos / FreeFire (Preciso de processador rápido)"
                    onClick={() => handleSelect(Usage.GAMES)}
                    isSelected={selected === Usage.GAMES}
                />
                <ButtonOption
                    label="Uso Básico (WhatsApp e Ligações)"
                    onClick={() => handleSelect(Usage.BASIC)}
                    isSelected={selected === Usage.BASIC}
                />
            </div>
        </div>
    );
};
