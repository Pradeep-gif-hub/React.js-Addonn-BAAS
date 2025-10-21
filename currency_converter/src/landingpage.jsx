import { useState, useEffect } from "react";
import useCurrency from "./hooks/useCurrency.js"; // we fecthed the rates from hook 

function LandingPage(currency) {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [currencyList, setCurrencyList] = useState([]);

  // all curecny from api
  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
      .then((res) => res.json())
      .then((data) => setCurrencyList(Object.keys(data)))// all currency as key fecthed from api
      .catch((err) => console.error("Error fetching currencies:", err));
  }, [currency]);

  // fetching conversion rates using your hook
  const data = useCurrency(from);
  const rate = data[to];

  const handleConvert = () => {
    if(rate) setResult((amount*rate).toFixed(2));
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setResult(null);
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100wh",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0077ff, #00d4ff)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px 40px",
          borderRadius: "16px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          width: "380px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}> Currency Converter</h2>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            style={{
              width: "45%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          >
            {currencyList.map((cur) => (
              <option key={cur} value={cur}>
                {cur.toUpperCase()}
              </option>
            ))}
          </select>

          <button
            onClick={handleSwap}
            style={{
              border: "none",
              background: "#0077ff",
              color: "#fff",
              borderRadius: "50%",
              padding: "5px 10px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Swap
          </button>

          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            style={{
              width: "45%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          >
            {currencyList.map((cur) => (
              <option key={cur} value={cur}>
                {cur.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleConvert}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            background: "#0077ff",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px",
            transition: "0.3s",
          }}
        >
          Convert
        </button>

        {result && (
          <h3 style={{ marginTop: "20px", color: "#333" }}>
            {amount} {from.toUpperCase()} ={" "}
            <span style={{ color: "#0077ff" }}>
              {result} {to.toUpperCase()}
            </span>
          </h3>
        )}
      </div>
    </div>
  );
}
export default LandingPage;