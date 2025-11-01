import React, { useState } from "react";
import axios from "axios";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await axios.post("/api/chat", { message: input });
      const botMsg = { sender: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "⚠️ Server not responding." }]);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white shadow-xl rounded-2xl border border-gray-300 flex flex-col z-[9999]">
      <div className="bg-blue-600 text-white text-center p-3 rounded-t-2xl font-semibold">
        💬 Chat with us
      </div>

      <div className="flex-1 overflow-y-auto p-3 h-80">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 p-2 rounded-lg max-w-[70%] ${
              msg.sender === "user"
                ? "bg-blue-100 self-end ml-auto text-right"
                : "bg-gray-100 text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex p-2 border-t">
        <input
          type="text"
          className="flex-1 border rounded-lg p-2 text-sm"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-blue-600 text-white px-3 py-1 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
