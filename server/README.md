# Rules for API interface between client and server

- Query params only for filtering requests
- Body for passing object data
- Request params for single findOne/updateOne methods

For auth
node require("crypto").randomBytes(64).toString('hex')
