const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Define a route for GET /
app.get('/', (req, res) => {
    res.send('hello world!');
});

// Start the server
app.listen(8080, () => {
    console.log('Listening on port 8080');
});
