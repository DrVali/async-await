
const getCountery = async function name(countryName) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const data = await response.json();
    console.log(data[0]);

    const mainDiv = document.querySelector(".main");
    const H2El = document.createElement("h2");
    H2El.classList.add("counter-title");
    H2El.innerHTML = `name is : ${data[0].name.common} </br>`;
    mainDiv.append(H2El);

    const spanPop = document.createElement("span");
    spanPop.classList.add("pop");
    spanPop.classList.add("spanId");
    spanPop.innerHTML = `population:  ${data[0].population} </br>`;
    mainDiv.append(spanPop);

    const spanRegion = document.createElement("span");
    spanRegion.classList.add("region");
    spanRegion.classList.add("spanId");
    spanRegion.innerHTML = `region:  ${data[0].region} </br>`;
    mainDiv.append(spanRegion);

    const spancapital = document.createElement("span");
    spancapital.classList.add("capital");
    spancapital.innerHTML = `capital: ${data[0].capital} </br>`;
    mainDiv.append(spancapital);
  } catch (err) {
    console.log(`error message is :====>   ${err.message} </br>`);
  }
};
let germanyC = "germany";
const germany = document.querySelector(".germany");
germany.addEventListener("click", (e) => {
  let RegionEl = e.target.value;
  getCountery(RegionEl);
});
