import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import emergencyRoutes from './routes/emergencyRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'AmarSheba API' });
});

app.use('/api/emergency', emergencyRoutes);

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(error.status || 500).json({ message: error.message || 'Server error' });
});

app.listen(port, () => {
  console.log(`AmarSheba backend running on http://localhost:${port}`);
});
