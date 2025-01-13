import numpy as np

def calculate_price_changes(prices: list):
    return np.diff(prices) / prices[:-1]

def get_average_liquidity(data: list):
    return sum(data) / len(data)
