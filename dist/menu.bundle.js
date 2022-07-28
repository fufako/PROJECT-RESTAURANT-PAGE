"use strict";
(self["webpackChunkproject_restaurant_page"] = self["webpackChunkproject_restaurant_page"] || []).push([["menu"],{

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _images_food1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/food1.png */ "./src/images/food1.png");
/* harmony import */ var _images_food2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/food2.png */ "./src/images/food2.png");
/* harmony import */ var _images_food3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/food3.png */ "./src/images/food3.png");
/* harmony import */ var _images_food4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/food4.png */ "./src/images/food4.png");





content.innerHTML = ""

const main = document.createElement("div")
const hero = document.createElement("div")
const heroTitle = document.createElement("h2")

function setupLayout() {
  content.appendChild(main)
}

function setupMain() {
  main.id = "main-menu"
  main.appendChild(heroTitle)
  main.appendChild(hero)

  heroTitle.textContent = "Menu"
  heroTitle.id = "hero-title-menu"
  hero.id = "hero-menu"

  // Fish dish

  const fish = document.createElement("div")
  const fishTitle = document.createElement("h2")
  const fishImage = document.createElement("img")
  const fishText = document.createElement("p")

  fish.className = "dishes"
  fishImage.src = _images_food1_png__WEBPACK_IMPORTED_MODULE_0__
  fishText.textContent =
    "Nestle leeks, potato and capers around salmon fillets to make this easy traybake for two. It's great as an midweek meal, or for a more romantic occasion"
  fishTitle.textContent = "Fish and chips"
  fish.appendChild(fishTitle)
  fish.appendChild(fishImage)
  fish.appendChild(fishText)

  //Pasta Dish

  const pasta = document.createElement("div")
  const pastaTitle = document.createElement("h2")
  const pastaImage = document.createElement("img")
  const pastaText = document.createElement("p")

  pasta.className = "dishes"
  pastaImage.src = _images_food2_png__WEBPACK_IMPORTED_MODULE_1__
  pastaText.textContent =
    "Sit back and tuck into a big bowl of pasta alla vodka, a creamy tomato pasta with – as you can guess – vodka, which balances out the intense flavours"
  pastaTitle.textContent = "Italian Pasta"
  pasta.appendChild(pastaTitle)
  pasta.appendChild(pastaImage)
  pasta.appendChild(pastaText)

  //Soup Dish

  const soup = document.createElement("div")
  const soupTitle = document.createElement("h2")
  const soupImage = document.createElement("img")
  const soupText = document.createElement("p")

  soup.className = "dishes"
  soupImage.src = _images_food3_png__WEBPACK_IMPORTED_MODULE_2__
  soupText.textContent =
    "A delicious, spicy blend packed full of iron and low in fat to boot. It's ready in under half an hour, or can be made in a slow cooker"
  soupTitle.textContent = "German potato soup"
  soup.appendChild(soupTitle)
  soup.appendChild(soupImage)
  soup.appendChild(soupText)

  //Rice Dish

  const rice = document.createElement("div")
  const riceTitle = document.createElement("h2")
  const riceImage = document.createElement("img")
  const riceText = document.createElement("p")

  rice.className = "dishes"
  riceImage.src = _images_food4_png__WEBPACK_IMPORTED_MODULE_3__
  riceText.textContent =
    "Encourage kids to get creative in the kitchen with our rainbow fried rice recipe – it's been designed to be easy for children to follow"
  riceTitle.textContent = "Rice with salmon"
  rice.appendChild(riceTitle)
  rice.appendChild(riceImage)
  rice.appendChild(riceText)

  //Append dishes

  hero.appendChild(fish)
  hero.appendChild(pasta)
  hero.appendChild(soup)
  hero.appendChild(rice)
}

function loadMenu() {
  setupLayout()
  setupMain()
}


/***/ }),

/***/ "./src/images/food1.png":
/*!******************************!*\
  !*** ./src/images/food1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a499cc957f7d13dacf07.png";

/***/ }),

/***/ "./src/images/food2.png":
/*!******************************!*\
  !*** ./src/images/food2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b8f8845bbbb7474434c.png";

/***/ }),

