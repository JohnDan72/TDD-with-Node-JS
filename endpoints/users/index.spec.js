const handler = require('./index');

describe('Endpoints', () => {
    describe('users', () => {
        describe('get', () => {
            it('return users in json format' , async () => {
                const axios = {
                    get: jest.fn().mockResolvedValue({ data: 1 }),
                }
                const res = {
                    status: jest.fn().mockReturnThis(),
                    json: jest.fn(),
                }
                // console.log(axios.get)

                await handler({ axios }).get( {} , res )

                // console.log(res.status.mock)
                // console.log(res.status.mock.calls)

                expect(res.status.mock.calls).toEqual([[200]])
                expect(res.json.mock.calls).toEqual([[1]])
            })
        })

        describe('post', () => {
            it('create a resource' , async () => {
                const axios = {
                    post: jest.fn().mockResolvedValue({ data: 1 }),
                }
                const req = {
                    body: 'request body',
                }
                const res = {
                    status: jest.fn().mockReturnThis(),
                    json: jest.fn(),
                }
                // console.log(axios.get)

                await handler({ axios }).post( req , res )

                // console.log(res.status.mock)
                // console.log(res.status.mock.calls)

                expect(res.status.mock.calls).toEqual([[201]])
                expect(res.json.mock.calls).toEqual([[1]])
                expect(axios.post.mock.calls).toEqual([
                    ['https://jsonplaceholder.typicode.com/users/' , 'request body']
                ])
            })
        })

        describe('put', () => {
            it('update a resource' , async () => {
                const axios = {
                    put: jest.fn().mockResolvedValue({ data: 1 }),
                }
                const req = {
                    body: 'request body',
                    params: { uid: 100 }
                }
                const res = {
                    sendStatus: jest.fn(),
                }

                await handler({ axios }).put( req , res )

                expect(res.sendStatus.mock.calls).toEqual([[204]])
                expect(axios.put.mock.calls).toEqual([
                    [`https://jsonplaceholder.typicode.com/users/100` , 'request body']
                ])
            })
        })

        describe('delete', () => {
            it('delete a resource' , async () => {
                const axios = {
                    delete: jest.fn().mockResolvedValue({ data: 1 }),
                }
                const req = {
                    params: { uid: 101 }
                }
                const res = {
                    sendStatus: jest.fn(),
                }

                await handler({ axios }).delete( req , res )

                expect(res.sendStatus.mock.calls).toEqual([[204]])
                expect(axios.delete.mock.calls).toEqual([
                    [`https://jsonplaceholder.typicode.com/users/101`]
                ])
            })
        })
    })
})

