import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

// Lazy load pages
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./pages/Home'));
const Programs = lazy(() => import('./pages/Programs'));
const Counselors = lazy(() => import('./pages/Counselors'));
const Features = lazy(() => import('./pages/Features'));
const Resources = lazy(() => import('./pages/Resources'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Article = lazy(() => import('./pages/Article'));
const EventRegistration = lazy(() => import('./pages/EventRegistration'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="programs" element={<Programs />} />
            <Route path="counselors" element={<Counselors />} />
            <Route path="features" element={<Features />} />
            <Route path="resources">
              <Route index element={<Resources />} />
              <Route path="articles/:id" element={<Article />} />
            </Route>
            <Route path="register/:eventSlug" element={<EventRegistration />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
