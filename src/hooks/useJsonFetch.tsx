import { useEffect, useState } from "react";

const useJsonFetch = (url: string, opts: RequestInit) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const responseHandler = (response: Response) => {
    if(!response.ok) {
      throw new Error(`${response.status}`) //response.statusText пустой     
    }

    response.json().then((data) => setData(data));
  }

  useEffect(() => {
    fetch(url, opts)
      .then((response) => responseHandler(response))
      .catch((error) => {setError(error.message)})
      .finally(() => setLoading(false));
  }, [url, opts]);

  return [data, loading, error];
};

export default useJsonFetch;