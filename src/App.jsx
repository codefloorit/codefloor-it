import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Navigate } from "react-router-dom";

import Home from "./pages/Home";

import AboutUs from "./pages/about/AboutUs";
import OurTeam from "./pages/about/OurTeam";
import WhyChooseUsPage from "./pages/about/WhyChooseUsPage";

import ITServices from "./pages/services/ITServices";
import ITServiceDetail from "./pages/services/ITServiceDetail";

import TaxServices from "./pages/tax/TaxServices";
import TaxServiceDetail from "./pages/tax/TaxServiceDetail";

import Blog from "./pages/resources/Blog";
import BlogDetail from "./pages/resources/BlogDetail";
import FAQs from "./pages/resources/FAQs";
import Testimonials from "./pages/resources/Testimonials";
import CaseStudies from "./pages/resources/CaseStudies";
import CaseStudyDetail from "./pages/resources/CaseStudyDetail";

import ContactUs from "./pages/contact/ContactUs";
import GetQuote from "./pages/contact/GetQuote";
import BookConsultation from "./pages/contact/BookConsultation";
import Support from "./pages/contact/Support";

import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsAndConditions from "./pages/legal/TermsAndConditions";
import Disclaimer from "./pages/legal/Disclaimer";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/about/team" element={<OurTeam />} /> */}
        {/* <Route path="/about/why-choose-us" element={<WhyChooseUsPage />} /> */}

        {/* IT Services */}
        <Route path="/it-services" element={<ITServices />} />
        <Route path="/it-services/:slug" element={<ITServiceDetail />} />

        {/* Tax & Financial Services */}
        <Route path="/tax-services" element={<TaxServices />} />
        <Route path="/tax-services/:slug" element={<TaxServiceDetail />} />

        {/* Resources */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/get-quote" element={<GetQuote />} /> */}
        {/* <Route path="/book-consultation" element={<BookConsultation />} /> */}
        {/* <Route path="/support" element={<Support />} /> */}

        {/* Legal */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
