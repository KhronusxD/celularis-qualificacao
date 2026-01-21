import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { LandingPage } from './components/LandingPage';
import { ProgressBar } from './components/ProgressBar';
import { AgeStep } from './components/steps/AgeStep';
import { DocStep } from './components/steps/DocStep';
import { TradeInStep } from './components/steps/TradeInStep';
import { WhatsappStep } from './components/steps/WhatsappStep';
import { ProcessingStep } from './components/steps/ProcessingStep';
import { ResultStep } from './components/steps/ResultStep';
import { Answers, ResultType, AgeGroup, DocStatus } from './types';

const TOTAL_STEPS = 4; // Not counting Processing/Result

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  
  const [answers, setAnswers] = useState<Answers>({
    ageGroup: null,
    docStatus: null,
    tradeIn: null,
    whatsapp: ''
  });

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleNext = (newData: Partial<Answers>) => {
    setAnswers(prev => ({ ...prev, ...newData }));
    
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Final step submitted
      startProcessing();
    }
  };

  const startProcessing = () => {
    setIsProcessing(true);
    // Simulate API/System check delay
    setTimeout(() => {
      setIsProcessing(false);
      setShowResult(true);
    }, 2000);
  };

  const calculateResult = (): ResultType => {
    // Scenario B: Underage OR No Docs
    if (answers.ageGroup === AgeGroup.UNDER_18 || answers.docStatus === DocStatus.NONE) {
      return ResultType.BLOCKED;
    }
    
    // Scenario C: Docs are Copy or Expired
    if (answers.docStatus === DocStatus.COPY_EXPIRED) {
      return ResultType.WARNING;
    }
    
    // Scenario A: Everything else (Adult/Senior + Original Docs)
    return ResultType.ELIGIBLE;
  };

  const renderContent = () => {
    if (!hasStarted) {
      return <LandingPage onStart={handleStart} />;
    }

    if (showResult) {
      return <ResultStep type={calculateResult()} />;
    }

    if (isProcessing) {
      return <ProcessingStep />;
    }

    switch (currentStep) {
      case 1:
        return <AgeStep onNext={handleNext} />;
      case 2:
        return <DocStep onNext={handleNext} />;
      case 3:
        return <TradeInStep onNext={handleNext} />;
      case 4:
        return <WhatsappStep onNext={handleNext} />;
      default:
        return <AgeStep onNext={handleNext} />;
    }
  };

  return (
    <Layout>
      {/* Header */}
      <div className="p-4 flex items-center justify-between bg-white z-10">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
             <span className="text-white font-bold">C</span>
           </div>
           <span className="font-bold text-slate-800 text-lg tracking-tight">Celularis</span>
        </div>
        {hasStarted && !showResult && !isProcessing && (
          <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded">
            Passo {currentStep} de {TOTAL_STEPS}
          </span>
        )}
      </div>

      {/* Progress Bar (Only show during quiz) */}
      {hasStarted && !showResult && !isProcessing && (
        <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
      )}

      {/* Main Content Area */}
      {renderContent()}
    </Layout>
  );
}

export default App;