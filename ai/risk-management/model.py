import numpy as np

class RiskManagementModel:
    def __init__(self):
        self.thresholds = {
            "liquidity": 10000,
            "price_volatility": 0.05
        }

    def assess_risk(self, liquidity: float, price_changes: np.array):
        if liquidity < self.thresholds["liquidity"]:
            return "High Risk: Low Liquidity"
        volatility = np.std(price_changes) / np.mean(price_changes)
        if volatility > self.thresholds["price_volatility"]:
            return "High Risk: High Volatility"
        return "Low Risk"
