import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";
import ContentProtection from "@/components/ContentProtection";
import { useScrollTop } from "@/hook/use-scroll-top";
import { ThemeProvider } from "@/components/ThemeProvider";

// Lazy load route components to reduce initial bundle size
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ProposalDevelopment = lazy(() => import("./pages/ProposalDevelopment"));
const ClearedRecruitment = lazy(() => import("./pages/ClearedRecruitment"));
const StaffingServices = lazy(() => import("./pages/StaffingServices"));
const SoftwareDevelopment = lazy(() => import("./pages/SoftwareDevelopment"));
const Contact = lazy(() => import("./pages/Contact"));
const Booking = lazy(() => import("./pages/Booking"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

const AppRoutes = () => {
  const location = useLocation();
  useScrollTop();
  
  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/proposal" element={<ProposalDevelopment />} />
            <Route path="/services/recruitment" element={<ClearedRecruitment />} />
            <Route path="/services/staffing" element={<StaffingServices />} />
            <Route path="/services/software" element={<SoftwareDevelopment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </PageTransition>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="wfos-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ContentProtection />
        <BrowserRouter>
          <AppRoutes />
          <ScrollToTop />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
