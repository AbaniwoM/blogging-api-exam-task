const request = require('supertest')
const UserModel = require('../model/User')
const app = require('../app');
const connect = require('../database/index');

describe('Auth: Register', () => {
    let conn;

    beforeAll(async () => {
        conn = await connect()
    })

    afterEach(async () => {
        await conn.cleanup()
    })

    afterAll(async () => {
        await conn.disconnect()
    });

    it('should register a user', async () => {
        const response = await request(app).post('/register')
        .set('content-type', 'application/json')
        .send({ 
            firstName: "Juliana",
            lastName: "Peterson",
            email: "julianapeterson@gmail.com",
            password: "peterson123456"
        })

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('message')
        expect(response.body).toHaveProperty('user')      
    });


    it('should login a user', async () => {
        // create user in out db
        const user = await UserModel.create({ email: 'julianapeterson@gmail.com', password: 'peterson123456'});

        // login user
        const response = await request(app)
        .post('/login')
        .set('content-type', 'application/json')
        .send({ 
            email: 'julianapeterson@gmail.com', 
            password: 'peterson123456'
        });
    

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('token')      
    });
});