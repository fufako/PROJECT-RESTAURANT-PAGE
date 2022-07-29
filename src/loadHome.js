const main = document.createElement("div")
const hero = document.createElement("div")
const heroContent = document.createElement("h2")
const orderBtn = document.createElement("button")

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

  heroContent.appendChild(heroSubContent)
  heroContent.appendChild(orderBtn)

  heroSubContent.textContent = "Tasty and affordable!"
  heroSubContent.id = "hero-sub-content"

  orderBtn.textContent = "Order Now"
  orderBtn.id = "order-button"
}

export function loadHome() {
  setupLayout()
  setupMain()
}
