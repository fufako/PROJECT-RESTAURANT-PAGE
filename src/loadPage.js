const content = document.getElementById("content")
const header = document.createElement("div")

const headerContent = document.createElement("h1")
const headerMenu = document.createElement("div")

content.appendChild(header)

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
