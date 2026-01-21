import React from 'react';
import { ArrowRight, ShieldCheck, Smartphone, CheckCircle2 } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="flex-1 p-6 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-500">
      
      {/* Hero Icon/Visual */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-brand-green/20 blur-2xl rounded-full"></div>
        <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
          <Smartphone size={48} className="text-brand-green" />
          <div className="absolute -bottom-2 -right-2 bg-brand-green text-white p-1.5 rounded-full border-4 border-white">
            <CheckCircle2 size={16} />
          </div>
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
        Celular Novo Parcelado no Boleto?
        <span className="block text-brand-green mt-1 text-lg md:text-xl font-bold">Descubra em 30s se você está aprovado.</span>
      </h1>
      
      <div className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 mb-8 text-left space-y-3">
        <div className="flex items-start gap-3">
            <div className="mt-0.5 text-brand-green"><CheckCircle2 size={18} /></div>
            <span className="text-slate-600 text-sm font-medium leading-tight">Sem consulta rigorosa ao SPC/Serasa.</span>
        </div>
        <div className="flex items-start gap-3">
            <div className="mt-0.5 text-brand-green"><CheckCircle2 size={18} /></div>
            <span className="text-slate-600 text-sm font-medium leading-tight">Use seu aparelho antigo ou entrada facilitada.</span>
        </div>
         <div className="flex items-start gap-3">
            <div className="mt-0.5 text-brand-green"><CheckCircle2 size={18} /></div>
            <span className="text-slate-600 text-sm font-medium leading-tight">Tecnologia Segura.</span>
        </div>
      </div>

      <button 
        onClick={onStart}
        className="w-full bg-brand-green hover:bg-brand-darkGreen text-white font-bold text-lg p-5 rounded-xl shadow-lg shadow-brand-green/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] group animate-pulse-fast"
      >
        INICIAR PRÉ-ANÁLISE GRÁTIS
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-400 bg-slate-100 py-2 px-4 rounded-full">
        <ShieldCheck size={14} className="text-slate-500" />
        <span>Mais de 1.200 clientes pré-qualificados este mês.</span>
      </div>
    </div>
  );
};