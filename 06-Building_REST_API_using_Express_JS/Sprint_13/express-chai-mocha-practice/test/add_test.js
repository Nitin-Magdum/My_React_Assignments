const chai=require('chai');
const chaiHttp=require('chai-http');
let should=chai.should();
const server=require('../index');
chai.use(chaiHttp);

describe('add GET',()=>{
    it('returns usage instruction via json',(done)=>{
        chai.request(server)
        .get('/add')
        .end((err,res)=>{
            res.body.should.have.property('msg').that.equals('use a POST request')
            done();
        })
    })
})
//POST
describe('add POST',()=>{
    it('should return 7 when supplied with 5 and 2',(done)=>{
        chai.request(server)
        .post('/add')
        .set('content-type','application/json')
        .send({var1:5,var2:2})
        .end((err,res)=>{
            res.body.should.have.property('result').that.equals(7);
            done();
        })
    })
    it('should return 9 when supplied with 7 and 2',(done)=>{
        chai.request(server)
        .post('/add')
        .set('content-type','application/json')
        .send({var1:7,var2:2})
        .end((err,res)=>{
            res.body.should.have.property('result').that.equals(9);
            done();
        })
    })
})
