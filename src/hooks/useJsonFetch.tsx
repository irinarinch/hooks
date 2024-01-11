import { useEffect, useState } from "react";

const useJsonFetch = (url: string, opts: RequestInit) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const responseHandler = (response: Response) => {
    if(!response.ok) {
      throw new Error(`${response.status}`)  
    }

    response.json().then((data) => setData(data));
  }

  useEffect(() => {    
    fetch(url, opts)
      .then((response) => responseHandler(response))
      .catch((error) => {setError(error.message)})
      .finally(() => setLoading(false));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
          // React Hook useEffect has missing dependencies: 'opts' and 'url'. Either include them or remove the dependency array  react-hooks/exhaustive-deps
  return [data, loading, error];
};

export default useJsonFetch; 