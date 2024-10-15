import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';
import { WarehouseProvider } from './context/WarehouseContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WarehouseListing from './pages/WarehouseListing';
import WarehouseBooking from './pages/WarehouseBooking';
import Login from './pages/Login';
import WarehouseOwnerDashboard from './pages/WarehouseOwnerDashboard';
import LogisticsProviderDashboard from './pages/LogisticsProviderDashboard';
import IoTFeatures from './pages/IoTFeatures';
import Legal from './pages/Legal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import General from './pages/General';
import BookDemo from './pages/BookDemo';
import ForShippers from './pages/ForShippers';
import Features from './pages/Features';
import Blog from './pages/Blog';
import Support from './pages/Support';
import HelpCentre from './pages/HelpCentre';
import Newsroom from './pages/NewFeatures';
import Careers from './pages/Careers';
import Investors from './pages/Investors';
import EmergencyStays from './pages/EmergencyStays';
import ListProperty from './pages/ListProperty';
import AddOnServices from './pages/AddOnServices';
import AdvancedFeatures from './pages/AdvancedFeatures';
import Pricing from './pages/Pricing';
import WarehouseOwnerLogin from './pages/WarehouseOwnerLogin';
import LogisticsProviderLogin from './pages/LogisticsProviderLogin';

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || ''}>
      <AuthProvider>
        <WarehouseProvider>
          <Router>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/warehouses" element={<WarehouseListing />} />
                  <Route path="/warehouse/:id" element={<WarehouseBooking />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/warehouse-owner/login" element={<WarehouseOwnerLogin />} />
                  <Route path="/logistics-provider/login" element={<LogisticsProviderLogin />} />
                  <Route path="/warehouse-owner/dashboard" element={<WarehouseOwnerDashboard />} />
                  <Route path="/logistics-provider/dashboard" element={<LogisticsProviderDashboard />} />
                  <Route path="/iot-features" element={<IoTFeatures />} />
                  <Route path="/legal" element={<Legal />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/general" element={<General />} />
                  <Route path="/book-demo" element={<BookDemo />} />
                  <Route path="/for-shippers" element={<ForShippers />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/help-centre" element={<HelpCentre />} />
                  <Route path="/newsroom" element={<Newsroom />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/investors" element={<Investors />} />
                  <Route path="/emergency-stays" element={<EmergencyStays />} />
                  <Route path="/list-property" element={<ListProperty />} />
                  <Route path="/add-on-services" element={<AddOnServices />} />
                  <Route path="/advanced-features" element={<AdvancedFeatures />} />
                  <Route path="/pricing" element={<Pricing />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
          <ToastContainer position="bottom-right" />
        </WarehouseProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;