var http = require("http");
var url = require("url");

var localIP = "127.0.0.1";
var port = 3400;

var defaultName = " ";

var server = http
  .createServer(function (req, res) {
    console.log("request of " + req.url);

    var urlObj = url.parse(req.url, true);

    for (q in urlObj["query"]) {
      console.log(q + " = " + urlObj["query"][q]);
    }

    if (urlObj["query"]["thename"] != undefined) {
      console.log(
        "updating 'defaultName' variable to " + urlObj["query"]["thename"]
      );

      defaultName = urlObj["query"]["thename"];
    }

    res.writeHead(300, { "Content-Type": "text/html" });

    res.write("<html>\n<body>\n");
    res.write("<h1>Hello " + defaultName + "<h1>\n");
    res.write(
      '<form method="GET">\n<input type="text" placeholder="type a name" name="thename">\n<input type="submit" value="submit new name">\n</form>\n'
    );
    res.write("</body>\n</html>");

    res.end();
  })
  .listen(port, localIP);

console.log("Server running at http://" + localIP + ":" + port + "/");
const querystring = require("querystring");
const url2 = "http://localhost:3400/?thename=ritikg";
console.log(querystring.parse(url2));
