const path = require('path');
const morgan = require('morgan');
const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const proxy = require('express-http-proxy');

// Some basic configurations(setting static files path, rate limiter, cookie parser)

// Initialize app
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 100,
  message: 'Too many requests from this IP, please try again in an hour!'
});

app.use('/', limiter);

app.use(express.json({
  limit: '10kb'
}));
app.use(cookieParser());

app.use(mongoSanitize());

app.use(xss());
app.use(compression());

app.use('/unsplash', proxy(process.env.UNSPLASH_API, {
  proxyReqPathResolver: (req) => {
    const parts = req.url.split('?');

    return `${parts[0]}?client_id=${process.env.UNSPLASH_ACCESS_KEY}` + (parts.length ? `&${parts[1]}` : '');
  }
}));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'), err => {
    if (err) console.log(err);
  })
});

module.exports = app;