import React, { useState } from 'react';
import { 
    Container,
    Button,
    Typography,
    Skeleton,
    Stack,
    TextField,
    Grid
} from "@mui/material";
import Textarea from '@mui/joy/Textarea';

import api from './api';

const App = () => {
    const [text, setText] = useState('');
    const [summary, setSummary] = useState('');
    const [loading, updateLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        updateLoading(true);
        const currentText = text;
        const response = await api.post(`/predict?text=${text}`, currentText, { headers: { 'Content-Type': 'application/json' } });
        setSummary(response.data);
        updateLoading(false);
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="h3" align='center' className="text-to-summarize">Text to Summarize</Typography>
                    <Textarea
                        placeholder="Enter text here..."
                        required
                        sx={{ mb: 1 }}
                        onChange={(e) => setText(e.target.value)}
                        maxRows={25}
                    />
                    <Button onClick={handleSubmit} variant="contained">Summarize</Button>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h3" className="summary" align='center'>Summary</Typography>
                    {loading ? (
                        <Stack>
                            <Skeleton variant="circular" width={80} height={80} />
                            <Skeleton />
                            <Skeleton animation="wave" />
                            <Skeleton animation="wave" variant="rectangular" width={640} height={480} />
                        </Stack>
                    ) : summary ? (
                        <Stack>
                            <Typography variant="body1" contentEditable={true} className="summary-text">{summary}</Typography>
                        </Stack>
                    ) : null}
                </Grid>
            </Grid>
        </Container>
    );

}

export default App;
