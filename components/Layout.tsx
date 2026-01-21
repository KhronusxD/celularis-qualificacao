import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50 text-slate-900">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden min-h-[500px] flex flex-col relative">
        {children}
        
        <div className="mt-auto p-4 text-center border-t border-slate-100 bg-slate-50">
          <p className="text-xs text-slate-400">
            Este teste verifica os critérios básicos de elegibilidade. A aprovação final de crédito é realizada presencialmente pelo sistema, sujeita a análise instantânea.
          </p>
        </div>
      </div>
    </div>
  );
};