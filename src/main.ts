import { createServer } from 'http';
import { handleIncomingHTTPRequest } from './router';

const PORT = 8082;

const mockAPIServer = createServer(handleIncomingHTTPRequest);
mockAPIServer.listen(process.env.PORT || PORT);
console.log(`HTTP server is running on port ${PORT}`)