// This README.md is AI generated code, not accurate just for demo

# Screenshot Capture

A simple web-based screenshot capture tool by using Playwright.

## Getting Started

1. edit code.html
2. edit index.js

## Docker Setup

### Build the Docker Image

```bash
docker build -t playwright-screenshot .
```

### Run the Container

```bash
docker run -it --rm --name playwright-screenshot-container -v ./snapshots:/usr/src/app/snapshots playwright-screenshot
```

This command will:

- Create a container named `playwright-screenshot-container`
- Mount the local `snapshots` directory to store captured screenshots
- Remove the container automatically when it stops
