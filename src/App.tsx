import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ScrollToTop from './components/ScrollToTop';
import { Loader2 } from 'lucide-react';

// Lazy load pages for better performance
const LandingPage = lazy(() => import('./LandingPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const AIAct = lazy(() => import('./pages/AIAct'));
const Business = lazy(() => import('./pages/Business'));
const Government = lazy(() => import('./pages/Government'));
const Education = lazy(() => import('./pages/Education'));
const Healthcare = lazy(() => import('./pages/Healthcare'));
const Product = lazy(() => import('./pages/Product'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const DPA = lazy(() => import('./pages/DPA'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const About = lazy(() => import('./pages/About'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// SEO Landing Pages
const AIActScholingsplicht = lazy(() => import('./pages/AIActScholingsplicht'));
const AITrainingMedewerkers = lazy(() => import('./pages/AITrainingMedewerkers'));
const CopilotTraining = lazy(() => import('./pages/CopilotTraining'));
const ChatGPTBeleid = lazy(() => import('./pages/ChatGPTBeleid'));
const ShadowAI = lazy(() => import('./pages/ShadowAI'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <Loader2 className="w-10 h-10 text-primary animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/voorwaarden" element={<Terms />} />
          <Route path="/ai-act" element={<AIAct />} />
          <Route path="/bedrijfsleven" element={<Business />} />
          <Route path="/overheid" element={<Government />} />
          <Route path="/onderwijs" element={<Education />} />
          <Route path="/zorg" element={<Healthcare />} />
          <Route path="/product" element={<Product />} />
          <Route path="/bedankt" element={<ThankYou />} />
          <Route path="/dpa" element={<DPA />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/over-ons" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          
          {/* SEO Landing Pages */}
          <Route path="/ai-act-scholingsplicht" element={<AIActScholingsplicht />} />
          <Route path="/ai-training-medewerkers" element={<AITrainingMedewerkers />} />
          <Route path="/copilot-training" element={<CopilotTraining />} />
          <Route path="/chatgpt-beleid" element={<ChatGPTBeleid />} />
          <Route path="/shadow-ai-voorkomen" element={<ShadowAI />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
