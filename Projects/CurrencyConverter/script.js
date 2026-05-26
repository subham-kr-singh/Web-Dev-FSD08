let data = "";

// INITIAL LOAD
(async () => {

  const today =
    new Date().toISOString().split("T")[0];

  // SET TODAY DATE
  document.getElementById(
    "badgeCalendar"
  ).value = today;

  // FETCH INITIAL DATA
  await fetchCurrencyData(today);

  setupListeners();

  updateTime();

})();

// FETCH API DATA
async function fetchCurrencyData(date) {

    const response = await fetch(
      `https://${date}.currency-api.pages.dev/v1/currencies/eur.json`
    );

    data = await response.json();

    generateDropdowns();

    getInfo();

}

// GENERATE DROPDOWNS
function generateDropdowns() {

  // SAVE OLD VALUES
  const oldFrom =
    document.getElementById(
      "fromCurrency"
    )?.value || "usd";

  const oldTo =
    document.getElementById(
      "toCurrency"
    )?.value || "inr";

  let optionsHTML = "";

  Object.entries(data.eur).forEach(
    ([currencyCode]) => {

      optionsHTML += `
        <option value="${currencyCode}">
          ${currencyCode.toUpperCase()}
        </option>
      `;

    }
  );

  document.getElementById(
    "fromCurrency"
  ).innerHTML = optionsHTML;

  document.getElementById(
    "toCurrency"
  ).innerHTML = optionsHTML;

  // RESTORE VALUES
  document.getElementById(
    "fromCurrency"
  ).value = oldFrom;

  document.getElementById(
    "toCurrency"
  ).value = oldTo;

}

// CONVERT
function getInfo() {

  if (!data || !data.eur) return;

  const amount =
    parseFloat(
      document.getElementById(
        "fromAmount"
      ).value
    ) || 0;

  const fromCurrency =
    document.getElementById(
      "fromCurrency"
    ).value;

  const toCurrency =
    document.getElementById(
      "toCurrency"
    ).value;

  const fromRate =
    data.eur[fromCurrency];

  const toRate =
    data.eur[toCurrency];

  if (!fromRate || !toRate) return;

  // RESULT
  const result =
    amount * (toRate / fromRate);

  document.getElementById(
    "toAmount"
  ).value =
    result.toLocaleString(
      undefined,
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    );

  // ALWAYS SHOW INR RATE
  const inrRate =
    data.eur["inr"];

  const currentInrRate =
    inrRate / fromRate;

  document.getElementById(
    "liveRate"
  ).innerText =
    currentInrRate.toFixed(2);

}

// SWAP
function swapCurrencies() {

  const from =
    document.getElementById(
      "fromCurrency"
    );

  const to =
    document.getElementById(
      "toCurrency"
    );

  const temp = from.value;

  from.value = to.value;

  to.value = temp;

  getInfo();

}

// LIVE LISTENERS
function setupListeners() {

  document
    .getElementById(
      "fromAmount"
    )
    .addEventListener(
      "input",
      getInfo
    );

  document
    .getElementById(
      "fromCurrency"
    )
    .addEventListener(
      "change",
      getInfo
    );

  document
    .getElementById(
      "toCurrency"
    )
    .addEventListener(
      "change",
      getInfo
    );

  // DATE CHANGE
  document
    .getElementById(
      "badgeCalendar"
    )
    .addEventListener(
      "change",
      async (e) => {

        await fetchCurrencyData(
          e.target.value
        );

      }
    );

}

// LIVE TIME
function updateTime() {

  const now = new Date();

  document.getElementById(
    "liveTime"
  ).innerText =
    now.toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );

}

setInterval(updateTime, 1000);