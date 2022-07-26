"use strict";
(self["webpackChunkproject_restaurant_page"] = self["webpackChunkproject_restaurant_page"] || []).push([["home"],{

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
const main = document.createElement("div")
const hero = document.createElement("div")
const heroContent = document.createElement("h2")

function setupLayout() {
  content.appendChild(main)
  content.appendChild(hero)
}

function setupMain() {
  main.id = "main"
  main.appendChild(hero)

  hero.id = "hero"
  hero.appendChild(heroContent)

  heroContent.textContent = "Spicy and Dicey delicious food!"
  heroContent.id = "hero-content"

  const heroSubContent = document.createElement("h3")
  const orderBtn = document.createElement("button")

  heroContent.appendChild(heroSubContent)
  heroContent.appendChild(orderBtn)

  heroSubContent.textContent = "Tasty and affordable!"
  heroSubContent.id = "hero-sub-content"

  orderBtn.textContent = "Order Now"
  orderBtn.id = "order-button"
}

function loadHome() {
  setupLayout()
  setupMain()
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/loadHome.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRIb21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuY29uc3QgaGVyb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcblxuZnVuY3Rpb24gc2V0dXBMYXlvdXQoKSB7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZXJvKVxufVxuXG5mdW5jdGlvbiBzZXR1cE1haW4oKSB7XG4gIG1haW4uaWQgPSBcIm1haW5cIlxuICBtYWluLmFwcGVuZENoaWxkKGhlcm8pXG5cbiAgaGVyby5pZCA9IFwiaGVyb1wiXG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0NvbnRlbnQpXG5cbiAgaGVyb0NvbnRlbnQudGV4dENvbnRlbnQgPSBcIlNwaWN5IGFuZCBEaWNleSBkZWxpY2lvdXMgZm9vZCFcIlxuICBoZXJvQ29udGVudC5pZCA9IFwiaGVyby1jb250ZW50XCJcblxuICBjb25zdCBoZXJvU3ViQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcblxuICBoZXJvQ29udGVudC5hcHBlbmRDaGlsZChoZXJvU3ViQ29udGVudClcbiAgaGVyb0NvbnRlbnQuYXBwZW5kQ2hpbGQob3JkZXJCdG4pXG5cbiAgaGVyb1N1YkNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlRhc3R5IGFuZCBhZmZvcmRhYmxlIVwiXG4gIGhlcm9TdWJDb250ZW50LmlkID0gXCJoZXJvLXN1Yi1jb250ZW50XCJcblxuICBvcmRlckJ0bi50ZXh0Q29udGVudCA9IFwiT3JkZXIgTm93XCJcbiAgb3JkZXJCdG4uaWQgPSBcIm9yZGVyLWJ1dHRvblwiXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgc2V0dXBMYXlvdXQoKVxuICBzZXR1cE1haW4oKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9