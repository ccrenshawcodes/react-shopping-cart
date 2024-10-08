//  external dependencies
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

//  relative dependencies

export function useSingleProduct () {
  const [storeData, setStoreData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems] = useOutletContext();

  useEffect(() => {
    iterate(cartItems, 'https://dummyjson.com/products')
    .then((response) => setStoreData(response))
    .catch((error) => {
      setError(error);
      console.log(error)
    })
    .finally(() => setLoading(false));
  });

  return { storeData, error, loading };
}

async function iterate (arr, url) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const response = await fetch(`${url}/${arr[i]}`, {mode: "cors"});
    const data = await response.json();
    result.push(data);
  }
  return result;
}
