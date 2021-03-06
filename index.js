import '@babel/polyfill';
import express from 'express';
import cors from 'cors';
import connectDb from './config/db';
import routes from './routes/index';

const ApiPrefix = '/api/v1';
const app = express();
connectDb();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(ApiPrefix, routes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Help is here' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Admin support is here on Port ${PORT}`));