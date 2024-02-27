import { useEffect, useState } from "react";

function useDebounce(value: string, delay: number): string {
  const [debouncedTerm, setDebouncedTerm] = useState<string>("");

  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setDebouncedTerm(value);
    }, delay);

    return () => clearTimeout(timeoutHandler);
  }, [value, delay]);

  return debouncedTerm;
}

export default useDebounce;
