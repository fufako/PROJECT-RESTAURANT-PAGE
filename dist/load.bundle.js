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

headerContent.addEventListener("click", (0,_loadHome_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)())

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ3dDOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0NBQXdDLHNEQUFROztBQUVoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZEhvbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZFBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCBoZXJvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxuXG5mdW5jdGlvbiBzZXR1cExheW91dCgpIHtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKVxufVxuXG5mdW5jdGlvbiBzZXR1cE1haW4oKSB7XG4gIG1haW4uaWQgPSBcIm1haW5cIlxuICBtYWluLmFwcGVuZENoaWxkKGhlcm8pXG5cbiAgaGVyby5pZCA9IFwiaGVyb1wiXG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0NvbnRlbnQpXG5cbiAgaGVyb0NvbnRlbnQudGV4dENvbnRlbnQgPSBcIlNwaWN5IGFuZCBEaWNleSBkZWxpY2lvdXMgZm9vZCFcIlxuICBoZXJvQ29udGVudC5pZCA9IFwiaGVyby1jb250ZW50XCJcblxuICBjb25zdCBoZXJvU3ViQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcblxuICBoZXJvQ29udGVudC5hcHBlbmRDaGlsZChoZXJvU3ViQ29udGVudClcbiAgaGVyb0NvbnRlbnQuYXBwZW5kQ2hpbGQob3JkZXJCdG4pXG5cbiAgaGVyb1N1YkNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlRhc3R5IGFuZCBhZmZvcmRhYmxlIVwiXG4gIGhlcm9TdWJDb250ZW50LmlkID0gXCJoZXJvLXN1Yi1jb250ZW50XCJcblxuICBvcmRlckJ0bi50ZXh0Q29udGVudCA9IFwiT3JkZXIgTm93XCJcbiAgb3JkZXJCdG4uaWQgPSBcIm9yZGVyLWJ1dHRvblwiXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgc2V0dXBMYXlvdXQoKVxuICBzZXR1cE1haW4oKVxufVxuIiwiaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tIFwiLi9sb2FkSG9tZS5qc1wiXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpXG5cbmNvbnN0IGhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbmNvbnN0IGhlYWRlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbmhlYWRlckNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRIb21lKCkpXG5cbmZ1bmN0aW9uIHNldHVwSGVhZGVyKCkge1xuICBoZWFkZXIuaWQgPSBcImhlYWRlclwiXG4gIGhlYWRlck1lbnUuaWQgPSBcImhlYWRlci1tZW51XCJcbiAgY29uc3QgbWVudSA9IFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXVxuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJDb250ZW50KVxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTWVudSlcblxuICBoZWFkZXJDb250ZW50LnRleHRDb250ZW50ID0gXCJTcGljeS1hbmQtRGljZXlcIlxuXG4gIG1lbnUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgaGVhZGVyTWVudS5hcHBlbmRDaGlsZChtZW51SXRlbSlcbiAgICBtZW51SXRlbS5pZCA9IGVsZW1lbnRcbiAgICBtZW51SXRlbS50ZXh0Q29udGVudCA9IGVsZW1lbnRcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICBzZXR1cEhlYWRlcigpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=