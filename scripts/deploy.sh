#!/bin/bash

echo "Deploying Smart Contracts..."

npx hardhat compile

echo "Starting deployment to the network..."
npx hardhat run --network localhost scripts/deploy.js

echo "Deployment complete!"
