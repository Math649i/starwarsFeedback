
// gør så vi fortsætter til næste middleware eller rute
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

module.exports = logger;
