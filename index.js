import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ?? 3001;

const app = express();

app.use(function(req, res, next) {
  if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
    res.redirect(302, `https://${req.hostname}${req.originalUrl}`);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
});

app.listen(port, host, () => console.log(`Server listening at: http://${host}:${port}`));
