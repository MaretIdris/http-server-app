# Simple HTTP server

This is a simple server application that you can run locally in your computer. If you make an API
call

## Run the server

1. `npm install` to install all the dependencies.
2. `npm run start` to run the server application locally.

## Sample data

### The shape of the data

```json
{
  "CAD": {
    "USD": 0.79,
    "EUR": 0.69,
    "GBP": 0.58
  }
}
```

All the data served is mock data and will not change. When running server locally, use localhost
endpoints when making an API call:

- http://localhost:8082/USD
- http://localhost:8082/EUR
- http://localhost:8082/GBP
- http://localhost:8082/CAD

**Note:** There is a file in the `/src` folder called `fetchDataLocal.http` which has all the
endpoints and you can just run all the endpoints from there as well.

## Tests

- `main.test.ts` is the place you can write your own tests.
- I am practicing in `main.test.ts` file how to break down URLs using tests.

## Linode endpoints

- I have created endpoints that return mock currency data for USD, EUR, GBP, CAD.
- I am hosting this server on [Linode](https://www.linode.com/).
- [Linode has great documentation](https://www.linode.com/docs/).

If the Node server application is running in Linode, all the endpoints you can fetch data from:

- http://45-79-65-143.ip.linodeusercontent.com:8082/USD
- http://45-79-65-143.ip.linodeusercontent.com:8082/EUR
- http://45-79-65-143.ip.linodeusercontent.com:8082/GBP
- http://45-79-65-143.ip.linodeusercontent.com:8082/CAD
