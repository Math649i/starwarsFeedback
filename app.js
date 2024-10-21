const express = require('express');
const app = express();

// Import middleware
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

// Import ruter
const characterRoutes = require('./routes/routes');

// Middleware til at logge vores anmodninger
app.use(logger);

// Middleware til at parse/kunne bruge JSON-data
app.use(express.json());

// Ruter til Star Wars karakterer
app.use('/api', characterRoutes);

// Tilføj en rute til forsiden (root /)
app.get('/', (req, res) => {
    res.send('Velkommen til Star Wars! skriv i browseren localhost3000/api/characters for at se Start Wars universet');
});

// Fejlhåndtering middleware
app.use(errorHandler);

// Start serveren
const port = 3000;
app.listen(port, () => {
    console.log(`Serveren kører på http://localhost:${port}`);
});
