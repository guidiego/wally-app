const { createServer } = require('http');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const dir = "./src"
const app = next({ dev, dir });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    createServer((req, res) => {
      handle(req, res);
    })
      .listen(3000, "0.0.0.0", (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000');
      });
  });
