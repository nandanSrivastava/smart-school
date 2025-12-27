const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middlewares/error.middleware');
const authRoutes = require('./features/auth/auth.routes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Smart School Backend is running (Modular)');
});

// Error Handler
app.use(errorHandler);

module.exports = app;
