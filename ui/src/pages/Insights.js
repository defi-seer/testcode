import React, { useState, useEffect } from 'react';

function Insights() {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetch('https://api.defiseer.com/v1/portfolio/insights', {
      headers: {
        Authorization: `Bearer YOUR_API_KEY`
      }
    })
      .then(response => response.json())
      .then(data => setInsights(data))
      .catch(error => console.error('Error fetching insights:', error));
  }, []);

  return (
    <div>
      <h2>Investment Insights</h2>
      <ul>
        {insights.map((insight, index) => (
          <li key={index}>{insight.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Insights;
