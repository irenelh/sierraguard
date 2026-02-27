import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import WhatsAppWidget from "./components/WhatsAppWidget";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import { lazy, Suspense } from "react";

const NotFound = lazy(() => import("@/pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const CatchAllRoute = lazy(() => import("./pages/CatchAllRoute"));
const BarriosPage = lazy(() => import("./pages/BarriosPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogArticlePage = lazy(() => import("./pages/BlogArticlePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Calculadora = lazy(() => import("./pages/Calculadora"));
const AvisoLegal = lazy(() => import("./pages/legal/AvisoLegal"));
const PoliticaPrivacidad = lazy(() => import("./pages/legal/PoliticaPrivacidad"));
const PoliticaCookies = lazy(() => import("./pages/legal/PoliticaCookies"));


function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
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
      </Suspense>
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