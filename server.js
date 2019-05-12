const express = require('express');
const next = require('next');

const Cookies = require('cookies');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const fs = require('fs');

const fetch = require('isomorphic-unfetch');
const bodyParser = require('body-parser');

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));

    server.get('/logout', (req, res) => {
      const cookies = new Cookies(req, res);
      //setting cookie with no value to delete it
      cookies.set('QuizMaster3000Session');

      res.redirect(`/`);
    });

    server.post('/api', (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      handleAPIRequest(req).then(respons => {
        res.send(respons);
      });
    });

    server.get('/robots.txt', (req, res) => {
      res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
      return fs.createReadStream('./static/robots.txt').pipe(res);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

async function handleAPIRequest(req) {
  const url = req.body.endpoint;
  const postdata = req.body.payload;

  const customHeaders = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postdata),
  };

  const res = await fetch(url, customHeaders);
  const data = await res.json();

  return JSON.stringify(data);
}
