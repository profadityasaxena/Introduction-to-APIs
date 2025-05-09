# 📘 Mastering Public APIs with JavaScript & Chart.js  
**Instructor:** Aditya Saxena

---

## 📖 Course Overview

This hands-on, project-based course teaches you how to interact with free, real-world public APIs using only **HTML**, **CSS**, **JavaScript**, and **Chart.js**.

Each module is a mini-application built using data from publicly available APIs. You'll learn API fundamentals, JavaScript integration, and how to turn raw data into interactive dashboards—all inside your browser.

---

## 🎯 What You'll Learn

- What APIs are and how they work  
- How to make `GET` requests with `fetch()`  
- Handling API responses (JSON parsing, error handling)  
- Working with query parameters and API keys  
- Visualizing data using **Chart.js**  
- Displaying real-time data in the browser  
- Understanding rate limits and best practices

---

## 🛠 Tech Stack

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6)**  
- **Chart.js** (via CDN)  
- **Free Public APIs**

---

# 🧩 Introduction to API-Based Architecture

An API-based architecture is a design approach where all components of an application — frontend, backend, data, and services — communicate primarily through APIs. This enables modularity, scalability, and integration across internal and external systems.

---

## 🛠️ Core Components of an API Architecture

| Layer | Role |
|-------|------|
| **API Gateway** | Entry point for all clients (handles routing, throttling, auth) |
| **Service Layer** | Business logic exposed via REST or GraphQL APIs |
| **Data Layer** | Databases or third-party APIs that services consume |
| **Client Applications** | Web, mobile, or other systems that call the APIs |

---

## 📐 Key Design Considerations

### 1. **API Contract Definition**
- Use OpenAPI/Swagger to document endpoints, input/output formats, and status codes
- Design with consumers in mind (clear naming, consistent responses)

### 2. **Stateless Communication**
- Each API call should be self-contained
- No session state stored on the server

### 3. **Authentication & Authorization**
- Use tokens (e.g., JWT, OAuth 2.0) for secure access
- Role-based access control if APIs serve multiple client types

### 4. **Rate Limiting & Throttling**
- Protect APIs from misuse or overload via API gateways (e.g., Kong, AWS API Gateway)

### 5. **Versioning**
- Maintain backward compatibility with versioned endpoints (e.g., `/api/v1/`)

---

## 🔄 Request-Response Flow

Frontend (React/JS) ➜ API Gateway ➜ Auth Service ➜ Business Service ➜ Database  
                    ↘ Third-Party APIs

---

## ⚙️ Tools & Technologies

| Area | Examples |
|------|----------|
| API Development | Node.js/Express, Flask, FastAPI, Spring Boot |
| API Testing | Postman, Insomnia, curl |
| API Gateway | Kong, NGINX, Amazon API Gateway |
| Documentation | Swagger (OpenAPI), Redoc |
| Authentication | OAuth 2.0, JWT, Firebase Auth |

---

## 📦 Best Practices

- ✅ Use RESTful design (or GraphQL if needed)
- ✅ Always return meaningful HTTP status codes
- ✅ Log all API activity (request, response, latency)
- ✅ Handle and report errors consistently
- ✅ Cache frequently requested data
- ✅ Separate internal and public APIs

---

## 🚀 Benefits of API-First Architecture

- Frontend and backend teams work independently
- Easier third-party integrations
- Facilitates microservices and modular scaling
- Cloud-native and serverless compatible

---

## 📁 Folder Structure Example (Node.js)

```
/api
  /v1
    /users
      - users.routes.js
      - users.controller.js
      - users.service.js
/app.js
/config/
  - db.js
  - env.js
/docs/
  - openapi.yaml
/tests/
  - users.test.js
```

---

## 🧪 Before Going to Production

- ✅ Enforce HTTPS
- ✅ Enable CORS properly
- ✅ Monitor performance and errors (e.g., Datadog, Prometheus, Sentry)
- ✅ Run security scans (e.g., OWASP ZAP)
- ✅ Write unit and integration tests


---

## 🌤️ Module 1: Weather Dashboard

In this project, we built a simple web-based weather dashboard using HTML, CSS, JavaScript, and Chart.js. The application allows users to input any city name and retrieve real-time weather data from the OpenWeatherMap API. The current temperature, weather condition, and icon are displayed dynamically on the page.

We also visualized a 5-day temperature trend using a line chart powered by Chart.js. The API key was stored securely outside the project folder to avoid exposing it publicly. This module introduced the fundamentals of working with public APIs, handling asynchronous data, and presenting insights through charts.

## 📈 Module 2: Cryptocurrency Tracker

In this project, we created a real-time cryptocurrency tracker using HTML, CSS, and JavaScript. The app connects to the public CoinGecko API to fetch market data for the top 10 cryptocurrencies based on market capitalization. For each coin, we display its name, symbol, logo, current price in USD, and 24-hour percentage change.

The primary goal of this module is to gain hands-on experience working with JSON data from an open financial API and render it dynamically in the browser. Students also learn to format currency, handle live data refreshes, and visually highlight gains and losses. This project sets the stage for more advanced charting in upcoming modules.

## 🌌 Module 3: NASA Picture of the Day Viewer

This module explores how to fetch and display image-based data from a public API. Students use the NASA Astronomy Picture of the Day (APOD) API to retrieve a high-resolution image (or video), its title, and a short explanation. The viewer updates dynamically based on the date selected, allowing exploration of NASA’s space image archive.

