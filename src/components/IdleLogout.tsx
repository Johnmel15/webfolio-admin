import { useEffect, useRef } from "react";

interface IdleLogoutProps {
  logoutCallback: () => void;
  timeout?: number; // Allow custom timeout (default to 10 minutes)
}

const IdleLogout: React.FC<IdleLogoutProps> = ({
  logoutCallback,
  timeout = 1800000,
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const resetTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        logoutCallback(); // Logout user after timeout
      }, timeout);
    };

    // Track user interactions
    const events = ["mousemove", "keydown", "click", "scroll"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer(); // Initialize timer

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [logoutCallback, timeout]);

  return null; // This component does not render anything
};

export default IdleLogout;
