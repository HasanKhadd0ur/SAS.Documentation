# Architecture of Scraping Agent

## Layered Structure

The Scraping Agent is organized into five main layers, each with a distinct responsibility:

### 1. Core Layer

- Shared services (NER, logger, configuration loader)
- Abstract interfaces
- Global error handling

### 2. Scrapers Layer

- Platform-specific scraper implementations (e.g., Telegram, Twitter)
- Base class defines a common interface for all scrapers
- Factory class dynamically instantiates scraper by task

### 3. Pipeline Layer

- Processes raw messages through pluggable stages:
  - Keyword filtering
  - Hate/Spam detection
  - Sentiment classification
  - Named Entity Recognition
- Each stage is modular and reusable

### 4. Kafka Layer

- Sends processed messages to appropriate Kafka topics
- Sends metadata or high-frequency entities to side channels

### 5. MongoDB Integration

- Fetches runtime configurations and credentials securely
- Supports per-platform settings (e.g., Telegram credentials, search keywords)

## Flow Overview

1. **Task Received**: A scraping task is fetched from Scraping Management Service
2. **Scraper Instantiated**: The appropriate scraper is selected via a factory
3. **Messages Collected**: API or crawler retrieves raw messages
4. **Pipeline Executed**: Each message passes through the pipeline stages
5. **Message Published**: Enriched output is sent to Kafka for further processing
