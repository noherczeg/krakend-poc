const express = require('express');

const app = express();
const PORT = 3001;

app.get('/api/products', (req, res) => {
  const delay = 100 + (Math.random() * 500);

  setTimeout(() => {
    res.json({
      service: 'service-b',
      products: [
        { id: 1, name: 'Some Phone' },
        { id: 2, name: 'Some Book' },
      ]
    });
  }, delay);
});

app.get('/api/some-object', (req, res) => {
  res.json({
    prop1: 'Hello',
    someDate: '2020-08-12'
  });
});

app.listen(PORT);

console.log(`service-b listening on http://localhost:${PORT}`);
