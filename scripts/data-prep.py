import pandas as pd

def prepare_data(input_file, output_file):
    print(f"Reading data from {input_file}...")
    data = pd.read_csv(input_file)

    print("Processing data...")
    data['price_change'] = data['token_price'].pct_change()
    data['liquidity_ratio'] = data['liquidity'] / data['volume']

    print(f"Saving processed data to {output_file}...")
    data.to_csv(output_file, index=False)

if __name__ == "__main__":
    input_file = "raw_data.csv"
    output_file = "processed_data.csv"
    prepare_data(input_file, output_file)
