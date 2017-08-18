const express = require('express');
const path = require('path');

/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();

app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, (err) => {
        if (err) {
                logger.log('error', err);
        }
});