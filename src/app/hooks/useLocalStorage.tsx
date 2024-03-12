import { useEffect, useState } from "react";

const useLocalStorage = <T,>(key: string, fallback: T) => {
  const storedValue = localStorage.getItem(key);
  let parsedValue: T;

  try {
    parsedValue = storedValue ? JSON.parse(storedValue) : fallback;
  } catch (error) {
    console.error(`Error parsing JSON for key '${key}':`, error);
    parsedValue = fallback;
  }

  const [value, setValue] = useState<T>(parsedValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
