import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyle } from "./components";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  const queryClient = new QueryClient();

  root.render(
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  );
}
