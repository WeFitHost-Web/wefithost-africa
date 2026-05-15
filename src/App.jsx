import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { CurrencyProvider } from "./contexts/CurrencyContext";

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
      <CurrencyProvider>
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
            <Route path="marketing" element={<Marketing />} />
            <Route path="domain-search" element={<DomainSearch />} />

            {/* Resource Routes [cite: 36, 57-60] */}
            <Route path="resources" element={<div>Resources Overview</div>} />
            <Route path="blog" element={<div>Blog Page</div>} />
          </Route>

       
          <Route
            path="login"
            element={<div>Redirecting to Existing System...</div>}
          />
        </Routes>
      </CurrencyProvider>
    </BrowserRouter>
  );
}

export default App;
