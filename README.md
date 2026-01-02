# Linux Buddy

Linux Buddy is a lightweight real-time Express.js backend server built to remotely access and control files from anywhere. It exposes REST APIs for file operations and uses Server-Sent Events (SSE) to stream live updates from the server to connected clients.

This project demonstrates how a minimal backend can function as a real-time system utility server, suitable for remote file access, live status monitoring, and internal tool development.

## Features

* **Real-time Communication:** Uses Server-Sent Events (SSE) for live server-to-client updates.
* **Remote File Access:** Navigate and download files remotely via API.
* **Minimalist Backend:** Built with Express.js for speed and simplicity.
* **Extensible:** Easily add new system commands or monitoring features.

## Use Cases

* Remote file control and management.
* Linux system helper utilities.
* Internal dashboards and real-time admin tools.
* Learning real-time backend communication without the complexity of WebSockets.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/index-oss/linux-buddy.git]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the server:**
    ```bash
    node server.js
    ```

## Note

This is a functional prototype focused on core backend concepts. Security features, authentication, and production hardening should be implemented before deploying to a public environment.
