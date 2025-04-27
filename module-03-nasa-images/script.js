const NASA_API_KEY = config.NASA_API_KEY; // Loaded from external config.js
const dateInput = document.getElementById("dateInput");
const loadBtn = document.getElementById("loadBtn");
const apodContent = document.getElementById("apodContent");

// Set max date to today
const today = new Date().toISOString().split("T")[0];
dateInput.max = today;

// Load today's APOD on page load
window.addEventListener("DOMContentLoaded", () => {
  dateInput.value = today;
  fetchAPOD(today);
});

loadBtn.addEventListener("click", () => {
  const selectedDate = dateInput.value;
  if (selectedDate) {
    fetchAPOD(selectedDate);
  }
});

async function fetchAPOD(date) {
  try {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}`);
    const data = await res.json();

    if (data.code === 403) throw new Error("Invalid API key or limit exceeded.");

    renderAPOD(data);
  } catch (err) {
    apodContent.innerHTML = `<p>❌ Error fetching data: ${err.message}</p>`;
  }
}

function renderAPOD(data) {
  const { title, explanation, url, media_type } = data;

  const mediaElement = media_type === "image"
    ? `<img src="${url}" alt="${title}" />`
    : `<iframe src="${url}" frameborder="0" allowfullscreen></iframe>`;

  apodContent.innerHTML = `
    <h2>${title}</h2>
    ${mediaElement}
    <p>${explanation}</p>
  `;
}
