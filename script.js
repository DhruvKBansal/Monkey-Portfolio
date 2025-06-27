// List of Nifty 50 Stocks (Example - Manually Input Stock Data)
const nifty50Stocks = [
  { symbol: "RELIANCE", name: "Reliance Industries Ltd." },
  { symbol: "TCS", name: "Tata Consultancy Services Ltd." },
  { symbol: "INFY", name: "Infosys Ltd." },
  { symbol: "HDFCBANK", name: "HDFC Bank Ltd." },
  { symbol: "ICICIBANK", name: "ICICI Bank Ltd." },
  { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank Ltd." },
  { symbol: "ITC", name: "ITC Ltd." },
  { symbol: "HINDUNILVR", name: "Hindustan Unilever Ltd." },
  { symbol: "LT", name: "Larsen & Toubro Ltd." },
  { symbol: "SBIN", name: "State Bank of India" },
  { symbol: "BHARTIARTL", name: "Bharti Airtel Ltd." },
  { symbol: "AXISBANK", name: "Axis Bank Ltd." },
  { symbol: "WIPRO", name: "Wipro Ltd." },
  { symbol: "ADANIPORTS", name: "Adani Ports and SEZ Ltd." },
  { symbol: "SUNPHARMA", name: "Sun Pharmaceutical Industries Ltd." },
  { symbol: "TITAN", name: "Titan Company Ltd." },
  { symbol: "ONGC", name: "Oil & Natural Gas Corporation Ltd." },
  { symbol: "ULTRACEMCO", name: "UltraTech Cement Ltd." },
  { symbol: "BAJFINANCE", name: "Bajaj Finance Ltd." },
  { symbol: "POWERGRID", name: "Power Grid Corporation of India Ltd." },
  { symbol: "NTPC", name: "NTPC Ltd." },
  { symbol: "MARUTI", name: "Maruti Suzuki India Ltd." },
  { symbol: "HDFC", name: "Housing Development Finance Corporation Ltd." },
  { symbol: "JSWSTEEL", name: "JSW Steel Ltd." },
  { symbol: "BPCL", name: "Bharat Petroleum Corporation Ltd." },
  { symbol: "COALINDIA", name: "Coal India Ltd." },
  { symbol: "TATAMOTORS", name: "Tata Motors Ltd." }
];

// Function to randomly select 10 stocks
function generateRandomPortfolio() {
  const shuffled = nifty50Stocks.sort(() => 0.5 - Math.random());
  const selectedStocks = shuffled.slice(0, 10);
  return selectedStocks;
}

// DOM Elements
const generateBtn = document.getElementById('generate-btn');
const tryAgainBtn = document.getElementById('try-again-btn');
const stockList = document.getElementById('stock-list');
const loader = document.getElementById('loader');
const portfolioDiv = document.getElementById('portfolio');
const notification = document.getElementById('notification');

// Function to display the portfolio
function displayPortfolio(stocks) {
  stockList.innerHTML = ''; // Clear existing list
  stocks.forEach(stock => {
      const li = document.createElement('li');
      li.textContent = `${stock.symbol} - ${stock.name}`;
      stockList.appendChild(li);
  });
  portfolioDiv.classList.remove('hidden');
  portfolioDiv.style.opacity = 1; // Show portfolio with fade-in
}

// Event listener to generate portfolio on button click
generateBtn.addEventListener('click', () => {
  loader.classList.remove('hidden'); // Show loader
  generateBtn.disabled = true; // Disable button to prevent multiple clicks
  
  setTimeout(() => {
      const portfolio = generateRandomPortfolio();
      displayPortfolio(portfolio);
      loader.classList.add('hidden'); // Hide loader
      notification.classList.remove('hidden'); // Show notification
      notification.style.opacity = 1;
      setTimeout(() => { // Hide notification after 2 seconds
          notification.style.opacity = 0;
          setTimeout(() => notification.classList.add('hidden'), 500);
      }, 2000);
      
      generateBtn.style.display = 'none';  // Hide generate button
      tryAgainBtn.style.display = 'block'; // Show Try Again button
      generateBtn.disabled = false; // Re-enable button for next try
  }, 2000); // Simulate delay for "processing"
});

// Event listener for Try Again
tryAgainBtn.addEventListener('click', () => {
  const portfolio = generateRandomPortfolio();
  displayPortfolio(portfolio);
});
