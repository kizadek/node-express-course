const http = require("http");
const url = require("url");
const querystring = require("querystring");

http
  .createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Feel free to add query parameters to the end of the url");

    const uri = "http://localhost:8080/?key=200&name=mupela";
    const qs = "key=201&name=mupela";

    console.log(querystring.parse(qs));
    // > { key: '201', name: 'mupela' }
  })
  .listen(8080, console.log(`server is runing`));
