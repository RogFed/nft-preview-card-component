const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});
