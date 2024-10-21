
//bare en error handler
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Noget gik galt!');
};

module.exports = errorHandler;
