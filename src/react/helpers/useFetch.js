import { useState, useEffect } from "react";

export const useFetch = (endpoint = "", options = {}) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ state: false, errorMsg: "" });

  useEffect(() => {
    setLoading(true);
    fetch(endpoint, options)
      .then((response) => {
        if (!response.ok)
          throw new Error("Lose Internet connection. Please try againe!");

        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setResponse(data);
      })
      .catch((err) => {
        setLoading(false);
        setError({ state: true, errorMsg: err.message });
      });
  }, [endpoint]);

  return [response, loading, error];
};
