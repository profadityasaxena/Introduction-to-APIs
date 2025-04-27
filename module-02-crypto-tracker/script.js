const tableBody = document.getElementById("cryptoTableBody");

// API endpoint for top 10 cryptocurrencies
const apiURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

async function fetchCryptoData() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    tableBody.innerHTML = ""; // Clear previous rows

    data.forEach((coin) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td><img src="${coin.image}" alt="${coin.name} logo" /></td>
        <td>${coin.name} (${coin.symbol.toUpperCase()})</td>
        <td>$${coin.current_price.toLocaleString()}</td>
        <td class="${coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}">
          ${coin.price_change_percentage_24h.toFixed(2)}%
        </td>
      `;

      tableBody.appendChild(row);
    });

  } catch (err) {
    tableBody.innerHTML = `<tr><td colspan="4">❌ Failed to load data: ${err.message}</td></tr>`;
  }
}

fetchCryptoData();
