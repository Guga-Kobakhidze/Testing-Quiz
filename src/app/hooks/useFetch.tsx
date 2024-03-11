import { useEffect, useState } from "react";
import { DataInterface } from "../interfaces/interfaces";

const useFetch = (url: string) => {
  const [data, setData] = useState<DataInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData: DataInterface[] = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(`Error fetching data: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
