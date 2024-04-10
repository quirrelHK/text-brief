import React, { useState } from 'react';
import axios from 'axios';
import api from './api';


const App = () => {
    const [text, setText] = useState('');
    const [summary, setSummary] = useState('');
    const [loading, updateLoading] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        updateLoading(true);
        console.log("text",text);
        const currentText = text;
        const response = await api.post(`/predict?text=${text}`,currentText,  {headers: { 'Content-Type': 'application/json' }});
        setSummary(response.data);
        console.log({summary});
        updateLoading(false);
    };

    return (
        <div>
            <h1>Text Summarizer</h1>
            <textarea
                rows="10"
                cols="50"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text here..."
            ></textarea>
            <br />
            <button onClick={handleSubmit}>Summarize</button>
            <h2>Summary</h2>

            {loading ? (
                <p>Loading...</p>
            ) : summary ? (
                <p>{summary}</p>
            ) : null}
        </div>
    );

}

export default App;
