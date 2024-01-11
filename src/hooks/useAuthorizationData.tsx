import axios from "axios";
import { useEffect, useState } from "react";

type TData = {
  id: string;
  title?: string;
  image?: string;
  content?: string;
  login?: string;
  name?: string;
  avatar?: string;
}

const useAuthorizationData = (url: string, token: string) => {
  const [data, setData] = useState<TData|TData[]>([]);
  const [error, setError] = useState<null | number>(null);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, config)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        setData(response.data);
      })
      .catch((error) => {
        setError(error.response.status);
      });
  }, [url, token]);

  return { data, error };
};

export default useAuthorizationData;
