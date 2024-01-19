import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleLogin = () => {
    if (username.trim() !== '') {
      setLoggedIn(true);
      setMessages([{ text: `Welcome, ${username}! How can I help you?`, isUser: false }]);
    }
  };

  const handleUserInput = (inputText) => {
    const botResponse = generateBotResponse(inputText);

    setMessages([
      ...messages,
      { text: inputText, isUser: true },
      { text: botResponse, isUser: false },
    ]);
  };

  const generateBotResponse = (userInput) => {
    return `You said: ${userInput}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {!isLoggedIn ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="mb-4 text-xl font-bold">Login to ChatBot</h2>
          <input
            className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="chat-container">
            {messages.map((message, index) => (
              <div
                key={index}
                className={message.isUser ? 'user-message' : 'bot-message'}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-container mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Type your message..."
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleUserInput(e.target.value);
                  e.target.value = '';
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
