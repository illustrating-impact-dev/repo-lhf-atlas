const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'viz' directory
app.use(express.static('viz'));

// Define routes for each HTML file
// Convert filenames to URL-friendly format and remove .html extension

app.get('/infographic', (req, res) => {
    res.sendFile(path.join(__dirname, 'viz', 'infographic.html'));
});

app.get('/winter-shelters', (req, res) => {
    res.sendFile(path.join(__dirname, 'viz', 'winter_shelters.html'));
});

app.get('/youth-services', (req, res) => {
    res.sendFile(path.join(__dirname, 'viz', 'youth_services.html'));
});

// Add a basic home page that lists all available routes
app.get('/', (req, res) => {
    res.send(`
        <h1>Available Pages</h1>
        <ul>
            <li><a href="/winter-shelters">Winter/Night Shelters</a></li>
            <li><a href="/infographic">Infographic</a></li>
            <li><a href="/youth-services">Youth Services</a></li>
        </ul>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});