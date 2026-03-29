import React from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AIConceptExplainer } from './components/explainer/AIConceptExplainer';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { SubjectsSection } from './components/sections/SubjectsSection';
import { ChatDemoSection } from './components/sections/ChatDemoSection';
import { QuizGeneratorSection } from './components/sections/QuizGeneratorSection';
import { DashboardSection } from './components/sections/DashboardSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { PricingSection } from './components/sections/PricingSection';
import { CTASection } from './components/sections/CTASection';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-[#0f172a] font-sans selection:bg-purple-500/30 selection:text-white">
        <Navbar />
        
        <main>
          <HeroSection />
          <AIConceptExplainer />
          <FeaturesSection />
          <SubjectsSection />
          <ChatDemoSection />
          <QuizGeneratorSection />
          <DashboardSection />
          <TestimonialsSection />
          <PricingSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
