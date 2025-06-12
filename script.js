function calculateTime() {
  const start = document.getElementById("start").value.trim();
  const end = document.getElementById("end").value.trim();
  const resultDiv = document.getElementById("result");

  if (!start || !end) {
    resultDiv.innerHTML = "<span class='label'>Please enter both locations.</span>";
    return;
  }

  // Mocked value – 2h 30m = 150 minutes
  const mockMinutes = 150;
  const adjustedMinutes = Math.round(mockMinutes * 1.3);

  const hours = Math.floor(mockMinutes / 60);
  const minutes = mockMinutes % 60;
  const adjHours = Math.floor(adjustedMinutes / 60);
  const adjMinutes = adjustedMinutes % 60;

  resultDiv.innerHTML = `
    <div><span class="label">Estimated travel time:</span> ${hours}h ${minutes}m</div>
    <div><span class="label">Adjusted time (×1.3):</span> ${adjHours}h ${adjMinutes}m</div>
  `;
}
