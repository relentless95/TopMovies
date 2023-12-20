import axios from "axios";
import React, { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (response.status !== "200") {
          setError(true);
          setIsLoading(false);
        }
        setData(response);
      } catch (error) {
        setError(true);
      }

      setIsFetching(false);
    };

    fetchData();
  }, [url]);
  return { isLoading, isError, data };
};

export default useFetch;
