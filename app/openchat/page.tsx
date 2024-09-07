"use client";

import { useState } from "react";
import axios from "axios";

// components
import Navbar from "../components/Navbar";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("./OpenAI", { prompt });
      setResponse(res.data.choices[0].text);
    } catch (error) {
      setError("Error contacting OpenAI API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ color: "#333" }}>Chat AI</h1>
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows="5"
            cols="50"
            placeholder="Type your prompt here..."
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />
          <br />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {response && (
          <div>
            <h2 style={{ color: "#333" }}>Response:</h2>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}
