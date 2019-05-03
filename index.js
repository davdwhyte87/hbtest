import express from 'express';

// Create global app object
const app = express();

app.use((req, res, next) => {
  res.json({ message: "jseee" })
});

export default app;