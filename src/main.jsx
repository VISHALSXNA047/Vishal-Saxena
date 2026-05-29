import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, theme } from 'antd';
import { ThemeProvider } from 'next-themes';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: '#6366F1',
            borderRadius: 12,
            colorBgContainer: '#030712',
            colorBgElevated: '#111827',
            colorText: '#f9fafb',
            colorTextDescription: '#9ca3af',
            colorBorder: '#374151'
          }
        }}>
        
        <App />
      </ConfigProvider>
    </ThemeProvider>
  </StrictMode>
);
