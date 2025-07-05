# System Architecture

The Situational Awareness System (SAS) is designed as a **scalable**, **modular**, and **intelligent platform** that detects, analyzes, and visualizes real-world events from social media streams. Its architecture is based on a **microservices model** to ensure flexibility, independent scaling, and maintainability.

---

## ⚙️ Overview

SAS consists of the following key components:

- **Scraping Agents** (distributed workers)
- **Scraping Management Service**
- **Event Detection Service**
- **Location Inference Service**
- **Events Service**
- **Identity Service**
- **API Gateway**
- **Frontend Web Application**

All components communicate over a messaging queue (Kafka or RabbitMQ), except for user-facing interactions which are routed through the API Gateway.

---

## 🧱 High-Level Architecture Diagram

```

+-------------------------+       +----------------------------+
|     Frontend (Angular)  | <---> |        API Gateway         |
+-------------------------+       +----------------------------+
|
v
+----------------+     +------------------------+     +---------------------+
| Identity       |     |    Events Service      |<--->| Location Inference  |
| Service        |     |                        |     +---------------------+
+----------------+     +------------------------+               ^
^                            |
|                            |
+--------------------+    Kafka Queue     |                            |
| Event Detection    | <------------------+                            |
| Services (per topic)|                                             +-----------------------+
+--------------------+                                             | Large Language Model   |
^     ^                                                     +-----------------------+
|     |
Kafka Queue (per domain/topic)
|
+------------------------------+
| Scraping Services (Agents)   |
+------------------------------+
^
|
+-----------------------------+
| Scraping Management Service |
+-----------------------------+

```

---

## 🧩 Component Responsibilities

### 🔹 Scraping Services

These distributed agents pull data from social media platforms such as Twitter, Telegram, and news sites. They operate based on dynamic tasks sent by the Scraping Management Service and stream the raw data into domain-specific Kafka topics.

- Each agent supports a specific platform (e.g., TwitterAgent, TelegramAgent).
- Data is cleaned and published to queues for further processing.

---

### 🔹 Scraping Management Service

Acts as the controller and scheduler for scraping tasks. It manages:
- Domain-topic assignment
- Task generation and scheduling
- Credentials and data source configs

---

### 🔹 Event Detection Service

This is the core intelligence engine of SAS. It consumes data from message queues and applies deep learning models to:
- Cluster and detect new events
- Update existing events
- Trigger post-processing tasks

Each instance can be dedicated to a specific domain or region.

---

### 🔹 Location Inference Service

Handles the extraction or inference of geographic coordinates from text messages using:
- Named Entity Recognition (NER)
- Gazetteer matching
- Optional LLM-based reasoning

It ensures that every detected event has a mappable location.

---

### 🔹 Events Service

Responsible for:
- Storing structured event data
- Managing user preferences (regions of interest, topics)
- Triggering region-based notifications
- Supporting APIs for the frontend

---

### 🔹 Identity Service

Handles authentication and authorization for users and roles:
- Built using ASP.NET Core Identity
- Issues JWT tokens
- Integrated into the API Gateway for secured access control

---

### 🔹 API Gateway

Serves as the entry point for all client requests. It:
- Routes requests to the appropriate internal service
- Handles CORS, authentication, and response aggregation
- Makes the system appear as a unified backend

---

### 🔹 Frontend Application

An Angular-based web interface where users can:
- Browse live and historical events on a map
- Subscribe to specific regions
- Comment, review, and interact with the system

---

## 🚀 Why Microservices?

SAS adopts microservices to support:

- **Independent scaling**: Services like scraping or event detection can scale based on workload.
- **Technology flexibility**: Python for scraping/ML, .NET for APIs, Angular for UI.
- **Fault isolation**: Failures in one service don’t crash the whole system.
- **CI/CD & Maintainability**: Services can be developed and deployed independently.

---

## 🔄 Data Flow Summary

1. **Scraping Services** extract raw messages and stream them into Kafka.
2. **Event Detection Services** consume messages, detect and update events.
3. **Location Inference** enriches events with geo-coordinates.
4. **Events Service** persists events, manages user interests, and triggers notifications.
5. **Frontend** displays everything via map and charts.

---

## ✅ Conclusion

The architecture of SAS is designed to efficiently process large volumes of streaming social data, apply intelligent event detection, and provide a responsive user experience through modular, independently deployable services.
```

