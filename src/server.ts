import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json());

app.get('/users', (req, res) => {
  return res.json({ teste: 123 })
});

app.listen(3333);