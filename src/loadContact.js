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

  heroContent.textContent = "Contact"
  heroContent.id = "hero-content"
}

export function loadContact() {
  setupLayout()
  setupMain()
}
