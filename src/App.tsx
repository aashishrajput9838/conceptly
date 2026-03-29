import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { PageLayout } from './components/layout/PageLayout';
import Home from './pages/Home';
import ExplainerPage from './pages/ExplainerPage';
import RoadmapPage from './pages/RoadmapPage';
import QuizPage from './pages/QuizPage';
import DashboardPage from './pages/DashboardPage';
import PricingPage from './pages/PricingPage';
import TestimonialsPage from './pages/TestimonialsPage';
import NotFoundPage from './pages/NotFoundPage';
import AdaptiveLearningPage from './pages/AdaptiveLearningPage';
import DoubtSolverPage from './pages/DoubtSolverPage';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<ExplainerPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/adaptive" element={<AdaptiveLearningPage />} />
            <Route path="/chat" element={<DoubtSolverPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
