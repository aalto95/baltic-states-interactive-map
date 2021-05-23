let store = {

  regionData(e) {
    console.log(e);
    document.getElementById("acab").style.display = "block";
    this._state.data.title = e.target.getAttribute("title");
    this._state.data.area = e.target.getAttribute("area");
    this._state.data.population = e.target.getAttribute("population");
    this._state.data.capital = e.target.getAttribute("capital");
    this._callSubscriber(this._state);

    document.addEventListener(
      "mousemove",
      function (ev) {
        document.getElementById("acab").style.transform =
          "translateY(" + (ev.clientY - 110) + "px)";
        document.getElementById("acab").style.transform +=
          "translateX(" + (ev.clientX - 60) + "px)";
      },
      false
    );
  },
  regionDataOff() {
    document.getElementById("acab").style.display = "none";
  },
  _callSubscriber() {
    console.log("state changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

window.store = store;
export default store;
