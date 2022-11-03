import express from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';

import User from './routes/user';

config();

const app = express();
const port = 5000;

connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', User);

app.listen(port, () => {
  console.log(`Endpoint: http://localhost:${port}`);
});
