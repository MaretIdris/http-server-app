# Simple HTTP server

## Endpoints

- I have created endpoints that return mock currency data for USD, EUR, GBP.
- I am hosting this server on [Linode](https://www.linode.com/)
- [Linode has great documentation](https://www.linode.com/docs/).

If the Node server application is running in Linode, all the endpoints you can 
fetch 
data from:
- http://45-79-65-143.ip.linodeusercontent.com:8082/USD
- http://45-79-65-143.ip.linodeusercontent.com:8082/EUR
- http://45-79-65-143.ip.linodeusercontent.com:8082/GBP


## Run server locally
1. `npm start` to run server locally 

When running server locally, use localhost endpoints:
- http://localhost:8082/USD
- http://localhost:8082/EUR
- http://localhost:8082/GBP

Note: There is a file in the `/src` folder called `fetchDataLocal.http` 
which has all the endpoints and you can just run all the endpoints from 
there as well.

## Tests
Ignore the main.test.ts file. I am just practicing how to break down URL 
using tests.
