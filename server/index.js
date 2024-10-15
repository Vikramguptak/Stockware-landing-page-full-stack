const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logisticsRoutes = require('./routes/logistics');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/logistics', logisticsRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});