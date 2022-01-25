import { createServer, IncomingMessage, ServerResponse } from 'http';

const PORT = 8082;

type Currency = "USD" | "EUR" | "GBP"

type BaseUSD = {
  USD: Partial<Record<Currency, number>>
}
type BaseEUR = {
  EUR : Partial<Record<Currency, number>>
}
type BaseGBP = {
  GBP: Partial<Record<Currency, number>>
}

const mockCurrencyDataUSD: BaseUSD = {
  USD: {
    EUR: 1.21,
    GBP: 1.11,
  },
}

const mockCurrencyDataEUR: BaseEUR = {
  EUR: {
    USD: 1.21,
    GBP: 1.11,
  },
}

const mockCurrencyDataGBP: BaseGBP = {
  GBP: {
    USD: 1.21,
    EUR: 1.11,
  },
}
const updatedMockCurrencyDataUSD = {}

let originalData = true

function handleIncomingHTTPRequest(request: IncomingMessage, response: ServerResponse) {

  // If request URL href is http://mymockapi.com/api/currencydata.json&base=USD return below
  const url = request.url
  if (originalData) {
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(mockCurrencyDataUSD))
    response.end()
  } else {
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(updatedMockCurrencyDataUSD))
    response.end()
  }

  originalData = !originalData

}

const mockAPIServer = createServer(handleIncomingHTTPRequest);

mockAPIServer.listen(PORT);