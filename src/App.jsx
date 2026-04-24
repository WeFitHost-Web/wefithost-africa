import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

// Import Pages
import Home from './pages/Home';
import Hosting from './pages/Hosting';
import SharedHosting from './pages/SharedHosting';
import WordPressHosting from './pages/WordPressHosting';
import VPSHosting from './pages/VPSHosting';
import CloudHosting from './pages/CloudHosting';
import Domains from './pages/Domains';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Home Page [cite: 28] */}
          <Route index element={<Home />} />

          {/* Hosting Routes  */}
          <Route path="hosting">
            <Route index element={<Hosting />} />
            <Route path="shared" element={<SharedHosting />} />
            <Route path="wordpress" element={<WordPressHosting />} />
            <Route path="vps" element={<VPSHosting />} />
            <Route path="cloud" element={<CloudHosting />} />
          </Route>

          {/* Core Marketing Pages [cite: 34-38] */}
          <Route path="domains" element={<Domains />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Resource Routes [cite: 36, 57-60] */}
          <Route path="resources" element={<div>Resources Overview</div>} />
          <Route path="blog" element={<div>Blog Page</div>} />
        </Route>

        {/* System Integration Redirects [cite: 40-41] */}
        <Route path="login" element={<div>Redirecting to Existing System...</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;