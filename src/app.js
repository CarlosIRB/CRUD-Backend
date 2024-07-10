require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const personaRoutes = require('./routes/persona.routes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: function(origin, callback) {
    if (origin === 'http://localhost:3000') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors());
app.use(bodyParser.json());
app.use('/api', personaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});