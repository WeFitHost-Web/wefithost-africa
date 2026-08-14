import React, { createContext, useContext, useState, useEffect } from "react";

const CurrencyContext = createContext();

export const currencies = {
  GBP: { label: "GBP (£)", symbol: "£", rate: 1, code: "GBP", locale: "en-GB" },
  NGN: { label: "NGN (₦)", symbol: "₦", rate: 1750, code: "NGN", locale: "en-NG" },
  KES: { label: "KES (KSh)", symbol: "KSh", rate: 165, code: "KES", locale: "en-KE" },
  ZAR: { label: "ZAR (R)", symbol: "R", rate: 23.5, code: "ZAR", locale: "en-ZA" },
  USD: { label: "USD ($)", symbol: "$", rate: 1.25, code: "USD", locale: "en-US" },
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(currencies.GBP);

  useEffect(() => {
    const hasDetected = sessionStorage.getItem("locationDetected");
    if (hasDetected) return;

    const detectLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const countryToCurrency = {
          GB: currencies.GBP,
          NG: currencies.NGN,
          KE: currencies.KES,
          ZA: currencies.ZAR,
          US: currencies.USD,
        };

        if (countryToCurrency[data.country_code]) {
          setCurrency(countryToCurrency[data.country_code]);
          sessionStorage.setItem("locationDetected", "true");
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

// Shared formatter helper
export const formatPrice = (gbpAmount, activeCurrency) => {
  if (!activeCurrency || typeof activeCurrency.rate === "undefined") {
    return `£${gbpAmount}`;
  }

  const numericAmount = typeof gbpAmount === "string" ? parseFloat(gbpAmount) : gbpAmount;
  const converted = numericAmount * activeCurrency.rate;

  // Currencies with larger conversions (like NGN/KES) usually hide decimals,
  // while smaller unit currencies (USD/GBP) keep 2 decimal points for pricing plans.
  const hasDecimals = converted < 100 && converted % 1 !== 0;

  return new Intl.NumberFormat(activeCurrency.locale, {
    style: "currency",
    currency: activeCurrency.code,
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: hasDecimals ? 2 : 0,
  }).format(converted);
};