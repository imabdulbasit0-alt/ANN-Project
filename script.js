const API_URL = window.location.origin + "/api/predict";

document.getElementById("predict-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const payload = {
    Gender: Number(form.Gender.value),
    Age: Number(form.Age.value),
    EstimatedSalary: Number(form.EstimatedSalary.value),
  };

  const resultEl = document.getElementById("result");
  resultEl.className = "result";
  resultEl.textContent = "Predicting...";

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Request failed");

    const cls = data.prediction === 1 ? "buy" : "notbuy";
    resultEl.className = `result ${cls}`;
    resultEl.innerHTML = `
      <h2>${data.label}</h2>
      <p class="prob">Probability of purchase: ${(data.probability * 100).toFixed(1)}%</p>
    `;
  } catch (err) {
    resultEl.className = "result notbuy";
    resultEl.textContent = "Error: " + err.message;
  }
});
