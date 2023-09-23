const http = require('http');

const port = 3004; 

const server = http.createServer((req, res) => {

  if (req.url.startsWith('/numbers') && req.method === 'GET') {

    const urlParams = new URLSearchParams(req.url.split('?')[1]);
    const urls = urlParams.getAll('url');

    if(!urls || urls.length === 0) {
      res.writeHead(400);
      res.end('No urls provided');
      return;
    }

    // Do something with list of urls like:
    console.log(urls);

    res.writeHead(200);
    res.end();

  } else {

    res.writeHead(404);
    res.end();

  }

});

server.listen(port, () => {
  console.log(`Server running on port ${port}`); 
});