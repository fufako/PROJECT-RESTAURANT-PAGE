"use strict";
(self["webpackChunkproject_restaurant_page"] = self["webpackChunkproject_restaurant_page"] || []).push([["load"],{

/***/ "./src/firstLoad.js":
/*!**************************!*\
  !*** ./src/firstLoad.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
const content = document.getElementById("content")
const header = document.createElement("div")

const main = document.createElement("div")
const hero = document.createElement("div")

function setupLayout() {
  content.appendChild(header)
  content.appendChild(main)
  content.appendChild(hero)
}

const headerContent = document.createElement("h1")
const headerMenu = document.createElement("div")
const heroContent = document.createElement("h2")

function setupHeader() {
  header.id = "header"
  headerMenu.id = "header-menu"
  const menu = ["Home", "Menu", "Contact"]

  header.appendChild(headerContent)
  header.appendChild(headerMenu)

  headerContent.textContent = "Spicy Dicey"

  menu.forEach((element) => {
    let menuItem = document.createElement("p")
    headerMenu.appendChild(menuItem)
    menuItem.id = element
    menuItem.textContent = element
  })
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
  setupHeader()
  setupMain()
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/firstLoad.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ZpcnN0TG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG5mdW5jdGlvbiBzZXR1cExheW91dCgpIHtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZXJvKVxufVxuXG5jb25zdCBoZWFkZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG5jb25zdCBoZWFkZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuY29uc3QgaGVyb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcblxuZnVuY3Rpb24gc2V0dXBIZWFkZXIoKSB7XG4gIGhlYWRlci5pZCA9IFwiaGVhZGVyXCJcbiAgaGVhZGVyTWVudS5pZCA9IFwiaGVhZGVyLW1lbnVcIlxuICBjb25zdCBtZW51ID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdXG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnQpXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJNZW51KVxuXG4gIGhlYWRlckNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlNwaWN5IERpY2V5XCJcblxuICBtZW51LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBsZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGhlYWRlck1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW0pXG4gICAgbWVudUl0ZW0uaWQgPSBlbGVtZW50XG4gICAgbWVudUl0ZW0udGV4dENvbnRlbnQgPSBlbGVtZW50XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHNldHVwTWFpbigpIHtcbiAgbWFpbi5pZCA9IFwibWFpblwiXG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVybylcblxuICBoZXJvLmlkID0gXCJoZXJvXCJcbiAgaGVyby5hcHBlbmRDaGlsZChoZXJvQ29udGVudClcblxuICBoZXJvQ29udGVudC50ZXh0Q29udGVudCA9IFwiU3BpY3kgYW5kIERpY2V5IGRlbGljaW91cyBmb29kIVwiXG4gIGhlcm9Db250ZW50LmlkID0gXCJoZXJvLWNvbnRlbnRcIlxuXG4gIGNvbnN0IGhlcm9TdWJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gIGNvbnN0IG9yZGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuXG4gIGhlcm9Db250ZW50LmFwcGVuZENoaWxkKGhlcm9TdWJDb250ZW50KVxuICBoZXJvQ29udGVudC5hcHBlbmRDaGlsZChvcmRlckJ0bilcblxuICBoZXJvU3ViQ29udGVudC50ZXh0Q29udGVudCA9IFwiVGFzdHkgYW5kIGFmZm9yZGFibGUhXCJcbiAgaGVyb1N1YkNvbnRlbnQuaWQgPSBcImhlcm8tc3ViLWNvbnRlbnRcIlxuXG4gIG9yZGVyQnRuLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIlxuICBvcmRlckJ0bi5pZCA9IFwib3JkZXItYnV0dG9uXCJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBzZXR1cExheW91dCgpXG4gIHNldHVwSGVhZGVyKClcbiAgc2V0dXBNYWluKClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==