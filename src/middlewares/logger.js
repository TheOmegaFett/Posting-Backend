const logger = (req, res, next) => {
  // do the things

  console.log(`Request info: ${req.method} ${req.url}`);

  // call the next func at the end
  next();
};

module.exports = logger;
