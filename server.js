const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory where 'index.html' is located.
app.use(express.static('public'));

// Set the root route to serve 'index.html'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));