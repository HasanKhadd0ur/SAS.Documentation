---
id: dataflow
title: Data Flow
sidebar_position: 4
---

# End-to-End Data Flow

1. **Scraping Manager** schedules tasks for scraping agents.
2. **Scraping Agents** collect messages and push them to Kafka.
3. **Event Detection** clusters messages and classifies new events.
4. **Location Inference** determines where the event occurred.
5. **Event Service** stores and enriches events, notifies users.
6. **Frontend & API Gateway** display results and accept input.

