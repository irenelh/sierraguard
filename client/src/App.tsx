import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Home from "./pages/Home";
import CatchAllRoute from "./pages/CatchAllRoute";
import BarriosPage from "./pages/BarriosPage";
import BlogPage from "./pages/BlogPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import ContactPage from "./pages/ContactPage";
import Calculadora from "./pages/Calculadora";
import ScrollToTop from "./components/ScrollToTop";
import AvisoLegal from "./pages/legal/AvisoLegal";
import PoliticaPrivacidad from "./pages/legal/PoliticaPrivacidad";
import PoliticaCookies from "./pages/legal/PoliticaCookies";
import CookieBanner from "./components/CookieBanner";


function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path={"/"} component={Home} />
        {/* <Route path="/barrios" component={BarriosPage} /> */}
        <Route path="/calculadora" component={Calculadora} />
        <Route path="/contacto" component={ContactPage} />
        <Route path="/aviso-legal" component={AvisoLegal} />
        <Route path="/politica-privacidad" component={PoliticaPrivacidad} />
        <Route path="/politica-cookies" component={PoliticaCookies} />
        <Route path="/blog/:slug" component={BlogArticlePage} />
        <Route path="/blog" component={BlogPage} />
        {/* Ruta catch-all para Categorías de Servicio y Location Pages */}
        <Route path="/:slug" component={CatchAllRoute} />
        <Route path="{/404}" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router>
            <AppRoutes />
            <CookieBanner />
          </Router>
          <WhatsAppWidget />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;