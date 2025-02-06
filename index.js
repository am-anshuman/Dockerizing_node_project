const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'OK'
    });
});

app.listen(3000, () => {
    console.log("Started server at PORT 3000");
});