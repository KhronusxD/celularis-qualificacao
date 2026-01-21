import React, { useState } from 'react';
import { StepProps } from '../../types';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const WhatsappStep: React.FC<StepProps> = ({ onNext }) => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const formatPhone = (value: string) => {
    // Basic Brazil Phone Mask
    let v = value.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);
    
    if (v.length > 2) {
      if (v.length > 7) {
        return `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
      }
      return `(${v.slice(0, 2)}) ${v.slice(2)}`;
    }
    return v;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 14) { // (XX) XXXXX-XXXX
      setError('Por favor, digite um número válido com DDD.');
      return;
    }
    onNext({ whatsapp: phone });
  };

  return (
    <div className="flex-1 p-6 flex flex-col animate-in fade-in slide-in-from-right-8 duration-300">
      <div className="mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
          <MessageCircle size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Tudo certo até aqui.</h2>
        <p className="text-slate-500">Digite seu WhatsApp para receber o resultado da sua elegibilidade.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 mb-1">
            Seu WhatsApp
          </label>
          <input
            type="tel"
            id="whatsapp"
            value={phone}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
            className="w-full p-4 text-lg border-2 border-slate-200 rounded-xl focus:border-brand-green focus:ring-4 focus:ring-green-100 outline-none transition-all placeholder:text-slate-300"
            inputMode="numeric"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <button 
          type="submit"
          className="w-full bg-brand-green hover:bg-brand-darkGreen text-white font-bold text-lg p-4 rounded-xl shadow-lg shadow-brand-green/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] mt-4"
        >
          Ver meu Resultado
          <ArrowRight size={20} />
        </button>
      </form>
    </div>
  );
};