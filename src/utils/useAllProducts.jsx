//  external dependencies
import { useEffect, useState } from "react";

//  relative dependencies

export function useAllProducts () {
  const [storeData, setStoreData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/groceries?limit=20&skip=10&select=title,images,price,id", {mode: "cors"})
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setStoreData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { storeData, error, loading };
}
