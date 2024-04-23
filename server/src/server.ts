import * as express from 'express';

const app = express();
const port = 3001;
app.use(express.json());

app.post('/execute-code', async (req, res) => {
    try {
        const response = await fetch('http://worker:3002/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: req.body.code }),
        });

        const result = await response.json();
        res.send(result);
    } catch (e) {
        res.status(500).send({ status: 'error', message: 'Failed to execute code.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
