import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PayPalScriptProvider options={{ "clientId": import.meta.env.VITE_PAYPAL }}>
        <App />
      </PayPalScriptProvider>
    </QueryClientProvider>
  </StrictMode>,
)
