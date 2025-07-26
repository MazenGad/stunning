# Website Idea Generator

A full-stack web application that generates website sections based on user prompts. Built with a modern tech stack including Next.js, NestJS, and MongoDB.

![Screenshot of the Website Idea Generator App](https://i.imgur.com/YOUR_SCREENSHOT_URL.png) <!-- Optional: Add a screenshot URL -->

## ✨ Features

- **Modern Tech Stack**: Next.js 14, NestJS, MongoDB.
- **TypeScript**: Fully type-safe codebase.
- **Responsive UI**: Clean and functional UI built with Tailwind CSS.
- **Database Fallback**: Works seamlessly with or without a database connection (returns mock data).
- **Easy Setup**: Get up and running with just two commands.
- **Lean Codebase**: No boilerplate or unused code.

## 🚀 Quick Start

Get the project running in under a minute.

### Prerequisites

- Node.js (v18 or higher)
- npm (or yarn/pnpm)

### 1. Installation

Install dependencies for the root, frontend, and backend.

```bash
npm run install:all
```

### 2. Run the Development Servers

This single command starts both the frontend and backend in watch mode.

```bash
npm run dev
```

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:3001

The app will now be running. It will connect to a local MongoDB instance if available, or run in fallback mode if not.

---

## 🗄️ Database Setup (Optional)

The application is configured to work with a local MongoDB instance out-of-the-box. If you want to use a database, you can install MongoDB locally or use a cloud provider like MongoDB Atlas.

### Local MongoDB (Recommended)

1.  **Install MongoDB**: Follow the official installation guide for your OS.
    -   [Install on Ubuntu](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)
    -   [Install on macOS](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)
    -   [Install on Windows](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)
2.  **Start the MongoDB service**:
    ```bash
    # For Ubuntu/macOS with systemd/homebrew
    sudo systemctl start mongod
    # or
    brew services start mongodb-community
    ```
3.  **That's it!** The app will automatically connect to `mongodb://localhost:27017/website-ideas`.

### MongoDB Atlas (Cloud)

1.  Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2.  Get your connection string.
3.  Create a `.env` file in the `backend` directory and add your connection string:

    ```env
    # backend/.env
    MONGO_URI=mongodb+srv://<user>:<password>@cluster-url/website-ideas
    ```

## 🛠️ Available Scripts

All scripts should be run from the root directory.

- `npm run dev`: Starts both frontend and backend servers.
- `npm run dev:backend`: Starts only the backend server.
- `npm run dev:frontend`: Starts only the frontend server.
- `npm run install:all`: Installs dependencies for all packages.
- `npm run test:backend`: Runs backend unit tests.

##  API Endpoint

The primary API endpoint used by the application is:

- **`POST /ideas`**: Creates a new website idea.
  - **Body**: `{ "prompt": "Your website idea" }`
  - **Response**: `{ "prompt": "...", "sections": ["Hero", "About", "Contact"] }`

## 💡 Project Structure

A simple monorepo structure is used to manage the frontend and backend.

```
/
├── backend/        # NestJS API
├── frontend/       # Next.js Application
├── package.json    # Root scripts
└── README.md
``` 