---
id: installation
title: Installation & Setup
sidebar_position: 6
---

# Installation Guide

## Prerequisites

- Docker + Docker Compose
- Node.js v18+
- .NET 9 SDK
- Python 3.10+

## Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/HasanKhadd0ur/SAS.Platform.git
    ```

2. Start services:

   ```bash
   docker-compose up -d
   ```

3. Run frontend:

   ```bash
   cd sas-frontend
   npm install
   npm start
   ```

4. Access at:

   * Web App: `http://localhost:4200`
   * API Gateway: `http://localhost:5010`

