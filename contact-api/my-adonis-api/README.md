# My Adonis API

This is a simple API project built using the Adonis framework. The project is designed to handle form submissions and return responses in JSON format.

## Project Structure

```
my-adonis-api
├── app
│   ├── Controllers
│   │   └── Http
│   │       └── FormController.ts
│   ├── Middleware
│   │   └── index.ts
│   └── Models
│       └── index.ts
├── start
│   ├── routes.ts
│   └── kernel.ts
├── config
│   ├── app.ts
│   ├── cors.ts
│   └── database.ts
├── database
│   └── migrations
├── providers
├── contracts
├── resources
├── ace
├── .env
├── .adonisrc.json
├── package.json
├── tsconfig.json
└── README.md
```

## Features

- **Form Submission**: The API accepts form data including name, email, subject, and message.
- **JSON Response**: The API returns a structured JSON response indicating success and the submitted data.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd my-adonis-api
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Configure your environment variables in the `.env` file.

## Usage

To start the server, run:
```
npm run dev
```

You can then send a POST request to the appropriate endpoint to submit the form data.

## License

This project is licensed under the MIT License.