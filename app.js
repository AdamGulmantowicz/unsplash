const dotenv = require('dotenv');
// Listen for errors

process.on('uncaughtException', err => {
  console.log(err.name, err.message);
  console.log(err);
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  process.exit(1);
});

// Set file with envs
dotenv.config({
  path: './.env'
});

const app = require('./app-config');

// Start listening to app
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! Shutting down...');
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
