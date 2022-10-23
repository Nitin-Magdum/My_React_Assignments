const chai = require("chai");
const chaiHttp = require("chai-http");
let should = chai.should();
const server = require("../index");
chai.use(chaiHttp);
describe("/GET", () => {
  it("return the home page", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.contain("Welcome to Express");
        done();
      });
  });
});
