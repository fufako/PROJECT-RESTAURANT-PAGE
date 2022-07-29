import { loadHome } from "./loadHome.js"

const header = document.getElementById("header")

const headerContent = document.createElement("h1")
const headerMenu = document.createElement("div")
headerContent.id = "header-title"

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

export function loadPage() {
  setupHeader()
}
