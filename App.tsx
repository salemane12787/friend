import React, { useState } from 'react';
import Welcome from './components/Welcome';
import License from './components/License';
import Components from './components/Components';
import Installation from './components/Installation';
import Complete from './components/Complete';

export enum Step {
  Welcome,
  License,
  Components,
  Installation,
  Complete,
}

const App: React.FC = () => {
  const [step, setStep] = useState<Step>(Step.Welcome);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const renderStep = () => {
    switch (step) {
      case Step.Welcome:
        return <Welcome onNext={nextStep} />;
      case Step.License:
        return <License onNext={nextStep} />;
      case Step.Components:
        return <Components onNext={nextStep} />;
      case Step.Installation:
        return <Installation onNext={nextStep} />;
      case Step.Complete:
        return <Complete />;
      default:
        return <Welcome onNext={nextStep} />;
    }
  };

  return (
    <div className="font-mono min-h-screen flex items-center justify-center p-4">
      {renderStep()}
    </div>
  );
};

export default App;