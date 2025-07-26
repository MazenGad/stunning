# Project Overview

This document provides a detailed breakdown of the Fullstack Task project, including the backend API and the frontend implementation. This information can be used to understand the project's architecture and to guide the development of a new frontend.

## Backend (NestJS)

The backend is a [NestJS](https://nestjs.com/) application that provides a simple API for generating website ideas.

### Core Module: `ideas`

The primary functionality is encapsulated within the `IdeasModule`.

-   **Controller:** `ideas.controller.ts`
-   **Service:** `ideas.service.ts`
-   **Data Model:** `idea.schema.ts`

### API Endpoint

The main endpoint for generating ideas is:

-   **`POST /ideas`**

#### Request

The endpoint expects a JSON body with a single property:

```json
{
  "prompt": "A short description of the website idea."
}
```

-   `prompt` (string, required): A user-provided string describing the website idea.

#### Response

The API returns a JSON object representing the generated idea.

**Success (201 Created):**

```json
{
  "prompt": "A fitness tracking app for runners...",
  "sections": [
    "Hero",
    "About",
    "Contact"
  ],
  "_id": "64e5f7a8c3b9b4b4e8b0b8e8",
  "__v": 0
}
```

-   `prompt` (string): The original prompt from the request.
-   `sections` (string[]): An array of strings representing the suggested sections for the website. **Note: Currently, this is hardcoded to `['Hero', 'About', 'Contact']` and does not change based on the prompt.**
-   `_id` (string): The unique identifier for the created idea record in the database.

#### Data Model (`Idea`)

The `Idea` data is stored in a MongoDB collection and is defined by the `IdeaSchema`.

-   `prompt`: `String`
-   `sections`: `[String]`

## Frontend (Next.js)

The current frontend is a single-page [Next.js](https://nextjs.org/) application that allows users to interact with the backend API.

### File Structure

-   `frontend/app/page.tsx`: The main and only page of the application.
-   `frontend/app/globals.css`: Global styles, primarily Tailwind CSS.

### Core Components & Logic (`page.tsx`)

The application is built within the `Home` component in `page.tsx`.

1.  **State Management:** The component uses React's `useState` hook to manage the following:
    -   `prompt` (string): Stores the user's input from the textarea.
    -   `sections` (string[]): Stores the array of sections returned from the API.
    -   `isLoading` (boolean): Tracks the loading state during the API call.
    -   `error` (string): Stores any error messages.

2.  **User Interface:**
    -   A `<textarea>` allows users to input their website idea prompt.
    -   A `<button>` triggers the form submission. The button is disabled and shows a "Generating..." message when `isLoading` is true.
    -   If an `error` occurs, it is displayed in a dedicated error message block.
    -   When `sections` are available, they are displayed in an unordered list.

3.  **API Interaction:**
    -   The `handleSubmit` function is triggered on form submission.
    -   It makes a `POST` request to `http://localhost:3001/ideas` using the `fetch` API.
    -   The request body is a JSON object containing the `prompt`.
    -   It updates the state based on the API response (populating `sections` or `error`).

This overview should provide the necessary details about the project's structure and functionality for your other tools. 