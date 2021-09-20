const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const path = require('path');

const app = express();

app.use(history());
app.use(serveStatic(path.join(__dirname, 'build')));

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('############# Server is running #############');
    console.log(`http://localhost:${port}`);
})
