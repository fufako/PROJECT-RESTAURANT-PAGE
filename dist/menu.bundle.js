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

  //Items in menu
  //   for (let i = 1; i < 5; i++) {
  //     let newMenuItem = document.createElement("div")
  //     let foodImage = document.createElement("img")
  //     let newMenuItemTxt = document.createElement("p")

  //     newMenuItem.className = "menu-item"

  //     foodImage.src = food
  //     newMenuItemTxt.textContent =
  //       "Tasty food prepared with passion by our best cooks"

  //     newMenuItem.appendChild(foodImage)
  //     newMenuItem.appendChild(newMenuItemTxt)

  //     hero.appendChild(newMenuItem)
  //   }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDQztBQUNEO0FBQ0E7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDhDQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiw4Q0FBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDhDQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiw4Q0FBZTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkTWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlzaEltZ0ltcG9ydGVkIGZyb20gXCIuL2ltYWdlcy9mb29kMS5wbmdcIlxuaW1wb3J0IHBhc3RhSW1nSW1wb3J0ZWQgZnJvbSBcIi4vaW1hZ2VzL2Zvb2QyLnBuZ1wiXG5pbXBvcnQgc291cEltZ0ltcG9ydGVkIGZyb20gXCIuL2ltYWdlcy9mb29kMy5wbmdcIlxuaW1wb3J0IHJpY2VJbWdJbXBvcnRlZCBmcm9tIFwiLi9pbWFnZXMvZm9vZDQucG5nXCJcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCBoZXJvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcblxuZnVuY3Rpb24gc2V0dXBMYXlvdXQoKSB7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcbn1cblxuZnVuY3Rpb24gc2V0dXBNYWluKCkge1xuICBtYWluLmlkID0gXCJtYWluLW1lbnVcIlxuICBtYWluLmFwcGVuZENoaWxkKGhlcm9UaXRsZSlcbiAgbWFpbi5hcHBlbmRDaGlsZChoZXJvKVxuXG4gIGhlcm9UaXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiXG4gIGhlcm9UaXRsZS5pZCA9IFwiaGVyby10aXRsZS1tZW51XCJcbiAgaGVyby5pZCA9IFwiaGVyby1tZW51XCJcblxuICAvLyBGaXNoIGRpc2hcbiAgY29uc3QgZmlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgY29uc3QgZmlzaEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICBjb25zdCBmaXNoVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5cbiAgZmlzaC5jbGFzc05hbWUgPSBcImRpc2hlc1wiXG4gIGZpc2hJbWFnZS5zcmMgPSBmaXNoSW1nSW1wb3J0ZWRcbiAgZmlzaC50ZXh0Q29udGVudCA9XG4gICAgXCJOZXN0bGUgbGVla3MsIHBvdGF0byBhbmQgY2FwZXJzIGFyb3VuZCBzYWxtb24gZmlsbGV0cyB0byBtYWtlIHRoaXMgZWFzeSB0cmF5YmFrZSBmb3IgdHdvLiBJdCdzIGdyZWF0IGFzIGFuIG1pZHdlZWsgbWVhbCwgb3IgZm9yIGEgbW9yZSByb21hbnRpYyBvY2Nhc2lvblwiXG4gIGZpc2guYXBwZW5kQ2hpbGQoZmlzaEltYWdlKVxuICBmaXNoLmFwcGVuZENoaWxkKGZpc2hUZXh0KVxuXG4gIC8vUGFzdGEgRGlzaFxuXG4gIGNvbnN0IHBhc3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBjb25zdCBwYXN0YUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICBjb25zdCBwYXN0YVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuXG4gIHBhc3RhLmNsYXNzTmFtZSA9IFwiZGlzaGVzXCJcbiAgcGFzdGFJbWFnZS5zcmMgPSBwYXN0YUltZ0ltcG9ydGVkXG4gIHBhc3RhLnRleHRDb250ZW50ID1cbiAgICBcIlNpdCBiYWNrIGFuZCB0dWNrIGludG8gYSBiaWcgYm93bCBvZiBwYXN0YSBhbGxhIHZvZGthLCBhIGNyZWFteSB0b21hdG8gcGFzdGEgd2l0aCDigJMgYXMgeW91IGNhbiBndWVzcyDigJMgdm9ka2EsIHdoaWNoIGJhbGFuY2VzIG91dCB0aGUgaW50ZW5zZSBmbGF2b3Vyc1wiXG4gIHBhc3RhLmFwcGVuZENoaWxkKHBhc3RhSW1hZ2UpXG4gIHBhc3RhLmFwcGVuZENoaWxkKHBhc3RhVGV4dClcblxuICAvL1NvdXAgRGlzaFxuXG4gIGNvbnN0IHNvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGNvbnN0IHNvdXBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgY29uc3Qgc291cFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuXG4gIHNvdXAuY2xhc3NOYW1lID0gXCJkaXNoZXNcIlxuICBzb3VwSW1hZ2Uuc3JjID0gc291cEltZ0ltcG9ydGVkXG4gIHNvdXAudGV4dENvbnRlbnQgPVxuICAgIFwiQSBkZWxpY2lvdXMsIHNwaWN5IGJsZW5kIHBhY2tlZCBmdWxsIG9mIGlyb24gYW5kIGxvdyBpbiBmYXQgdG8gYm9vdC4gSXQncyByZWFkeSBpbiB1bmRlciBoYWxmIGFuIGhvdXIsIG9yIGNhbiBiZSBtYWRlIGluIGEgc2xvdyBjb29rZXJcIlxuICBzb3VwLmFwcGVuZENoaWxkKHNvdXBJbWFnZSlcbiAgc291cC5hcHBlbmRDaGlsZChzb3VwVGV4dClcblxuICAvL1JpY2UgRGlzaFxuXG4gIGNvbnN0IHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGNvbnN0IHJpY2VJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgY29uc3QgcmljZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuXG4gIHJpY2UuY2xhc3NOYW1lID0gXCJkaXNoZXNcIlxuICByaWNlSW1hZ2Uuc3JjID0gcmljZUltZ0ltcG9ydGVkXG4gIHJpY2UudGV4dENvbnRlbnQgPVxuICAgIFwiRW5jb3VyYWdlIGtpZHMgdG8gZ2V0IGNyZWF0aXZlIGluIHRoZSBraXRjaGVuIHdpdGggb3VyIHJhaW5ib3cgZnJpZWQgcmljZSByZWNpcGUg4oCTIGl0J3MgYmVlbiBkZXNpZ25lZCB0byBiZSBlYXN5IGZvciBjaGlsZHJlbiB0byBmb2xsb3dcIlxuICByaWNlLmFwcGVuZENoaWxkKHJpY2VJbWFnZSlcbiAgcmljZS5hcHBlbmRDaGlsZChyaWNlVGV4dClcblxuICAvL0l0ZW1zIGluIG1lbnVcbiAgLy8gICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAvLyAgICAgbGV0IG5ld01lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAvLyAgICAgbGV0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgLy8gICAgIGxldCBuZXdNZW51SXRlbVR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5cbiAgLy8gICAgIG5ld01lbnVJdGVtLmNsYXNzTmFtZSA9IFwibWVudS1pdGVtXCJcblxuICAvLyAgICAgZm9vZEltYWdlLnNyYyA9IGZvb2RcbiAgLy8gICAgIG5ld01lbnVJdGVtVHh0LnRleHRDb250ZW50ID1cbiAgLy8gICAgICAgXCJUYXN0eSBmb29kIHByZXBhcmVkIHdpdGggcGFzc2lvbiBieSBvdXIgYmVzdCBjb29rc1wiXG5cbiAgLy8gICAgIG5ld01lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2RJbWFnZSlcbiAgLy8gICAgIG5ld01lbnVJdGVtLmFwcGVuZENoaWxkKG5ld01lbnVJdGVtVHh0KVxuXG4gIC8vICAgICBoZXJvLmFwcGVuZENoaWxkKG5ld01lbnVJdGVtKVxuICAvLyAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBzZXR1cExheW91dCgpXG4gIHNldHVwTWFpbigpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=