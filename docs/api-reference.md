# API Reference

## Overview
DeFi Seer provides a RESTful API to enable integration with third-party applications and platforms.

## Base URL
https://api.defiseer.com/v1

## Endpoints

### 1. Trend Predictions
**GET /predictions/trends**  
- Description: Retrieve real-time trend predictions for tokens and protocols.
- Parameters:
  - `token` (string): The token symbol (e.g., ETH, DAI).
  - `timeframe` (string): Prediction timeframe (e.g., 1h, 24h).

### 2. Risk Alerts
**GET /alerts/risk**  
- Description: Fetch active risk alerts for protocols and markets.
- Parameters:
  - `protocol` (string): The protocol name (e.g., Uniswap, Aave).
  - `severity` (string): Filter by risk severity (e.g., high, medium, low).

### 3. Portfolio Insights
**POST /portfolio/insights**  
- Description: Submit portfolio data for customized investment insights.
- Body:
  ```json
  {
    "portfolio": [
      { "token": "ETH", "amount": 5 },
      { "token": "DAI", "amount": 1000 }
    ]
  }
