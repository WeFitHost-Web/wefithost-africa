import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export const currencies = {
  GBP: { label: 'GBP (£)', symbol: '£', rate: 1, code: 'GBP' },
  NGN: { label: 'NGN (₦)', symbol: '₦', rate: 1750, code: 'NGN' }, // Example: £1 = ₦1750
  KES: { label: 'KES (KSh)', symbol: 'KSh', rate: 165, code: 'KES' },
  ZAR: { label: 'ZAR (R)', symbol: 'R', rate: 23.5, code: 'ZAR' },
  USD: { label: 'USD ($)', symbol: '$', rate: 1.25, code: 'USD' },
};

export const CurrencyProvider = ({ children }) => {
  // Set default to GBP
  const [currency, setCurrency] = useState(currencies.GBP);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        const countryToCurrency = {
          'GB': currencies.GBP,
          'NG': currencies.NGN,
          'KE': currencies.KES,
          'ZA': currencies.ZAR,
          'US': currencies.USD,
        };

        if (countryToCurrency[data.country_code]) {
          setCurrency(countryToCurrency[data.country_code]);
        }
      } catch (error) {
        console.error("IP Detection failed:", error);
      }
    };
    detectLocation();
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);