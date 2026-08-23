import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import ScrollToTop from "./components/ScrollToTop";
import UnderDevelopment from "./components/UnderDevelopment";

// Import Pages
import Home from "./pages/Home";
import Hosting from "./pages/Hosting";
import SharedHosting from "./pages/SharedHosting";
import WordPressHosting from "./pages/WordPressHosting";
import VPSHosting from "./pages/VPSHosting";
import CloudHosting from "./pages/CloudHosting";
import Domains from "./pages/Domains";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Marketing from "./pages/Marketing";
import DomainSearch from "./pages/DomainSearch";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CurrencyProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Home Page */}
            <Route index element={<Home />} />

            {/* Hosting Routes */}
            <Route path="hosting">
              <Route index element={<Hosting />} />
              <Route path="shared" element={<SharedHosting />} />
              <Route path="wordpress" element={<WordPressHosting />} />
              <Route path="vps" element={<VPSHosting />} />
              <Route path="cloud" element={<CloudHosting />} />
              <Route
                path="email"
                element={<UnderDevelopment pageName="Business Email Hosting" />}
              />
            </Route>

            {/* Direct Email Route */}
            <Route
              path="email"
              element={<UnderDevelopment pageName="Professional Email Services" />}
            />

            {/* Pricing Route */}
            <Route
              path="pricing"
              element={<UnderDevelopment pageName="Plans & Pricing" />}
            />

            {/* Core Marketing Pages */}
            <Route path="domains" element={<Domains />} />
            
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="domain-search" element={<DomainSearch />} />

            <Route path="services" element={<Services />} />

            {/* Resource Routes */}
            <Route
              path="resources"
              element={<UnderDevelopment pageName="Resources & Guides" />}
            />
            <Route
              path="blog"
              element={<UnderDevelopment pageName="Blog & News" />}
            />

            {/* Catch-all route inside layout */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>

          {/* Global catch-all route for any top-level unmatched path */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </CurrencyProvider>
    </BrowserRouter>
  );
}

export default App;