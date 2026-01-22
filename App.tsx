import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { LandingPage } from './components/LandingPage';
import { ProgressBar } from './components/ProgressBar';
import { BrandStep } from './components/steps/BrandStep';
import { EntryStep } from './components/steps/EntryStep';
import { UsageStep } from './components/steps/UsageStep';
import { TimeframeStep } from './components/steps/TimeframeStep';
import { DocStep } from './components/steps/DocStep';
import { WhatsappStep } from './components/steps/WhatsappStep';
import { ProcessingStep } from './components/steps/ProcessingStep';
import { ResultStep } from './components/steps/ResultStep';
import { Answers, ResultType, DocStatus } from './types';

const TOTAL_STEPS = 6; // Brand, Entry, Usage, Timeframe, Doc, Whatsapp

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const [answers, setAnswers] = useState<Answers>({
    brand: null,
    entryVal: null,
    usage: null,
    timeframe: null,
    docStatus: null,
    whatsapp: '',
    name: ''
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
    // Scenario B: No Docs
    if (answers.docStatus === DocStatus.NONE) {
      return ResultType.BLOCKED;
    }

    // Scenario C: Docs are Copy or Expired
    if (answers.docStatus === DocStatus.PHOTO_COPY) {
      return ResultType.WARNING;
    }

    // Scenario A: Everything else (Original or Digital)
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
        return <BrandStep onNext={handleNext} />;
      case 2:
        return <EntryStep onNext={handleNext} />;
      case 3:
        return <UsageStep onNext={handleNext} />;
      case 4:
        return <TimeframeStep onNext={handleNext} />;
      case 5:
        return <DocStep onNext={handleNext} />;
      case 6:
        return <WhatsappStep onNext={handleNext} answers={answers} />;
      default:
        return <BrandStep onNext={handleNext} />;
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