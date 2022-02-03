import { IncomingMessage, ServerResponse } from 'http';
import { BaseCurrency, mockCADData, mockEURData, mockGBPData, mockUSDData } from "./data";

export const respondWithCurrency = (
  mockData: BaseCurrency,
  response: ServerResponse,
): void => {
  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(mockData))
  response.end()
}
export function handleIncomingHTTPRequest(request: IncomingMessage, response: ServerResponse) {
  // All the endpoints:
  // http://45-79-65-143.ip.linodeusercontent.com:8082/USD
  // http://45-79-65-143.ip.linodeusercontent.com:8082/EUR
  // http://45-79-65-143.ip.linodeusercontent.com:8082/GBP
  // http://45-79-65-143.ip.linodeusercontent.com:8082/CAD
  const url = request.url;

  switch (url) {
    case "/USD": {
      respondWithCurrency(mockUSDData, response);
      break;
    }
    case "/EUR": {
      respondWithCurrency(mockEURData, response);
      break;
    }
    case "/GBP": {
      respondWithCurrency(mockGBPData, response);
      break;
    }
    case "/CAD": {
      respondWithCurrency(mockCADData, response);
      break;
    }
    default: {
      response.setHeader('Content-Type', 'text/html');
      response.write("<html>");
      response.write("<p>Your <span style='color: deeppink'>endpoint</span> is not matching any of the data we have available</p>");
      response.write("</html>");
      response.end();
    }
  }
}
