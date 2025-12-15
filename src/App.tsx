import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";
import CreateCourse from "./pages/CreateCourse";
import CSEProjects from "./pages/Tracker/CSEProjects";
import ECEProjects from "./pages/Tracker/ECEProjects"; 
import ArtificialIntelligenceProjects from "./pages/Tracker/ArtificialIntelligenceProjects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/create" element={<CreateCourse />} />
           <Route path="/cse-projects" element={<CSEProjects />} />
          <Route path="/ece-projects" element={<ECEProjects />} />
          <Route path="/ArtificialIntelligence-projects" element={<ArtificialIntelligenceProjects />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
