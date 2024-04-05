const express = require('express');
const path = require('path');

let initial_path = path.join(__dirname, "docs");

let app = express();
app.use(express.static(initial_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.get('/:id', (req, res) => {
    res.sendFile(path.join(initial_path, "about.html"));
})

app.use((req, res) => {
    res.json("404");
})

app.listen(8080, () => {
    console.log('listening on port http://localhost:8080');
})