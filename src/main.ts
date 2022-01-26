import { createServer, IncomingMessage, ServerResponse } from 'http';

const PORT = 8082;

type Currency = "USD" | "EUR" | "GBP"

interface BaseUSD {
  USD: Partial<{[P in Currency]: number}>
}

interface BaseEUR {
  EUR: Partial<Record<Currency, number>>
}

interface BaseGBP {
  GBP: Partial<Record<Currency, number>>
}

const mockUSDData: BaseUSD = {
  USD: {
    EUR: 0.88,
    GBP: 0.74
  }
}

const mockEURData: BaseEUR = {
  EUR: {
    USD: 1.13,
    GBP: 0.84
  }
}

const mockGBPData: BaseGBP = {
  GBP: {
    USD: 1.35,
    EUR: 1.20
  }
}

function handleIncomingHTTPRequest(request: IncomingMessage, response: ServerResponse) {
  // All the endpoints:
  // http://localhost:8082/USD
  // http://localhost:8082/EUR
  // http://localhost:8082/GBP

  const url = request.url

  const respondWithCurrency = (mockData: BaseUSD | BaseEUR | BaseGBP) => {
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(mockData))
    response.end()
  }

  switch (url) {
    case "/USD": {
      respondWithCurrency(mockUSDData)
      break
    }
    case "/EUR": {
      respondWithCurrency(mockEURData)
      break
    }
    case "/GBP": {
      respondWithCurrency(mockGBPData)
      break
    }
    default: {
      response.setHeader('Content-Type', 'text/html');
      response.write("<html>")
      response.write("<p>Your <span style='color: deeppink'>endpoint</span> is not matching any of the data we have available</p>")
      response.write("</html>")
      response.end()
    }
  }

}

const mockAPIServer = createServer(handleIncomingHTTPRequest);

mockAPIServer.listen(process.env.PORT || PORT);