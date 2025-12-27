const app = require('./app');
const { PORT } = require('./config/env');
const connectDB = require('./config/db');

// Connect to Database
connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
