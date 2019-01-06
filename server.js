import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

import clients from './routes/api/clients';
import policies from './routes/api/policies';
import account from './routes/api/account';
import invalidUrl from './routes/api/invalidUrl';

import { mongoURI as db } from './config/keys';

const app = express();

app.use(bodyParser.json());

mongoose
  .set('useCreateIndex', true)
  .set('useFindAndModify', false)
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

/* API Routes */
app.use('/api/clients', clients);
app.use('/api/policies', policies);
app.use('/api/account', account);
app.use('/api/*', invalidUrl);

/* Serve static assets if in production */
if (process.env.NODE_ENV === 'production') {
  /* Set static folder */
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));