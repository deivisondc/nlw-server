import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  return res.json({ teste: 123 })
});

app.listen(3333);