/***/ "./src/images/food3.png":
/*!******************************!*\
  !*** ./src/images/food3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bec5be57b1131481bcec.png";

/***/ }),

/***/ "./src/images/food4.png":
/*!******************************!*\
  !*** ./src/images/food4.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5b4d9e3f7e0f762c00d.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/loadMenu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDQztBQUNEO0FBQ0E7O0FBRWhEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDhDQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiw4Q0FBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDhDQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiw4Q0FBZTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRNZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXNoSW1nSW1wb3J0ZWQgZnJvbSBcIi4vaW1hZ2VzL2Zvb2QxLnBuZ1wiXG5pbXBvcnQgcGFzdGFJbWdJbXBvcnRlZCBmcm9tIFwiLi9pbWFnZXMvZm9vZDIucG5nXCJcbmltcG9ydCBzb3VwSW1nSW1wb3J0ZWQgZnJvbSBcIi4vaW1hZ2VzL2Zvb2QzLnBuZ1wiXG5pbXBvcnQgcmljZUltZ0ltcG9ydGVkIGZyb20gXCIuL2ltYWdlcy9mb29kNC5wbmdcIlxuXG5jb250ZW50LmlubmVySFRNTCA9IFwiXCJcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCBoZXJvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcblxuZnVuY3Rpb24gc2V0dXBMYXlvdXQoKSB7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcbn1cblxuZnVuY3Rpb24gc2V0dXBNYWluKCkge1xuICBtYWluLmlkID0gXCJtYWluLW1lbnVcIlxuICBtYWluLmFwcGVuZENoaWxkKGhlcm9UaXRsZSlcbiAgbWFpbi5hcHBlbmRDaGlsZChoZXJvKVxuXG4gIGhlcm9UaXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiXG4gIGhlcm9UaXRsZS5pZCA9IFwiaGVyby10aXRsZS1tZW51XCJcbiAgaGVyby5pZCA9IFwiaGVyby1tZW51XCJcblxuICAvLyBGaXNoIGRpc2hcblxuICBjb25zdCBmaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBjb25zdCBmaXNoVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgY29uc3QgZmlzaEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICBjb25zdCBmaXNoVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5cbiAgZmlzaC5jbGFzc05hbWUgPSBcImRpc2hlc1wiXG4gIGZpc2hJbWFnZS5zcmMgPSBmaXNoSW1nSW1wb3J0ZWRcbiAgZmlzaFRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiTmVzdGxlIGxlZWtzLCBwb3RhdG8gYW5kIGNhcGVycyBhcm91bmQgc2FsbW9uIGZpbGxldHMgdG8gbWFrZSB0aGlzIGVhc3kgdHJheWJha2UgZm9yIHR3by4gSXQncyBncmVhdCBhcyBhbiBtaWR3ZWVrIG1lYWwsIG9yIGZvciBhIG1vcmUgcm9tYW50aWMgb2NjYXNpb25cIlxuICBmaXNoVGl0bGUudGV4dENvbnRlbnQgPSBcIkZpc2ggYW5kIGNoaXBzXCJcbiAgZmlzaC5hcHBlbmRDaGlsZChmaXNoVGl0bGUpXG4gIGZpc2guYXBwZW5kQ2hpbGQoZmlzaEltYWdlKVxuICBmaXNoLmFwcGVuZENoaWxkKGZpc2hUZXh0KVxuXG4gIC8vUGFzdGEgRGlzaFxuXG4gIGNvbnN0IHBhc3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBjb25zdCBwYXN0YVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG4gIGNvbnN0IHBhc3RhSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gIGNvbnN0IHBhc3RhVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5cbiAgcGFzdGEuY2xhc3NOYW1lID0gXCJkaXNoZXNcIlxuICBwYXN0YUltYWdlLnNyYyA9IHBhc3RhSW1nSW1wb3J0ZWRcbiAgcGFzdGFUZXh0LnRleHRDb250ZW50ID1cbiAgICBcIlNpdCBiYWNrIGFuZCB0dWNrIGludG8gYSBiaWcgYm93bCBvZiBwYXN0YSBhbGxhIHZvZGthLCBhIGNyZWFteSB0b21hdG8gcGFzdGEgd2l0aCDigJMgYXMgeW91IGNhbiBndWVzcyDigJMgdm9ka2EsIHdoaWNoIGJhbGFuY2VzIG91dCB0aGUgaW50ZW5zZSBmbGF2b3Vyc1wiXG4gIHBhc3RhVGl0bGUudGV4dENvbnRlbnQgPSBcIkl0YWxpYW4gUGFzdGFcIlxuICBwYXN0YS5hcHBlbmRDaGlsZChwYXN0YVRpdGxlKVxuICBwYXN0YS5hcHBlbmRDaGlsZChwYXN0YUltYWdlKVxuICBwYXN0YS5hcHBlbmRDaGlsZChwYXN0YVRleHQpXG5cbiAgLy9Tb3VwIERpc2hcblxuICBjb25zdCBzb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBjb25zdCBzb3VwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgY29uc3Qgc291cEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICBjb25zdCBzb3VwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5cbiAgc291cC5jbGFzc05hbWUgPSBcImRpc2hlc1wiXG4gIHNvdXBJbWFnZS5zcmMgPSBzb3VwSW1nSW1wb3J0ZWRcbiAgc291cFRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiQSBkZWxpY2lvdXMsIHNwaWN5IGJsZW5kIHBhY2tlZCBmdWxsIG9mIGlyb24gYW5kIGxvdyBpbiBmYXQgdG8gYm9vdC4gSXQncyByZWFkeSBpbiB1bmRlciBoYWxmIGFuIGhvdXIsIG9yIGNhbiBiZSBtYWRlIGluIGEgc2xvdyBjb29rZXJcIlxuICBzb3VwVGl0bGUudGV4dENvbnRlbnQgPSBcIkdlcm1hbiBwb3RhdG8gc291cFwiXG4gIHNvdXAuYXBwZW5kQ2hpbGQoc291cFRpdGxlKVxuICBzb3VwLmFwcGVuZENoaWxkKHNvdXBJbWFnZSlcbiAgc291cC5hcHBlbmRDaGlsZChzb3VwVGV4dClcblxuICAvL1JpY2UgRGlzaFxuXG4gIGNvbnN0IHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGNvbnN0IHJpY2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxuICBjb25zdCByaWNlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gIGNvbnN0IHJpY2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcblxuICByaWNlLmNsYXNzTmFtZSA9IFwiZGlzaGVzXCJcbiAgcmljZUltYWdlLnNyYyA9IHJpY2VJbWdJbXBvcnRlZFxuICByaWNlVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJFbmNvdXJhZ2Uga2lkcyB0byBnZXQgY3JlYXRpdmUgaW4gdGhlIGtpdGNoZW4gd2l0aCBvdXIgcmFpbmJvdyBmcmllZCByaWNlIHJlY2lwZSDigJMgaXQncyBiZWVuIGRlc2lnbmVkIHRvIGJlIGVhc3kgZm9yIGNoaWxkcmVuIHRvIGZvbGxvd1wiXG4gIHJpY2VUaXRsZS50ZXh0Q29udGVudCA9IFwiUmljZSB3aXRoIHNhbG1vblwiXG4gIHJpY2UuYXBwZW5kQ2hpbGQocmljZVRpdGxlKVxuICByaWNlLmFwcGVuZENoaWxkKHJpY2VJbWFnZSlcbiAgcmljZS5hcHBlbmRDaGlsZChyaWNlVGV4dClcblxuICAvL0FwcGVuZCBkaXNoZXNcblxuICBoZXJvLmFwcGVuZENoaWxkKGZpc2gpXG4gIGhlcm8uYXBwZW5kQ2hpbGQocGFzdGEpXG4gIGhlcm8uYXBwZW5kQ2hpbGQoc291cClcbiAgaGVyby5hcHBlbmRDaGlsZChyaWNlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIHNldHVwTGF5b3V0KClcbiAgc2V0dXBNYWluKClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==