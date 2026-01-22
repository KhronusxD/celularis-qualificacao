import React, { useState } from 'react';
import { StepProps, Brand, EntryVal, Usage, Timeframe, DocStatus } from '../../types';

export const WhatsappStep: React.FC<StepProps> = ({ onNext, answers }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // SUA URL DO GOOGLE APPS SCRIPT
  const scriptURL = 'https://script.google.com/macros/s/AKfycby4lB4HpP6YV0WFwNOvgxjAF983YWngehV_pJwDnGicIo6n_co-YBfM5cuwWjWLa_0ECw/exec';

  const formatBrand = (val?: Brand | null) => {
    switch (val) {
      case Brand.SAMSUNG: return 'Samsung';
      case Brand.MOTOROLA: return 'Motorola';
      case Brand.XIAOMI: return 'Xiaomi';
      case Brand.DECIDING: return 'Indeciso';
      default: return '';
    }
  };

  const formatEntry = (val?: EntryVal | null) => {
    switch (val) {
      case EntryVal.RANGE_150_300: return 'R$ 150 - R$ 300';
      case EntryVal.RANGE_300_600: return 'R$ 300 - R$ 600';
      case EntryVal.ABOVE_600: return 'Acima de R$ 600';
      case EntryVal.INSTALLMENTS: return 'Parcelar Entrada';
      default: return '';
    }
  };

  const formatUsage = (val?: Usage | null) => {
    switch (val) {
      case Usage.WORK: return 'Trabalho';
      case Usage.SOCIAL: return 'Redes Sociais';
      case Usage.GAMES: return 'Jogos';
      case Usage.BASIC: return 'Uso Básico';
      default: return '';
    }
  };

  const formatTimeframe = (val?: Timeframe | null) => {
    switch (val) {
      case Timeframe.TODAY: return 'Hoje';
      case Timeframe.TOMORROW: return 'Amanhã';
      case Timeframe.THIS_WEEK: return 'Esta Semana';
      case Timeframe.RESEARCHING: return 'Só Pesquisando';
      default: return '';
    }
  };

  const formatDoc = (val?: DocStatus | null) => {
    switch (val) {
      case DocStatus.ORIGINAL: return 'Original em Mãos';
      case DocStatus.DIGITAL: return 'Digital Oficial';
      case DocStatus.PHOTO_COPY: return 'Foto/Xerox';
      case DocStatus.NONE: return 'Sem Documento';
      default: return '';
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // 1. Feedback visual
    setIsSubmitting(true);
    setErrorMessage('');

    // 2. Envia os dados para o Google Sheets
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        console.log('Sucesso!', response);
        // 3. REDIRECIONAMENTO APÓS SUCESSO
        const formData = new FormData(form);
        onNext({
          whatsapp: formData.get('Whatsapp') as string,
          name: formData.get('Nome') as string
        });
      })
      .catch(error => {
        console.error('Erro!', error.message);
        setErrorMessage('Erro ao enviar. Tente novamente.');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="flex-1 w-full animate-in fade-in slide-in-from-right-8 duration-300">
      <style>{`
        .form-container { max-width: 400px; margin: 0 auto; text-align: left; }
        .input-group { margin-bottom: 15px; }
        .input-group label { display: block; font-weight: bold; margin-bottom: 5px; font-size: 14px; color: #333; }
        .input-group input { width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px; font-size: 16px; }
        #btn-enviar { width: 100%; padding: 15px; background-color: #00C853; color: white; border: none; border-radius: 8px; font-size: 18px; font-weight: bold; cursor: pointer; transition: 0.3s; }
        #btn-enviar:hover { background-color: #009624; }
        #btn-enviar:disabled { opacity: 0.7; cursor: not-allowed; }
        .security-note { font-size: 12px; color: #666; text-align: center; margin-top: 10px; }
      `}</style>

      <div className="form-container p-4">
        <h3 className="text-xl font-bold mb-4 text-center">Verificar Disponibilidade Agora</h3>

        <form name="submit-to-google-sheet" onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Seu Nome Completo</label>
            <input type="text" name="Nome" placeholder="Digite seu nome" required />
          </div>

          <div className="input-group">
            <label>WhatsApp (com DDD)</label>
            <input type="tel" name="Whatsapp" placeholder="(92) 9xxxx-xxxx" required />
          </div>

          {/* Hidden Fields for Spreadsheet */}
          <input type="hidden" name="Marca" value={formatBrand(answers?.brand)} />
          <input type="hidden" name="Entrada" value={formatEntry(answers?.entryVal)} />
          <input type="hidden" name="Uso" value={formatUsage(answers?.usage)} />
          <input type="hidden" name="Urgencia" value={formatTimeframe(answers?.timeframe)} />
          <input type="hidden" name="Documento" value={formatDoc(answers?.docStatus)} />

          <input type="hidden" name="Resultado" value="Pré-Aprovado (Elegível)" />

          <button type="submit" id="btn-enviar" disabled={isSubmitting}>
            {isSubmitting ? 'Processando... ⏳' : 'CONFIRMAR AGENDAMENTO'}
          </button>

          {errorMessage && (
            <p className="text-center text-red-500 mt-2 font-medium">{errorMessage}</p>
          )}

          <p className="security-note">🔒 Seus dados estão seguros e não serão compartilhados.</p>
        </form>
      </div>
    </div>
  );
};