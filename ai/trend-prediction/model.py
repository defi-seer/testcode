import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

class TrendPredictionModel:
    def __init__(self):
        self.model = RandomForestRegressor()

    def train(self, data: pd.DataFrame, target: str):
        X = data.drop(columns=[target])
        y = data[target]
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        self.model.fit(X_train, y_train)
        predictions = self.model.predict(X_test)
        mse = mean_squared_error(y_test, predictions)
        print(f"Model trained. Mean Squared Error: {mse}")

    def predict(self, input_data: np.array):
        return self.model.predict(input_data)
