// 404-fejlhåndtering
const notFoundHandler = (req, res, next) => {
    res.status(404).send('404 - Siden blev ikke fundet!');
};

// Generel fejlhåndtering
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Noget gik galt!');
};

module.exports = {
    notFoundHandler,
    errorHandler
};
