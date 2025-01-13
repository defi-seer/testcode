export async function fetchInsights(apiKey) {
  try {
    const response = await fetch('https://api.defiseer.com/v1/portfolio/insights', {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching insights:', error);
    throw error;
  }
}
