const request = require('supertest')
const server = require('../api/server')

//testing status code returned correctly (200) - successful GET
describe('GET /', () => {
    it('should return 200 OK', () => {
   //will pass any expectation if you don't add return to promise
        return request(server).get('/').expect(200)
        //double checked test to fail
    })
})