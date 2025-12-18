const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let savedData = {}; // To store POSTed or PUT data, let written in {}

// POST request - Save new data
app.post('/api/data', (req, res) => {
    savedData = req.body;
    console.log('POST /api/data:', savedData);
    res.json({ received: savedData });
});

// GET request – Retrieve saved data
app.get('/api/data', (req, res) => {
    console.log('GET /api/data');
    res.json(savedData);
});

// PUT request – Update the saved data
app.put('/api/data', (req, res) => {
    savedData = { ...savedData, ...req.body }; // Merge new fields
    console.log('PUT /api/data:', savedData);
    res.json({ updated: savedData });
});

// patch request - it not replace the whole object like put
app.patch('/api/data', (req, res) => {
    savedData = { ...savedData, ...req.body }; // Merge only specified fields
    console.log('PATCH /api/data:', savedData);
    res.json({ patched: savedData });
});

// delete endpoint
app.delete('/api/data', (req, res) => {
    savedData = {}; // Clear the saved data
    console.log('Delete /api/data');
    res.json({ message: 'Data deleted successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
