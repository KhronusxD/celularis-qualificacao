import React from 'react';
import { ResultType } from '../../types';
import { CheckCircle2, AlertTriangle, XCircle, Calendar, MessageCircle, MapPin } from 'lucide-react';

interface ResultStepProps {
  type: ResultType;
}

export const ResultStep: React.FC<ResultStepProps> = ({ type }) => {

  if (type === ResultType.ELIGIBLE) {
    // CENÁRIO A: SUCESSO
    return (
      <div className="flex-1 p-6 flex flex-col items-center animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-brand-green shadow-lg shadow-green-100">
          <CheckCircle2 size={48} strokeWidth={2.5} />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-3">
          Perfil Elegível para Análise PayJoy!
        </h2>

        <p className="text-center text-slate-600 mb-6 leading-relaxed">
          Ótima notícia! Você cumpre todos os requisitos obrigatórios de documentação. Suas chances de aprovação na loja são muito altas.
        </p>

        <div className="w-full bg-green-50 border border-green-100 rounded-xl p-4 mb-6">
          <p className="text-sm text-brand-darkGreen font-medium flex gap-2">
            <span className="text-lg">💡</span>
            Como você já tem os documentos certos, nossa equipe já vai deixar o sistema pronto para te receber. Isso agiliza seu atendimento em 50%.
          </p>
        </div>

        <button className="w-full bg-brand-green hover:bg-brand-darkGreen text-white font-bold text-lg p-4 rounded-xl shadow-lg shadow-brand-green/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] mb-4">
          <Calendar size={20} />
          AGENDAR ANÁLISE EXPRESSA
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full">
          <span>🎁</span>
          <span>Traga este print e ganhe uma Película 3D se aprovado.</span>
        </div>
      </div>
    );
  }

  if (type === ResultType.WARNING) {
    // CENÁRIO C: ATENÇÃO
    return (
      <div className="flex-1 p-6 flex flex-col items-center animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-6 text-brand-yellow shadow-lg shadow-yellow-100">
          <AlertTriangle size={48} strokeWidth={2.5} />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-3">
          Cuidado: Risco de Bloqueio
        </h2>

        <p className="text-center text-slate-600 mb-6 leading-relaxed">
          Cópias ou documentos ilegíveis geralmente são recusados pelo sistema. Recomendamos que você procure o documento original antes de vir, para não perder a viagem.
        </p>

        <div className="w-full flex flex-col gap-3">
          <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg p-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
            <CheckCircle2 size={20} />
            Tenho o original, quero tentar
          </button>

          <button className="w-full bg-white border-2 border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-lg p-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
            <MessageCircle size={20} />
            Falar com especialista
          </button>
        </div>
      </div>
    );
  }

  // CENÁRIO B: REPROVADO / BLOQUEIO HARD
  return (
    <div className="flex-1 p-6 flex flex-col items-center animate-in zoom-in-95 duration-500">
      <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-500">
        <AlertTriangle size={48} strokeWidth={2.5} />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-3">
        Atenção: Requisitos Pendentes
      </h2>

      <p className="text-center text-slate-600 mb-6 leading-relaxed">
        O sistema PayJoy exige obrigatoriamente portar documento original. Sem isso, o sistema não libera a venda.
      </p>

      <div className="w-full bg-slate-100 border border-slate-200 rounded-xl p-4 mb-6">
        <p className="text-sm text-slate-600 font-medium text-center">
          É para presente ou tem algum parente que possa fazer a compra com você?
        </p>
      </div>

      <button className="w-full bg-brand-green hover:bg-brand-darkGreen text-white font-bold text-lg p-4 rounded-xl shadow-lg shadow-brand-green/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
        <MessageCircle size={20} />
        Falar no WhatsApp
      </button>
    </div>
  );
};