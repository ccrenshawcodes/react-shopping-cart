//  external dependencies
import { useEffect, useState } from "react";

//  relative dependencies

const Fetch = () => {
  const [storeData, setStoreData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/groceries?limit=9&skip=10&select=title,images,price,id", {mode: "cors"})
      .then((response) => response.json())
      .then((response) => setStoreData(response))
      .then(console.log(storeData))
      .catch((error) => console.error(error));
  }, []);

  return (
    <h2>fetched the data!</h2>
  )
}

export default Fetch 