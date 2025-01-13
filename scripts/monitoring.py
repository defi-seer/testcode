import time
import requests

API_URL = "https://api.defiseer.com/v1/alerts/risk"
API_KEY = "YOUR_API_KEY"

def fetch_risk_alerts():
    headers = {"Authorization": f"Bearer {API_KEY}"}
    response = requests.get(API_URL, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error fetching risk alerts: {response.status_code}")
        return None

if __name__ == "__main__":
    while True:
        print("Fetching risk alerts...")
        alerts = fetch_risk_alerts()
        if alerts:
            for alert in alerts:
                print(f"Risk Alert: {alert}")
        time.sleep(60)  # Fetch every 60 seconds
