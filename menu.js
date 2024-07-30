function sideBar() {
  const conatiner = document.getElementById("container");

  const menu = document.querySelector("menu");
  menu.style.opacity = "1";
  menu.style.pointerEvents = "visible";
  conatiner.style.opacity = "0";

  // setTimeout(() => {
  //   conatiner.style.display = "none";
  // }, 500);

  const body = document.querySelector("body");

  body.style.overflow = "hidden";
}
function sideBarCancel() {
  const conatiner = document.getElementById("container");

  const menu = document.querySelector("menu");
  menu.style.opacity = "0";
  menu.style.pointerEvents = "none";

  conatiner.style.opacity = "1";

  // setTimeout(() => {
  //   conatiner.style.display = "contents";
  // }, 100);

  const body = document.querySelector("body");

  body.style.overflow = "scroll";
}
const busesLoc = [
  {
    from: "Durban",
    to: "Johannesburg",
  },
  {
    from: "Johannesburg",
    to: "Durban",
  },
  {
    from: "Durban",
    to: "Pretoria",
  },
  {
    from: "Pretoria",
    to: "Durban",
  },
  {
    from: "Johannesburg",
    to: "Cape Town",
  },
  {
    from: "London",
    to: "Toronto",
  },
  {
    from: "Toronto",
    to: "London",
  },
];

busesLoc.map((index) => {
  const lists = document.getElementById("listss1");
  lists.insertAdjacentHTML(
    "beforeend",
    `<div class="list1">
                  <p>${index.from}</p>
                  <div>
                    <img src="icons/icons8-right-50.png" />
                  </div>
                  <p>${index.to}</p>
                </div> `
  );
});

{
  let i = 1;
  function showList1() {
    const lists = document.getElementById("listss1");
    const listIcon = document.getElementById("listIcon1");
    if (i === 1) {
      lists.style.display = "contents";
      listIcon.innerHTML = `<img src="icons/chevron-up.svg" />`;
      return (i = 2);
    } else if (i === 2) {
      lists.style.display = "none";
      listIcon.innerHTML = `<img src="icons/chevron-down.svg" />`;
      return (i = 1);
    }
  }
}
const trainsLoc = [
  {
    from: "Toranto",
    to: "Montreal",
  },
  {
    from: "Orlando",
    to: "Miami",
  },
  {
    from: "Miami",
    to: "Orlando",
  },
  {
    from: "Montreal",
    to: "Toronto",
  },
  {
    from: "Montreal",
    to: "Ottawa",
  },
];

trainsLoc.map((index) => {
  const lists = document.getElementById("listss2");
  lists.insertAdjacentHTML(
    "beforeend",
    `<div class="list2">
                  <p>${index.from}</p>
                  <div>
                    <img src="icons/icons8-right-50.png" />
                  </div>
                  <p>${index.to}</p>
                </div> `
  );
});

{
  let i = 1;
  function showList2() {
    const lists = document.getElementById("listss2");
    const listIcon = document.getElementById("listIcon2");
    if (i === 1) {
      lists.style.display = "contents";
      listIcon.innerHTML = `<img src="icons/chevron-up.svg" />`;
      return (i = 2);
    } else if (i === 2) {
      lists.style.display = "none";
      listIcon.innerHTML = `<img src="icons/chevron-down.svg" />`;
      return (i = 1);
    }
  }
}

const Places = [
  {
    from: "Johannesburg",
    to: "Johannesburg Airport",
  },
  {
    from: "Durban",
    to: "Durban Airport",
  },
  {
    from: "Johannesburg Airport",
    to: "Johannesburg",
  },
  {
    from: "Johannesburg Airport",
    to: "Gaborone",
  },
  {
    from: "Durban Airport",
    to: "Durban",
  },
];

Places.map((index) => {
  const lists = document.getElementById("listss3");
  lists.insertAdjacentHTML(
    "beforeend",
    `<div class="list3">
                  <p>${index.from}</p>
                  <div>
                    <img src="icons/icons8-right-50.png" />
                  </div>
                  <p>${index.to}</p>
                </div> `
  );
});

{
  let i = 1;
  function showList3() {
    const lists = document.getElementById("listss3");
    const listIcon = document.getElementById("listIcon3");
    if (i === 1) {
      lists.style.display = "contents";
      listIcon.innerHTML = `<img src="icons/chevron-up.svg" />`;
      return (i = 2);
    } else if (i === 2) {
      lists.style.display = "none";
      listIcon.innerHTML = `<img src="icons/chevron-down.svg" />`;
      return (i = 1);
    }
  }
}
