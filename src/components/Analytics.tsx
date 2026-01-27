import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookie } from '../context/CookieContext';

const GTAG_ID = import.meta.env.VITE_GTAG_ID;

const Analytics = () => {
  const location = useLocation();
  const { consent } = useCookie();

  useEffect(() => {
    // Only track if consent is explicitly true
    if (consent === true && typeof window.gtag === 'function' && GTAG_ID) {
      window.gtag('config', GTAG_ID, {
        page_path: location.pathname + location.search,
        anonymize_ip: true, // Privacy friendly default
      });
    }
  }, [location, consent]);

  return null;
};

export default Analytics;

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}
