function currentdate() {
  const date = document.getElementById("currentdate");
  const currentDate = new Date();
  date.value = currentDate.toDateString();
}
currentdate();
const locations = [
  {
    from: "From Midrand to Johannesburg",
    departures: "38",
    price: "$25",
    duration: "35m",
  },
  {
    from: "From Cape Town to Bellville",
    departures: "27",
    price: "$28",
    duration: "25m",
  },
  {
    from: "From Centurion to Pretoria",
    departures: "4",
    price: "$109",
    duration: "30m",
  },
  {
    from: "From George to Wilderness",
    departures: "11",
    price: "$25",
    duration: "8h 30m",
  },
];
const footer = document.getElementById("footer");
locations.map((index) => {
  footer.insertAdjacentHTML(
    "beforeend",
    `<div class="footer-main-content">
                <div class="top-option">
                  <p>${index.from}</p>
                  <button>
                    <img src="icons/blue-search.svg" />
                    <span>Book</span>
                  </button>
                </div>

                <div class="option">
                  <p>Daily Departures</p>
                  <span>${index.departures}</span>
                </div>
                <div class="option">
                  <p>Average price</p>
                  <span>${index.price}</span>
                </div>
                <div class="option">
                  <p>Average trip duration</p>
                  <span>${index.duration}</span>
                </div>
              </div>`
  );
});
