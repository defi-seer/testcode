class StrategyOptimizer:
    def __init__(self):
        self.strategies = ["High Yield", "Stable Growth", "Risk Averse"]

    def optimize(self, user_goal: str, risk_tolerance: str):
        if risk_tolerance == "low":
            return "Risk Averse Strategy Selected"
        elif user_goal == "high_yield":
            return "High Yield Strategy Selected"
        else:
            return "Stable Growth Strategy Selected"
