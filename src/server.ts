import express from 'express';

const app = express();
const port = 3001;

// Serve static files from the 'client/public' directory. This includes HTML, CSS, JavaScript, and other assets.
app.use(express.static('client/public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
