const http = require("http");
const { add, sub, mul, div } = require("../Server/functions");
const { Add, Sub, Mul, Div } = require("../Server/thirdPartyModule");

//function for Calling Core Modules
var server = http.createServer((req, res) => {
    res.write("Result When Core Modules Used");
    res.write("\n");

    var result = add(2, 3);
    res.write("Addition:");
    res.write(result.toString());

    res.write("\n");
    var result = sub(5, 3);
    res.write("Substraction:");
    res.write(result.toString());

    res.write("\n");
    var result = mul(5, 2);
    res.write("Multiplication:");
    res.write(result.toString());

    res.write("\n");
    var result = div(10, 2);
    res.write("Division:");
    res.write(result.toString());
    res.write("\n");
    res.write("\n");

    res.write("Result When Third Party Modules Used");
    res.write("\n");

    var result = Add(0.1, 0.3);
    res.write("Addition:");
    res.write(result.toString());

    res.write("\n");
    var result = Sub(0.4, 0.2);
    res.write("Substraction:");
    res.write(result.toString());

    res.write("\n");
    var result = Mul(0.07, 100);
    res.write("Multiplication:");
    res.write(result.toString());

    res.write("\n");
    var result = Div(1000, 8.2);
    res.write("Division:");
    res.write(result.toString());
    res.end();
});

server.listen(3000);
