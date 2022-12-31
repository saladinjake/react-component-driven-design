import { useState, useEffect } from "react";

// Our hook
export default function useDebounce(value: any, delay: any) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Set debouncedValue to value (passed in) after the specified delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      
      return () => {
        clearTimeout(handler);
      };
    },
  
    [value, delay]
  );

  return debouncedValue;
}
