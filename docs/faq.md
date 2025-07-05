---
id: faq
title: Frequently Asked Questions (FAQ)
sidebar_position: 7
---

# Frequently Asked Questions (FAQ)

## What is SAS?

**SAS (Situational Awareness System)** is a modular AI-powered platform designed to detect, classify, and map real-world events (like crimes, accidents, disasters) in real-time from social media sources. It helps decision-makers and citizens stay informed and responsive.

---

## What kind of events does SAS detect?

SAS detects various types of events, including but not limited to:

- Crimes (thefts, assaults, etc.)
- Natural disasters (earthquakes, floods)
- Public accidents
- Fires
- Political and social events

The system is customizable and can be extended to support more event types.

---

## Which social media platforms are supported?

Currently, the system supports:

- **Twitter / X**
- **Telegram**
- **News websites**

Data from other sources can be added by extending the scraping module.

---

## How does the system infer the location of an event?

SAS uses multiple methods for location inference:

- Direct use of geotags if available
- Named Entity Recognition (NER) to extract place names
- Location inference through large language models (LLMs)
- Geocoding services to convert place names to coordinates

---

## Can users receive notifications?

Yes. Registered users can:

- Subscribe to specific geographic regions
- Receive notifications when an event occurs in those regions
- Choose to receive notifications via the UI or email (if configured)

---

## What technologies does SAS use?

- **Backend:** ASP.NET Core 9, Python (for ML pipelines)
- **Frontend:** Angular
- **Messaging:** Apache Kafka
- **Database:** PostgreSQL
- **Authentication:** ASP.NET Identity
- **ML/NLP:** Transformers, NER, clustering algorithms, BERT-based models

---

## Is the system scalable?

Yes. The platform is built using a **microservices architecture** and supports:

- Horizontal scaling of scrapers and detection services
- Distributed processing via Kafka
- Independent service deployment

---

## How can I contribute to SAS?

You can contribute by:

1. Forking the repository
2. Submitting pull requests with bug fixes or enhancements
3. Reporting issues or suggesting improvements

<!-- For more details, see the [Contributing Guide](../CONTRIBUTING.md) (if available). -->

---

## Where can I view the detected events?

Events are displayed on the **interactive map** in the web frontend. You can:

- Filter by region or date
- View timelines
- Read the source messages
- Access statistical dashboards

---

## Is the platform open source?

Yes. The SAS platform is open source and intended for research, public safety, and smart city applications.

---

