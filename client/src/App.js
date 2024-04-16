import React, { useState } from 'react';
import { 
    Container,
    Button,
    Typography,
    Skeleton,
    Stack,
    TextField
} from "@mui/material";
import Textarea from '@mui/joy/Textarea';


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
        <Container>
            <Typography variant="h2" className="heading">Text Summarizer</Typography>
            <Textarea
                placeholder="Enter text here..."
                required
                sx={{ mb: 1 }}
                onChange={(e) => setText(e.target.value)}

            />
            <Button onClick={handleSubmit} variant="contained">Summarize</Button>
            {loading ? (
                <Stack>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" variant="rectangular" height={240}/>
                </Stack>
            ) : summary ? (
                <Stack>
                    <Typography variant="h3" className="summary">Summary</Typography>
                    <Typography variant="p">{ summary }</Typography>
                </Stack>
            ):null}

        </Container>
    );

}

export default App;
