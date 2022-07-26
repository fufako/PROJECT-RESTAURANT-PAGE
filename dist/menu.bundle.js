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
  const fishImage = document.createElement("img")
  const fishText = document.createElement("p")

  fish.className = "dishes"
  fishImage.src = _images_food1_png__WEBPACK_IMPORTED_MODULE_0__
  fish.textContent =
    "Nestle leeks, potato and capers around salmon fillets to make this easy traybake for two. It's great as an midweek meal, or for a more romantic occasion"
  fish.appendChild(fishImage)
  fish.appendChild(fishText)

  //Pasta Dish

  const pasta = document.createElement("div")
  const pastaImage = document.createElement("img")
  const pastaText = document.createElement("p")

  pasta.className = "dishes"
  pastaImage.src = _images_food2_png__WEBPACK_IMPORTED_MODULE_1__
  pasta.textContent =
    "Sit back and tuck into a big bowl of pasta alla vodka, a creamy tomato pasta with – as you can guess – vodka, which balances out the intense flavours"
  pasta.appendChild(pastaImage)
  pasta.appendChild(pastaText)

  //Soup Dish

  const soup = document.createElement("div")
  const soupImage = document.createElement("img")
  const soupText = document.createElement("p")

  soup.className = "dishes"
  soupImage.src = _images_food3_png__WEBPACK_IMPORTED_MODULE_2__
  soup.textContent =
    "A delicious, spicy blend packed full of iron and low in fat to boot. It's ready in under half an hour, or can be made in a slow cooker"
  soup.appendChild(soupImage)
  soup.appendChild(soupText)

  //Rice Dish

  const rice = document.createElement("div")
  const riceImage = document.createElement("img")
  const riceText = document.createElement("p")

  rice.className = "dishes"
  riceImage.src = _images_food4_png__WEBPACK_IMPORTED_MODULE_3__
  rice.textContent =
    "Encourage kids to get creative in the kitchen with our rainbow fried rice recipe – it's been designed to be easy for children to follow"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDQztBQUNEO0FBQ0E7O0FBRWhEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiw4Q0FBZTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsOENBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiw4Q0FBZTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsOENBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRNZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXNoSW1nSW1wb3J0ZWQgZnJvbSBcIi4vaW1hZ2VzL2Zvb2QxLnBuZ1wiXG5pbXBvcnQgcGFzdGFJbWdJbXBvcnRlZCBmcm9tIFwiLi9pbWFnZXMvZm9vZDIucG5nXCJcbmltcG9ydCBzb3VwSW1nSW1wb3J0ZWQgZnJvbSBcIi4vaW1hZ2VzL2Zvb2QzLnBuZ1wiXG5pbXBvcnQgcmljZUltZ0ltcG9ydGVkIGZyb20gXCIuL2ltYWdlcy9mb29kNC5wbmdcIlxuXG5jb250ZW50LmlubmVySFRNTCA9IFwiXCJcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCBoZXJvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcblxuZnVuY3Rpb24gc2V0dXBMYXlvdXQoKSB7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcbn1cblxuZnVuY3Rpb24gc2V0dXBNYWluKCkge1xuICBtYWluLmlkID0gXCJtYWluLW1lbnVcIlxuICBtYWluLmFwcGVuZENoaWxkKGhlcm9UaXRsZSlcbiAgbWFpbi5hcHBlbmRDaGlsZChoZXJvKVxuXG4gIGhlcm9UaXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiXG4gIGhlcm9UaXRsZS5pZCA9IFwiaGVyby10aXRsZS1tZW51XCJcbiAgaGVyby5pZCA9IFwiaGVyby1tZW51XCJcblxuICAvLyBGaXNoIGRpc2hcblxuICBjb25zdCBmaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBjb25zdCBmaXNoSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gIGNvbnN0IGZpc2hUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcblxuICBmaXNoLmNsYXNzTmFtZSA9IFwiZGlzaGVzXCJcbiAgZmlzaEltYWdlLnNyYyA9IGZpc2hJbWdJbXBvcnRlZFxuICBmaXNoLnRleHRDb250ZW50ID1cbiAgICBcIk5lc3RsZSBsZWVrcywgcG90YXRvIGFuZCBjYXBlcnMgYXJvdW5kIHNhbG1vbiBmaWxsZXRzIHRvIG1ha2UgdGhpcyBlYXN5IHRyYXliYWtlIGZvciB0d28uIEl0J3MgZ3JlYXQgYXMgYW4gbWlkd2VlayBtZWFsLCBvciBmb3IgYSBtb3JlIHJvbWFudGljIG9jY2FzaW9uXCJcbiAgZmlzaC5hcHBlbmRDaGlsZChmaXNoSW1hZ2UpXG4gIGZpc2guYXBwZW5kQ2hpbGQoZmlzaFRleHQpXG5cbiAgLy9QYXN0YSBEaXNoXG5cbiAgY29uc3QgcGFzdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGNvbnN0IHBhc3RhSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gIGNvbnN0IHBhc3RhVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5cbiAgcGFzdGEuY2xhc3NOYW1lID0gXCJkaXNoZXNcIlxuICBwYXN0YUltYWdlLnNyYyA9IHBhc3RhSW1nSW1wb3J0ZWRcbiAgcGFzdGEudGV4dENvbnRlbnQgPVxuICAgIFwiU2l0IGJhY2sgYW5kIHR1Y2sgaW50byBhIGJpZyBib3dsIG9mIHBhc3RhIGFsbGEgdm9ka2EsIGEgY3JlYW15IHRvbWF0byBwYXN0YSB3aXRoIOKAkyBhcyB5b3UgY2FuIGd1ZXNzIOKAkyB2b2RrYSwgd2hpY2ggYmFsYW5jZXMgb3V0IHRoZSBpbnRlbnNlIGZsYXZvdXJzXCJcbiAgcGFzdGEuYXBwZW5kQ2hpbGQocGFzdGFJbWFnZSlcbiAgcGFzdGEuYXBwZW5kQ2hpbGQocGFzdGFUZXh0KVxuXG4gIC8vU291cCBEaXNoXG5cbiAgY29uc3Qgc291cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgY29uc3Qgc291cEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICBjb25zdCBzb3VwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5cbiAgc291cC5jbGFzc05hbWUgPSBcImRpc2hlc1wiXG4gIHNvdXBJbWFnZS5zcmMgPSBzb3VwSW1nSW1wb3J0ZWRcbiAgc291cC50ZXh0Q29udGVudCA9XG4gICAgXCJBIGRlbGljaW91cywgc3BpY3kgYmxlbmQgcGFja2VkIGZ1bGwgb2YgaXJvbiBhbmQgbG93IGluIGZhdCB0byBib290LiBJdCdzIHJlYWR5IGluIHVuZGVyIGhhbGYgYW4gaG91ciwgb3IgY2FuIGJlIG1hZGUgaW4gYSBzbG93IGNvb2tlclwiXG4gIHNvdXAuYXBwZW5kQ2hpbGQoc291cEltYWdlKVxuICBzb3VwLmFwcGVuZENoaWxkKHNvdXBUZXh0KVxuXG4gIC8vUmljZSBEaXNoXG5cbiAgY29uc3QgcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgY29uc3QgcmljZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICBjb25zdCByaWNlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5cbiAgcmljZS5jbGFzc05hbWUgPSBcImRpc2hlc1wiXG4gIHJpY2VJbWFnZS5zcmMgPSByaWNlSW1nSW1wb3J0ZWRcbiAgcmljZS50ZXh0Q29udGVudCA9XG4gICAgXCJFbmNvdXJhZ2Uga2lkcyB0byBnZXQgY3JlYXRpdmUgaW4gdGhlIGtpdGNoZW4gd2l0aCBvdXIgcmFpbmJvdyBmcmllZCByaWNlIHJlY2lwZSDigJMgaXQncyBiZWVuIGRlc2lnbmVkIHRvIGJlIGVhc3kgZm9yIGNoaWxkcmVuIHRvIGZvbGxvd1wiXG4gIHJpY2UuYXBwZW5kQ2hpbGQocmljZUltYWdlKVxuICByaWNlLmFwcGVuZENoaWxkKHJpY2VUZXh0KVxuXG4gIC8vQXBwZW5kIGRpc2hlc1xuXG4gIGhlcm8uYXBwZW5kQ2hpbGQoZmlzaClcbiAgaGVyby5hcHBlbmRDaGlsZChwYXN0YSlcbiAgaGVyby5hcHBlbmRDaGlsZChzb3VwKVxuICBoZXJvLmFwcGVuZENoaWxkKHJpY2UpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgc2V0dXBMYXlvdXQoKVxuICBzZXR1cE1haW4oKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9