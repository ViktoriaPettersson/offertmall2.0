"use strict";
// Hämta overview tabellen
const overviewTable = document.querySelector(".price_overview");

//Hämta valbara alternativ tabellen
const optionTable = document.querySelector(".price_option");

//hämta pris exkl moms
// const price = document.querySelector(".");
//hämta pris moms
// const priceWithTax = document.querySelector(".");
//totalt
// const totalPrice = document.querySelector(".");

// Price table values
let overviewValArr = [
  {
    desc: "Arbetsmoment",
    id: 0,
    quan: 1,
    sumTax: 900,
    total: 900,
  },
  {
    desc: "Arbetsmoment",
    id: 1,
    quan: 4,
    sumTax: 2000,
    total: 2000,
  },
  {
    desc: "Arbetsmoment",
    id: 2,
    quan: 2,
    sumTax: 1800,
    total: 1800,
  },
  {
    desc: "Arbetsmoment",
    id: 3,
    quan: 1,
    sumTax: 900,
    total: 900,
  },
  {
    desc: "Arbetsmoment",
    id: 4,
    quan: 2,
    sumTax: 4000,
    total: 4000,
  },
];
// Option values
let optionValArr = [
  {
    desc: "Valbart",
    id: 0,
    quan: 1,
    sumTax: 900,
    total: 900,
  },
  {
    desc: "Valbart",
    id: 1,
    quan: 4,
    sumTax: 2000,
    total: 2000,
  },
];
// Skriva ut värden från overviewVal i tabellen
const addOverviewToTable = function () {
  overviewTable.innerHTML = "";
  overviewValArr.forEach((val) => {
    overviewTable.innerHTML += ` <tr>
        <th scope="row">${val.desc}</th>
        <td>${val.quan} h</td>
        <td>${val.sumTax} SEK</td>
        <td>${val.total} SEK</td>
      </tr>`;
  });
};
//Kör addOptionToTable
addOverviewToTable();

// Skriva ut värden från optionVal i tabellen
const addOptionToTable = function () {
  optionTable.innerHTML = "";
  optionValArr.forEach((val) => {
    optionTable.innerHTML += `<tr>
        <th scope="row">${val.desc}</th>
        <td>${val.quan} h</td>
        <td>${val.sumTax} SEK</td>
        <td>${val.total} SEK</td>
        <td class="">
          <button class="add_option_btn fas fa-plus p-1 addOptionBtn" id="${val.id}" name="addOptBtn">
          </button>
        </td>
      </tr>`;
  });
};
addOptionToTable();
// Kör addOverviewToTable

//funktion som lägger till i overview och tar bort vald alternativ från option

//lägg till vald alternativ i overview tabellen
const addToOverviewAndRemoveOpt = function () {
  optionTable.addEventListener("click", function (e) {
    optionValArr.forEach((val) => {
      if (e.target.name == "addOptBtn") {
        overviewValArr.push(val);
        addOverviewToTable();
      }
    });
    // Ta bort vald alternativ från option-tabellen
    if (e.target.name == "addOptBtn") {
      optionValArr = optionValArr.filter((val) => val.id != e.target.id);
      addOptionToTable();
    }
  });
};
addToOverviewAndRemoveOpt();

//Räkna om pris
