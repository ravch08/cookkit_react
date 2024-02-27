import { useEffect, useState } from "react";

interface FetchReturnType<Data> {
  data: Data | null;
  error: string | null;
  isLoading: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useFetch<Data = any>(url: string): FetchReturnType<Data> {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchData() {
    try {
      setIsLoading(true);

      const response = await fetch(url);
      if (!response.ok) throw new Error(response.statusText);
      const fetchedData: Data = await response.json();

      setData(fetchedData);
      setError(null);
    } catch (error) {
      setError(`Something went wrong! ${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, error, isLoading };
}

export default useFetch;
