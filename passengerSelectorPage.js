const passengerCount1 = document.getElementById("passengerCount1");
const btnMinus1 = document.getElementById("btnMinus1");

const passengerCount2 = document.getElementById("passengerCount2");
const btnMinus2 = document.getElementById("btnMinus2");

const passengerCount3 = document.getElementById("passengerCount3");
const btnMinus3 = document.getElementById("btnMinus3");

function defaultEvent() {
  if (passengerCount1.innerText <= 1) {
    btnMinus1.style.opacity = "0.5";
    btnMinus1.style.pointerEvents = "none";
  }
  if (passengerCount2.innerText <= 1) {
    btnMinus2.style.opacity = "0.5";
    btnMinus2.style.pointerEvents = "none";
  }
  if (passengerCount3.innerText <= 1) {
    btnMinus3.style.opacity = "0.5";
    btnMinus3.style.pointerEvents = "none";
  }
}

function add(value) {
  if (value == 1) {
    btnMinus1.style.opacity = "1";
    btnMinus1.style.pointerEvents = "visible";
    passengerCount1.innerText++;
  } else if (value == 2) {
    btnMinus2.style.opacity = "1";
    btnMinus2.style.pointerEvents = "visible";
    passengerCount2.innerText++;
  } else if (value == 3) {
    btnMinus3.style.opacity = "1";
    btnMinus3.style.pointerEvents = "visible";
    passengerCount3.innerText++;
  }
}

function minus(value) {
  if (value == 1) {
    if (passengerCount1.innerText == 1) {
      btnMinus1.style.opacity = "0.5";
      btnMinus1.style.pointerEvents = "none";
    } else {
      passengerCount1.innerText--;
    }
  } else if (value == 2) {
    if (passengerCount2.innerText == 0) {
      btnMinus2.style.opacity = "0.5";
      btnMinus2.style.pointerEvents = "none";
    } else {
      passengerCount2.innerText--;
    }
  } else if (value == 3) {
    if (passengerCount3.innerText == 0) {
      btnMinus3.style.opacity = "0.5";
      btnMinus3.style.pointerEvents = "none";
    } else {
      passengerCount3.innerText--;
    }
  }
}

defaultEvent();

const passenger = document.getElementById("passenger");
function submit() {
  passenger.value = `Adult ${passengerCount1.innerText}, Youth ${passengerCount2.innerText}, Senior ${passengerCount3.innerText}`;

  const displayCon = document.getElementById("comfirm");

  displayCon.innerText = "SAVED";
  setTimeout(() => {
    displayCon.innerText = "";
  }, 4500);
}

function passengerSelect() {
  const conatiner = document.getElementById("container");
  const passengerSelectorPage = document.getElementById(
    "passengerSelectorPage"
  );

  conatiner.style.display = "none";
  passengerSelectorPage.style.display = "contents";
}
function passengerSelectCancel() {
  const conatiner = document.getElementById("container");
  const passengerSelectorPage = document.getElementById(
    "passengerSelectorPage"
  );

  conatiner.style.display = "contents";
  passengerSelectorPage.style.display = "none";
}
