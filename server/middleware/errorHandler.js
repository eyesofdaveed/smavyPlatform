function errorHandler(err, req, res) {
  if (err.name === 'CastError') {
    res.status(400).json({ error: 'Invalid ID', message: err.message });
  } else if (err.name === 'ValidationError') {
    res.status(400).json({ error: err.message });
  } else if (err.name === 'MongoServerError') {
    res.status(403).json({ error: 'MongoServerError', message: err.message });
  } else {
    res.status(500).json({ error: 'Internal Server Error', message: err.message });
  }
  console.error(err);
}
  
module.exports = errorHandler;