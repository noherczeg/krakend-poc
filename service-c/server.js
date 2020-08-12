const express = require('express');

const app = express();
const PORT = 3002;

app.get('/api/products', (req, res) => {
  const delay = 100 + (Math.random() * 500);

  setTimeout(() => {
    res.json({
      service: 'service-c',
      products: [
        { id: 1, name: 'Some Phone' },
        { id: 2, name: 'Some Book' },
      ]
    });
  }, delay);
});

app.get('/api/another-object', (req, res) => {
  res.json({
    more: [1, 2, 3],
  });
});

app.listen(PORT);

console.log(`service-c listening on http://localhost:${PORT}`);
