const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.send('Yanick der mega tester');
  });

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

app.post('/', (req, res) => {
    res.send('wow' + req);
  });


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});