require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { swaggerUi, swaggerDocs } = require('./swagger');  // Correctly import them here
const authRoutes = require('./routes/auth');
const secureRoutes = require('./routes/secure');
const fieldRoutes = require('./routes/field');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected.'))
  .catch((err) => console.error('MongoDB connection failed:', err));

// Swagger documentation route
app.get("/api-docs/swagger.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerDocs); // Send the generated swaggerDocs
});

// Use Swagger UI for API docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/auth', authRoutes);
app.use('/api', secureRoutes);
app.use('/field', fieldRoutes);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
