import React, { useState } from 'react';
import { StepProps } from '../../types';

export const WhatsappStep: React.FC<StepProps> = ({ onNext }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // SUA URL DO GOOGLE APPS SCRIPT
  const scriptURL = 'https://script.google.com/macros/s/AKfycby4lB4HpP6YV0WFwNOvgxjAF983YWngehV_pJwDnGicIo6n_co-YBfM5cuwWjWLa_0ECw/exec';

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
        // Em vez de redirecionar para uma página estática 'sucesso.html',
        // avançamos para o próximo passo do App (ResultStep)
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