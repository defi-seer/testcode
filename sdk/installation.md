# SDK Installation Guide

## Prerequisites
- Node.js v14 or higher
- NPM or Yarn package manager

## Installation
To install the DeFi Seer SDK, run the following command:
```bash
npm install @defiseer/sdk
```
## Importing the SDK
After installation, import the SDK into your project:
```
const DeFiSeer = require('@defiseer/sdk');
```

---

### **`sdk/usage-examples.md`**
### SDK Usage Examples
Example 1: Fetching Trend Predictions

```
const DeFiSeer = require('@defiseer/sdk');

async function getTrendPredictions(tokenSymbol) {
  const predictions = await DeFiSeer.getTrendPredictions(tokenSymbol, '24h');
  console.log(`Predictions for ${tokenSymbol}:`, predictions);
}

getTrendPredictions('ETH');

```
### Example 2: Submitting Portfolio Data

const DeFiSeer = require('@defiseer/sdk');

async function submitPortfolio() {
  const portfolio = [
    { token: 'ETH', amount: 10 },
    { token: 'DAI', amount: 500 }
  ];

  const insights = await DeFiSeer.submitPortfolio(portfolio);
  console.log('Portfolio Insights:', insights);
}

submitPortfolio();

---

### **`sdk/sdk.js`**
```javascript
const axios = require('axios');

class DeFiSeerSDK {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.defiseer.com/v1';
  }

  async getTrendPredictions(tokenSymbol, timeframe) {
    try {
      const response = await axios.get(`${this.baseURL}/predictions/trends`, {
        headers: { Authorization: `Bearer ${this.apiKey}` },
        params: { token: tokenSymbol, timeframe }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching trend predictions:', error);
    }
  }

  async submitPortfolio(portfolio) {
    try {
      const response = await axios.post(
        `${this.baseURL}/portfolio/insights`,
        { portfolio },
        { headers: { Authorization: `Bearer ${this.apiKey}` } }
      );
      return response.data;
    } catch (error) {
      console.error('Error submitting portfolio:', error);
    }
  }
}

module.exports = DeFiSeerSDK;

---

### **`sdk/sdk.js`**
```javascript
const axios = require('axios');

class DeFiSeerSDK {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.defiseer.com/v1';
  }

  async getTrendPredictions(tokenSymbol, timeframe) {
    try {
      const response = await axios.get(`${this.baseURL}/predictions/trends`, {
        headers: { Authorization: `Bearer ${this.apiKey}` },
        params: { token: tokenSymbol, timeframe }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching trend predictions:', error);
    }
  }

  async submitPortfolio(portfolio) {
    try {
      const response = await axios.post(
        `${this.baseURL}/portfolio/insights`,
        { portfolio },
        { headers: { Authorization: `Bearer ${this.apiKey}` } }
      );
      return response.data;
    } catch (error) {
      console.error('Error submitting portfolio:', error);
    }
  }
}

module.exports = DeFiSeerSDK;

---

### **`sdk/sdk.js`**
```javascript
const axios = require('axios');

class DeFiSeerSDK {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.defiseer.com/v1';
  }

  async getTrendPredictions(tokenSymbol, timeframe) {
    try {
      const response = await axios.get(`${this.baseURL}/predictions/trends`, {
        headers: { Authorization: `Bearer ${this.apiKey}` },
        params: { token: tokenSymbol, timeframe }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching trend predictions:', error);
    }
  }

  async submitPortfolio(portfolio) {
    try {
      const response = await axios.post(
        `${this.baseURL}/portfolio/insights`,
        { portfolio },
        { headers: { Authorization: `Bearer ${this.apiKey}` } }
      );
      return response.data;
    } catch (error) {
      console.error('Error submitting portfolio:', error);
    }
  }
}

module.exports = DeFiSeerSDK;

