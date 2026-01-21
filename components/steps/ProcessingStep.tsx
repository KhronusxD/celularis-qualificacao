import React from 'react';
import { Loader2 } from 'lucide-react';

export const ProcessingStep: React.FC = () => {
  return (
    <div className="flex-1 p-8 flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-brand-green/20 rounded-full animate-ping"></div>
        <div className="relative bg-white p-4 rounded-full shadow-xl">
          <Loader2 className="w-12 h-12 text-brand-green animate-spin" />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Verificando Requisitos...</h2>
      <p className="text-slate-500">Analisando suas respostas no sistema PayJoy.</p>
      
      <div className="w-full max-w-[200px] h-1.5 bg-slate-100 rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-brand-green animate-[progress_2s_ease-in-out_infinite]" style={{ width: '50%' }}></div>
      </div>

      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};