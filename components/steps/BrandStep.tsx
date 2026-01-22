import React, { useState } from 'react';
import { Brand, StepProps } from '../../types';
import { ButtonOption } from '../ButtonOption';
import { Smartphone } from 'lucide-react';

export const BrandStep: React.FC<StepProps> = ({ onNext }) => {
    const [selected, setSelected] = useState<Brand | null>(null);

    const handleSelect = (value: Brand) => {
        setSelected(value);
        setTimeout(() => {
            onNext({ brand: value });
        }, 400);
    };

    return (
        <div className="flex-1 p-6 flex flex-col animate-in fade-in slide-in-from-right-8 duration-300">
            <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                    <Smartphone size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Qual marca de celular você está buscando hoje?</h2>
            </div>

            <div className="flex flex-col gap-3">
                <ButtonOption
                    label="Samsung (Galaxy A)"
                    onClick={() => handleSelect(Brand.SAMSUNG)}
                    isSelected={selected === Brand.SAMSUNG}
                />
                <ButtonOption
                    label="Motorola (Moto G)"
                    onClick={() => handleSelect(Brand.MOTOROLA)}
                    isSelected={selected === Brand.MOTOROLA}
                />
                <ButtonOption
                    label="Realme"
                    onClick={() => handleSelect(Brand.REALME)}
                    isSelected={selected === Brand.REALME}
                />
                <ButtonOption
                    label="Ainda estou decidindo"
                    onClick={() => handleSelect(Brand.DECIDING)}
                    isSelected={selected === Brand.DECIDING}
                />
            </div>
        </div>
    );
};
