import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import WorldBox from "./pages/WorldBox";
import PlayDetail from "./pages/PlayDetail";
import News from "./pages/News";
import Festivals from "./pages/Festivals";
import Backstage from "./pages/Backstage";
import Memory from "./pages/Memory";
import Interviews from "./pages/Interviews";
import Articles from "./pages/Articles";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/world-box" element={<WorldBox />} />
            <Route path="/world-box/:playId" element={<PlayDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/backstage" element={<Backstage />} />
            <Route path="/memory" element={<Memory />} />
            <Route path="/interviews" element={<Interviews />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
