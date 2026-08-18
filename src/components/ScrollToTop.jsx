import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly reset scroll to top on page navigation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Bypasses smooth animation so new page opens directly at top
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;