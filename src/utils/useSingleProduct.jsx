//  external dependencies
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

//  relative dependencies

export function useSingleProduct () {
  const [cartData, setCartData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems] = useOutletContext();

  useEffect(() => {
    fetchMultiple(cartItems)
    .then((response) => setCartData(response))
    .catch((error) => setError(error))
    .finally(() => setLoading(false));
  }, [cartItems]);

  return { cartData, error, loading };
}

async function fetchMultiple (arr) {
  if (arr.length <= 0) {
    return;
  }

  const cleanData = dedupe(arr);
  const result = [];

  for (let i = 0; i < cleanData.length; i++) {
    const response = await fetch(`https://dummyjson.com/products/${cleanData[i]}`, {mode: "cors"});
    if (response.status >= 400) {
      throw new Error("server error");
    }
    const data = await response.json();
    result.push(data);
  }
  return result;
}

function dedupe (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
