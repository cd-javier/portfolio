import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useGoatCounter() {
  const location = useLocation();

  useEffect(() => {
    if (window.goatcounter) {
      window.goatcounter.count({
        path: location.pathname + location.search,
      });
    }
  }, [location]);
}
