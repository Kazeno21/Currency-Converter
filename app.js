  
const currencyone = document.querySelector("#currency-one");
const Amountone = document.querySelector("#amount-one");
const currencytwo = document.querySelector("#currency-two");
const Amounttwo = document.querySelector("#amount-two");
const btnSwap = document.querySelector(".btn-swap");
const rate = document.querySelector(".swap-rate");

async function update() {
  const firstData = currencyone.value;
  const seconeData = currencytwo.value;
  const res = await fetch(
    `https://api.exchangerate-api.com/v4/latest/${firstData}`
  );
  const data = await res.json();
  console.log(data);
  Amounttwo.value = (data.rates[seconeData] * Amountone.value).toFixed(2);
  rate.textContent = `1${firstData}= ${data.rates[seconeData]}${seconeData}`;
}
Amountone.addEventListener("input", update);
currencyone.addEventListener("change", update);
currencytwo.addEventListener("change", update);
btnSwap.addEventListener("click", (e) => {
  const temp = currencyone.value;
  currencyone.value = currencytwo.value;
  currencytwo.value = temp;
  update();
});

