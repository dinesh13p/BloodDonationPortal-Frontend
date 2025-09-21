import { Toaster as ToastToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Partners from "./pages/Partners";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Search from "./pages/Search";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    { path: "/", element: <Index /> },
    { path: "/about", element: <About /> },
    { path: "/donate", element: <Donate /> },
    { path: "/partners", element: <Partners /> },
    { path: "/blog", element: <Blog /> },
    { path: "/faq", element: <FAQ /> },
    { path: "/contact", element: <Contact /> },
    { path: "/search", element: <Search /> },
    { path: "*", element: <NotFound /> },
  ],
  {
    basename: "/Sabaiko_Blood_Bank",
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ToastToaster />
      <SonnerToaster />
      <RouterProvider
        router={router}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
