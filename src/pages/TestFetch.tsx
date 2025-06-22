import React, { useState } from "react";

function TestFetch() {
  const [question, setQ] = useState("");
  const [answer, setA] = useState("");

  const sendChat = async () => {
    const res = await fetch("http://localhost:5000/api/chatbot/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, answer })
    });
    const data = await res.json();
    alert("Chat saved: " + data.message);
  };

  const sendAdvice = async () => {
    const res = await fetch("http://localhost:5000/api/advice/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Start Investing Early",
        category: "Finance",
        description: "Investing early helps compound returns."
      })
    });
    const data = await res.json();
    alert("Advice saved: " + data.message);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>ChatBot Save Test</h2>
      <input value={question} onChange={(e) => setQ(e.target.value)} placeholder="Question" />
      <input value={answer} onChange={(e) => setA(e.target.value)} placeholder="Answer" />
      <button onClick={sendChat}>Save Chat</button>

      <hr />

      <h2>Advice API Test</h2>
      <button onClick={sendAdvice}>Save Advice</button>
    </div>
  );
}

export default TestFetch;
