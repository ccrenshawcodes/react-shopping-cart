//  external dependencies
import { useEffect } from "react";

//  relative dependencies

export function useSyncLocalStorage(value) {
  useEffect(() => {
    const current = localStorage.getItem("cartItemsState");
    if (value.length >= 0 && JSON.stringify(value) !== current) {
      localStorage.clear();
      localStorage.setItem("cartItemsState", JSON.stringify(value));
    }
  }, [value]);
}
