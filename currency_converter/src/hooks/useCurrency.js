import { useEffect, useState } from "react";
function useCurrency(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    if (!currency) return; // prevent empty fetch
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())// all the amount of current currency in an Object Notation
      .then((res) => {
        setData(res[currency]);
      })
      .catch((err) => console.error("Error fetching currency:", err));
  },[currency]);
  return data;
}
export default useCurrency;
