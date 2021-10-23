import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
// Routes
import workoutRoutes from './routes/workouts.js';
import adminRoutes from './routes/admin.js';
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Endpoints
app.use('/workouts', workoutRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('Hello to shonenfit, if you see this its working!!');
});
app.get('/favicon.ico', (req, res) => res.status(200));

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
