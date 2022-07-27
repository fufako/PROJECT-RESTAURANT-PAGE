"use strict";
(self["webpackChunkproject_restaurant_page"] = self["webpackChunkproject_restaurant_page"] || []).push([["load"],{

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


/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _loadHome_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHome.js */ "./src/loadHome.js");


const content = document.getElementById("content")
const header = document.getElementById("header")

const headerContent = document.createElement("h1")
const headerMenu = document.createElement("div")

// headerContent.addEventListener("click", loadHome())

function setupHeader() {
  header.id = "header"
  headerMenu.id = "header-menu"
  const menu = ["Home", "Menu", "Contact"]

  header.appendChild(headerContent)
  header.appendChild(headerMenu)

  headerContent.textContent = "Spicy-and-Dicey"

  menu.forEach((element) => {
    let menuItem = document.createElement("p")
    headerMenu.appendChild(menuItem)
    menuItem.id = element
    menuItem.textContent = element
  })
}

function loadPage() {
  setupHeader()
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/loadPage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ3dDOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRIb21lLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuY29uc3QgaGVyb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcblxuZnVuY3Rpb24gc2V0dXBMYXlvdXQoKSB7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcbn1cblxuZnVuY3Rpb24gc2V0dXBNYWluKCkge1xuICBtYWluLmlkID0gXCJtYWluXCJcbiAgbWFpbi5hcHBlbmRDaGlsZChoZXJvKVxuXG4gIGhlcm8uaWQgPSBcImhlcm9cIlxuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9Db250ZW50KVxuXG4gIGhlcm9Db250ZW50LnRleHRDb250ZW50ID0gXCJTcGljeSBhbmQgRGljZXkgZGVsaWNpb3VzIGZvb2QhXCJcbiAgaGVyb0NvbnRlbnQuaWQgPSBcImhlcm8tY29udGVudFwiXG5cbiAgY29uc3QgaGVyb1N1YkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5cbiAgaGVyb0NvbnRlbnQuYXBwZW5kQ2hpbGQoaGVyb1N1YkNvbnRlbnQpXG4gIGhlcm9Db250ZW50LmFwcGVuZENoaWxkKG9yZGVyQnRuKVxuXG4gIGhlcm9TdWJDb250ZW50LnRleHRDb250ZW50ID0gXCJUYXN0eSBhbmQgYWZmb3JkYWJsZSFcIlxuICBoZXJvU3ViQ29udGVudC5pZCA9IFwiaGVyby1zdWItY29udGVudFwiXG5cbiAgb3JkZXJCdG4udGV4dENvbnRlbnQgPSBcIk9yZGVyIE5vd1wiXG4gIG9yZGVyQnRuLmlkID0gXCJvcmRlci1idXR0b25cIlxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIHNldHVwTGF5b3V0KClcbiAgc2V0dXBNYWluKClcbn1cbiIsImltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSBcIi4vbG9hZEhvbWUuanNcIlxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKVxuXG5jb25zdCBoZWFkZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG5jb25zdCBoZWFkZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4vLyBoZWFkZXJDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkSG9tZSgpKVxuXG5mdW5jdGlvbiBzZXR1cEhlYWRlcigpIHtcbiAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIlxuICBoZWFkZXJNZW51LmlkID0gXCJoZWFkZXItbWVudVwiXG4gIGNvbnN0IG1lbnUgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkNvbnRhY3RcIl1cblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGVudClcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlck1lbnUpXG5cbiAgaGVhZGVyQ29udGVudC50ZXh0Q29udGVudCA9IFwiU3BpY3ktYW5kLURpY2V5XCJcblxuICBtZW51LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBsZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGhlYWRlck1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW0pXG4gICAgbWVudUl0ZW0uaWQgPSBlbGVtZW50XG4gICAgbWVudUl0ZW0udGV4dENvbnRlbnQgPSBlbGVtZW50XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgc2V0dXBIZWFkZXIoKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9