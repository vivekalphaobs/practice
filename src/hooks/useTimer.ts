import { useState, useEffect } from "react";

const useTimer = (initialSeconds: number) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialSeconds);

  useEffect(() => {
    // 1. Create the interval only ONCE when the component mounts
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        // 2. Check if we've reached 0 inside the state setter
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // 3. Cleanup on unmount
    return () => clearInterval(timer);
  }, []); // <-- Empty array: effect only runs once!

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return formatTime(timeLeft);
};

export default useTimer;
