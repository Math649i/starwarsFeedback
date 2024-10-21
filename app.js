const express = require('express');
const app = express();

// Importér middleware
const logger = require('./middleware/logger');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler'); // Importér 404 og error handler

// Importér ruter
const characterRoutes = require('./routes/routes');

// Middleware til at logge alle anmodninger
app.use(logger);

// Middleware til at parse JSON-data
app.use(express.json());

// Ruter til Star Wars karakterer
app.use('/api', characterRoutes);

// Tilføj en rute til forsiden (root /)
app.get('/', (req, res) => {
    res.send('Velkommen til Star Wars API! Brug /api/characters for at se karakterer.');
});

// 404-fejlhåndtering
app.use(notFoundHandler);

// Generel fejlhåndtering
app.use(errorHandler);

// Start serveren
const port = 3000;
app.listen(port, () => {
    console.log(`Serveren kører på http://localhost:${port}`);
});
