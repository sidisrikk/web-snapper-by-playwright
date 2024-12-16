// This README.md is AI generated code, not accurate just for demo

# Screenshot Capture

A simple web-based screenshot capture tool that allows users to take and manage screenshots directly from their browser.

## Features

- Easy screenshot capture with a single click
- Preview captured screenshots before saving
- Customizable capture options

## Getting Started

1. Clone this repository
2. Open `code.html` in your web browser
3. Click the capture button to take a screenshot

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
