"use strict";
(self["webpackChunkproject_restaurant_page"] = self["webpackChunkproject_restaurant_page"] || []).push([["load"],{

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage)
/* harmony export */ });
const content = document.getElementById("content")
const header = document.getElementById("header")

const headerContent = document.createElement("h1")
const headerMenu = document.createElement("div")

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZFBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIilcblxuY29uc3QgaGVhZGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuY29uc3QgaGVhZGVyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuZnVuY3Rpb24gc2V0dXBIZWFkZXIoKSB7XG4gIGhlYWRlci5pZCA9IFwiaGVhZGVyXCJcbiAgaGVhZGVyTWVudS5pZCA9IFwiaGVhZGVyLW1lbnVcIlxuICBjb25zdCBtZW51ID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdXG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnQpXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJNZW51KVxuXG4gIGhlYWRlckNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlNwaWN5LWFuZC1EaWNleVwiXG5cbiAgbWVudS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgbGV0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBoZWFkZXJNZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtKVxuICAgIG1lbnVJdGVtLmlkID0gZWxlbWVudFxuICAgIG1lbnVJdGVtLnRleHRDb250ZW50ID0gZWxlbWVudFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gIHNldHVwSGVhZGVyKClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==