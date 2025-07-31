# Design Patterns in Scraping Agent

The Scraping Agent leverages several well-known software design patterns to ensure flexibility, reusability, and maintainability.

## 1. Factory Pattern

- **Used in**: `ScraperFactory`
- **Purpose**: Creates the appropriate scraper instance (e.g., TelegramScraper, TwitterApiScraper) based on the task definition.
- **Benefit**: Allows the system to add new platforms without modifying existing logic.

## 2. Registry Pattern

- **Used in**: `PipelineStageRegistry`, `ScraperRegistry`
- **Purpose**: Registers all available pipeline stages and scrapers at startup.
- **Benefit**: Enables dynamic instantiation and configuration of components at runtime.

## 3. Pipes and Filters (Pipeline)

- **Used in**: `Pipeline`
- **Purpose**: Processes messages through modular stages (e.g., normalization, sentiment detection).
- **Benefit**: Makes each stage independently testable and pluggable.

## 4. Dependency Injection (Manual)

- **Used in**: Service constructors (e.g., NER, Kafka Publisher)
- **Purpose**: Passes configuration and services explicitly into objects rather than hardcoding.
- **Benefit**: Improves testability and separation of concerns.

## 5. Singleton (via Global Configuration)

- **Used in**: Global config loader (`ConfigManager`)
- **Purpose**: Ensures configuration is loaded once and reused globally.

