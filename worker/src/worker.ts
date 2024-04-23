import * as express from 'express';
import * as ivm from 'isolated-vm';

const app = express();
const port = 3002;
app.use(express.json());

app.post('/execute', async (req, res) => {
    const { code } = req.body;
    const isolate = new ivm.Isolate({ memoryLimit: 128 }); // Limite mémoire
    const context = await isolate.createContext();
    const script = await isolate.compileScript(code);

    try {
        const result = await script.run(context);
        res.send({ status: 'success', result });
    } catch (e) {
        res.status(500).send({ status: 'error', message: e instanceof Error ? e.message : 'Unknown error' });
    }
});

app.listen(port, () => console.log(`Worker running on http://localhost:${port}`));
