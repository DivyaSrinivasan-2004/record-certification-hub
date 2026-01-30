import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Categories from "./pages/Categories";
import HowToApply from "./pages/HowToApply";
import Policies from "./pages/Policies";
import Records from "./pages/Records";
import RecordDetail from "./pages/RecordDetail";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Apply from "./pages/Apply";
import MyApplications from "./pages/MyApplications";
import ApplicationDetail from "./pages/ApplicationDetail";
import Certificate from "./pages/Certificate";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/how-to-apply" element={<HowToApply />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/records" element={<Records />} />
          <Route path="/records/:id" element={<RecordDetail />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Dashboard Pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/dashboard/applications" element={<MyApplications />} />
          <Route path="/dashboard/applications/:id" element={<ApplicationDetail />} />
          <Route path="/dashboard/certificate/:id" element={<Certificate />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
