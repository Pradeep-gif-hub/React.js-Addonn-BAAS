import React, { useState } from "react";

const LandingPage = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState("");

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div
      style={{
        minHeight: "400vh",
        background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1rem", color: "#333" }}>
          💱 Currency Converter
        </h2>

        <div style={{ marginBottom: "1rem" }}>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            style={{
              width: "45%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          >
            <option>USD</option>
            <option>EUR</option>
            <option>INR</option>
            <option>GBP</option>
            <option>JPY</option>
          </select>

          <button
            onClick={handleSwap}
            style={{
              backgroundColor: "#74b9ff",
              border: "none",
              borderRadius: "50%",
              color: "#fff",
              width: "35px",
              height: "35px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            ↔
          </button>

          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            style={{
              width: "45%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          >
            <option>INR</option>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>JPY</option>
          </select>
        </div>

        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#00cec9",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0984e3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#00cec9")}
        >
          Convert
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
