import http from "http";
import {writeData, readData} from `./text-service.js`

const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;

  response.setHeader(`Access-Control-Allow-Origin`, `*`);
  response.setHeader(
    `Access-Control-Allow-Methods`,
    `GET, POST, DELETE, PUT, PATCH, OPTIONS`
  );
  response.setHeader(`Access-Control-Max-Age`, 2592000);

  console.log(`URL`, url);
  console.log(`method`, method);

  if (url.startsWith(`/reviews`)) {
    if (method === `GET`) {

      const reviews readData(`db.json`);
      console.log(reviews);

      response.setHeader(`Content-Type`, `text/html`);
      response.write(`List of movies`);
      response.end();
    }

    if (method === `POST`) {
      let body = [];
      request.on(`data`, (chunk) => {
        body.push(chunk);
      });

      request.on(`end`, () => {
        const stringifiedBody = Buffer.concat(body).toString();
        const parsedBody = JSON.parse(stringifiedBody);

        console.log(parsedBody);
      });

      response.setHeader(`Content-Type`, `text/html`);
      response.write(`review added`);
      response.end();
    }

    if (method === `PUT`) {
      const urlArray = url.split(`/`);
      const id = urlArray[urlArray.length - 1];
      console.log(`url id`, id);
    }
  }

  // response.setHeader(`Content-Type`, `text/html`);
  // response.write(`<h1>Hello from the server side</h1>`);
  response.end();
});

server.listen(3000, () => {
  console.log(`Server started listening at http://localhost:3000`);
});

// https://localhost IS THE SAME AS 127.0.0.1!
