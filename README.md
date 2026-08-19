# Custom Note API

A lightweight Express.js API for creating, fetching, updating, and deleting notes stored in MongoDB.

## Features

- Create a new note
- Fetch all notes
- Update a note description by ID
- Delete a note by ID
- MongoDB connection via Mongoose
- Simple REST API structure

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemon (for development)

## Project Structure

```bash
custom-note-API/
├── src/
│   ├── app.js
│   ├── db/
│   │   └── db.js
│   └── models/
│       └── notes.model.js
├── server.js
├── package.json
├── .env.example
└── README.md
```

## Prerequisites

Before running this project, make sure you have:

- Node.js installed
- MongoDB connection string available
- npm installed

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Configuration

This project currently connects to MongoDB using a hardcoded connection string in [src/db/db.js](src/db/db.js). For safer configuration, move it to an environment variable like `MONGO_URI` and set it to your own MongoDB connection string.

Example:

```bash
MONGO_URI=ENTER YOUR MONGO_URI
```

Then update the database connection code accordingly.

## Run the App

Start the development server:

```bash
npm run dev
```

The API runs on:

```bash
http://localhost:3000
```

## API Endpoints

### 1) Create a note

- Method: `POST`
- Endpoint: `/notes`

Request body:

```json
{
  "title": "Meeting Notes",
  "description": "Discuss sprint updates and blockers."
}
```

Response:

```json
{
  "message": "data created successfully"
}
```

### 2) Get all notes

- Method: `GET`
- Endpoint: `/notes`

Response:

```json
{
  "message": "notes fetched successfully",
  "notes": [
    {
      "_id": "...",
      "title": "Meeting Notes",
      "description": "Discuss sprint updates and blockers.",
      "time": "8/19/2026, 9:00:00 AM"
    }
  ]
}
```

### 3) Update a note

- Method: `PATCH`
- Endpoint: `/notes/:id`

Request body:

```json
{
  "description": "Updated description"
}
```

Response:

```json
{
  "message": "data successfully updated",
  "notes": [
    {
      "_id": "...",
      "title": "Meeting Notes",
      "description": "Updated description"
    }
  ]
}
```

### 4) Delete a note

- Method: `DELETE`
- Endpoint: `/notes/:id`

Response:

```json
{
  "message": "message deleted successfully"
}
```

## Notes

- The app uses `express.json()` to parse JSON request bodies.
- The note schema stores:
  - `title`
  - `description`
  - `time`
- The `time` field is generated when a note is created using `new Date().toLocaleString()`.