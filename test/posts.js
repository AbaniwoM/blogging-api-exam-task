let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require("../app");

const API = 'http://localhost:3000'

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Posts API', () => {
    /**
     * Test the GET route
     */
    describe('GET /api/posts/', () => {
        it("It should GET all the posts", (done) => {
            chai.request(API)
                .get('/api/posts/')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('String');
                    response.title.should.be('unique');
                    response.total.length.should.be.eq(20);
                done();
                })
        });

        it("It should NOT GET all the posts", (done) => {
            chai.request(API)
                .get('/api/posts/')
                .end((err, response) => {
                    response.should.have.status(500);
                done();
                })
        });
    })

    /**
     * Test the GET (by id) route
     */

    /**
     * Test the POST route
     */
     describe('POST /api/posts/', () => {
        it("It should POST all the posts", (done) => {
            chai.request(API)
                .get('/api/posts/')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('String');
                    response.title.should.be('unique');
                    response.total.length.should.be.eq(20);
                done();
                })
        });

        it("It should NOT POST all the posts", (done) => {
            chai.request(API)
                .get('/api/posts/')
                .end((err, response) => {
                    response.should.have.status(500);
                done();
                })
        });
    })

    /**
     * Test the PUT route
     */

    /**
     * Test the DELETE route
     */
});