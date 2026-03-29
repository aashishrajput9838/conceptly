import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import { PageLayout } from './components/layout/PageLayout';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
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
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import FeaturesPage from './pages/FeaturesPage';
import SubjectsPage from './pages/SubjectsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Public Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route element={<PageLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/subjects" element={<SubjectsPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/cookies" element={<CookiePolicyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Protected Routes */}
              <Route path="/explore" element={<ProtectedRoute><ExplainerPage /></ProtectedRoute>} />
              <Route path="/roadmap" element={<ProtectedRoute><RoadmapPage /></ProtectedRoute>} />
              <Route path="/quiz" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
              <Route path="/adaptive" element={<ProtectedRoute><AdaptiveLearningPage /></ProtectedRoute>} />
              <Route path="/chat" element={<ProtectedRoute><DoubtSolverPage /></ProtectedRoute>} />
              <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Router>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
