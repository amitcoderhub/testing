import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch("https://testing-d81w1lbes-amit-chauhans-projects-c077ecc9.vercel.app/api/test")
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
