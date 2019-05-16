const request = require('supertest')
const server = require('../api/server')

describe('GET /', () => {
    it('should return 200 OK', () => {
   //will pass any expectation if you don't add return to promise
        return request(server).get('/').expect(200)
    })
})