The goal of this project is to practice working with query parameters, image elements, and textual metadata in a single API response. This module emphasizes layout techniques, proper date formatting, and handling edge cases (like days without a picture). It also introduces working with APIs that provide mixed media types (images and YouTube embeds).

## 🎬 Module 4: Movie Explorer

This module introduces learners to building a movie search interface using the OMDb (Open Movie Database) API. Students create an interactive application that allows users to search for movies by title and view relevant details such as poster, release year, genre, IMDb rating, and a brief plot summary.

The objective of this project is to strengthen skills in handling user input, working with API keys, and dynamically updating the DOM based on search results. This module also teaches how to gracefully handle missing or incomplete data, and introduces best practices for managing search-based API endpoints in frontend applications.


---

## ❓ 50 Short Answer Theory Questions with Answers

| No. | Question | Answer |
|-----|----------|--------|
| 1 | What does API stand for? | Application Programming Interface |
| 2 | What is a REST API? | A REST API follows a set of rules for communication over HTTP, using standard methods like GET and POST. |
| 3 | What is the purpose of an API? | APIs allow software systems to communicate and share data or functionality. |
| 4 | What does `fetch()` do in JavaScript? | It sends an HTTP request to a URL and returns a promise with the response. |
| 5 | What is JSON? | JavaScript Object Notation – a lightweight data-interchange format. |
| 6 | What is an API key? | A unique identifier used to authenticate a user or system to an API. |
| 7 | What HTTP method is used to retrieve data? | GET |
| 8 | What method is used to send data? | POST |
| 9 | What does `.then()` do in fetch calls? | It processes the promise returned by `fetch()` once it resolves. |
| 10 | What is Chart.js? | A JavaScript library for creating responsive charts using canvas. |
| 11 | Can you use Chart.js without installing anything? | Yes, using a CDN link in HTML. |
| 12 | What does `.json()` do? | Converts the response to a usable JSON object. |
| 13 | What is a status code 200? | It means the request was successful. |
| 14 | What is a status code 404? | Resource not found. |
| 15 | What is asynchronous programming? | Executing code without waiting for each task to finish before starting the next. |
| 16 | Why use `async/await`? | It makes asynchronous code easier to read and write. |
| 17 | What’s the default content type of API responses? | `application/json` |
| 18 | What is rate limiting? | Restricting the number of API requests in a given time frame. |
| 19 | What is a query parameter? | A key-value pair added to a URL to pass data to the server. |
| 20 | What does `try...catch` do? | It handles errors in code execution. |
| 21 | Why do we use `const` and `let`? | `const` for constants, `let` for mutable variables. |
| 22 | What is a promise? | A placeholder for a value that will be available in the future. |
| 23 | Can APIs return images? | Yes, some return URLs to image files. |
| 24 | What is a JSON array? | A list of values in JSON, wrapped in square brackets. |
| 25 | What is DOM manipulation? | Changing HTML elements dynamically using JavaScript. |
| 26 | How does Chart.js draw charts? | Using the HTML `<canvas>` element. |
| 27 | What are some free APIs? | OpenWeatherMap, CoinGecko, NASA, OMDb, GitHub API. |
| 28 | Why is it bad to expose an API key in JS? | Others can misuse your key if it’s public. |
| 29 | What is a CDN? | Content Delivery Network – serves files like Chart.js from global locations. |
| 30 | What’s the difference between frontend and backend APIs? | Frontend APIs are called from browsers; backend APIs run on servers. |
| 31 | What is CORS? | Cross-Origin Resource Sharing – a browser security feature for APIs. |
| 32 | What is the `navigator` object used for? | Accessing browser or device-related data (like geolocation). |
| 33 | What’s the difference between `innerHTML` and `textContent`? | `innerHTML` includes HTML tags; `textContent` is plain text. |
| 34 | What is `localStorage`? | A browser API to store data persistently on the client side. |
| 35 | Can we make POST requests with fetch()? | Yes, using `fetch(url, { method: "POST" })`. |
| 36 | What’s the shape of a line chart? | A set of connected points showing trends. |
| 37 | Can one API provide multiple endpoints? | Yes, APIs often have many endpoints for different functions. |
| 38 | What is an endpoint? | A specific path in the API that serves a function (e.g., `/weather`). |
| 39 | What is HTTPS? | A secure version of HTTP using SSL/TLS encryption. |
| 40 | Can you test APIs without writing code? | Yes, using Postman or browser tools. |
| 41 | What does `console.log()` do? | Displays data in the browser’s developer console. |
| 42 | What is a callback function? | A function passed into another function to be called later. |
| 43 | What is error handling? | Managing what happens when something goes wrong in code. |
| 44 | What is a tooltip in a chart? | A popup showing details when you hover over a data point. |
| 45 | What is the `canvas` element? | An HTML element used for drawing graphics. |
| 46 | What is a bar chart? | A chart with rectangular bars showing values. |
| 47 | What is `event.preventDefault()`? | Stops the default browser behavior for an event. |
| 48 | What are `labels` in Chart.js? | Categories or names for data points on a chart. |
| 49 | Can you update a Chart.js chart after it’s rendered? | Yes, using chart.update() or destroying and redrawing. |
| 50 | How do you document an API project? | With a clear README including usage, setup, and visuals. |
