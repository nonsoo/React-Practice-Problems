# Server Menu

Here we are building an express server that allows clients to perform `CRUD` operations and receive the appropriate response.

## Development

Install the package using the following command in your terminal

```bash
npm install
```

To start the local server on port `5000`, run

```bash
npm run dev
```

Open Postman or any API platform for developers and make a `GET` request to the following endpoint: `http://localhost:5001/menu`. This endpoint should respond with a list of all the menu items that are available.

## Constant values

API_KEY = `a05e7d6beb2f7a3517a89a11bbe7d381`

## Environment variables

Create a `.env` file within this directory and add the following environment variables

```bash
PORT=5001
CORS_ORIGIN ="http://localhost:3000"
```
