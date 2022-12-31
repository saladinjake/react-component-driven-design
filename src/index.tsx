import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import App from "./App";
import "./assets/css/modern-normalize.css";
import { GlobalStyles } from "./theme/globalStyles";
import Theme from "./theme";
import { AuthProvider } from "./context/AuthContext";


const container = document.getElementById("root");
const root = createRoot(container);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
    mutations: {
      retry: 2,
    },
  },
});

const RenderDevTool = () => {
  if (process.env.NODE_ENV === "development") {
    return <ReactQueryDevtools initialIsOpen={false} />;
  }
  return null;
};
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Theme>
            <GlobalStyles />
            <App />
          </Theme>
        </Router>
      </AuthProvider>
      <RenderDevTool />
    </QueryClientProvider>
  </React.StrictMode>
);
