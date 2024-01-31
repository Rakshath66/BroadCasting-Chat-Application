# Broadcasting Chat Application

## Overview

This Broadcasting Chat Application is a simple real-time chat system using Socket.io and Express. It allows users to send messages to a server, and the server broadcasts those messages to all connected clients. The frontend is built with HTML, Bootstrap for styling, and JavaScript for handling WebSocket connections.

## Table of Contents

- [Features](#features)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Test](#Test)

## Features

- Real-time messaging between clients and server.
- Simple and responsive UI using Bootstrap.
- WebSocket communication with Socket.io.
- Broadcasting of messages to all connected clients.

## File Structure

The project has the following file structure:

- **public/**
  - **index.html**: HTML file for the frontend with the chat application UI.
- **index.js**: Node.js server script handling Socket.io connections.
- **package.json**: Node.js package file.
- **package-lock.json**: Node.js package lock file.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:

   ```bash
   cd BroadCasting-Chat-Application
   ```
3. Install dependencies:

   ```bash
   npm install express socket.io
   ```
   
### Usage

1. Start the server:

   ```bash
   npm start
   ```
2. Open a web browser and go to http://localhost:8000 to access the chat application.
3. Enter a message in the input field and click "Send" to broadcast the message to all connected clients.

### Test

1. Start Server and go to http://localhost:8000, send some message
2. Open second(another) window and go to http://localhost:8000 with previous window opened. Send some message from second window.
3. The message sent from second window will be displayed in both the windows.
4. This can be scaled up to any number of windows/Browsers (Clients).
