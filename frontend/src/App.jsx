import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch("http://localhost:5000/api/test")
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch(() => setMessage("Error fetching data"));
    }, []);

    return (
        <div className="app-container">
            <h1>Vite + React + Node</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
