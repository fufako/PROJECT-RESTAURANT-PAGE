import fishImgImported from "./images/food1.png"
import pastaImgImported from "./images/food2.png"
import soupImgImported from "./images/food3.png"
import riceImgImported from "./images/food4.png"

content.innerHTML = ""

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
  fishImage.src = fishImgImported
  fish.textContent =
    "Nestle leeks, potato and capers around salmon fillets to make this easy traybake for two. It's great as an midweek meal, or for a more romantic occasion"
  fish.appendChild(fishImage)
  fish.appendChild(fishText)

  //Pasta Dish

  const pasta = document.createElement("div")
  const pastaImage = document.createElement("img")
  const pastaText = document.createElement("p")

  pasta.className = "dishes"
  pastaImage.src = pastaImgImported
  pasta.textContent =
    "Sit back and tuck into a big bowl of pasta alla vodka, a creamy tomato pasta with – as you can guess – vodka, which balances out the intense flavours"
  pasta.appendChild(pastaImage)
  pasta.appendChild(pastaText)

  //Soup Dish

  const soup = document.createElement("div")
  const soupImage = document.createElement("img")
  const soupText = document.createElement("p")

  soup.className = "dishes"
  soupImage.src = soupImgImported
  soup.textContent =
    "A delicious, spicy blend packed full of iron and low in fat to boot. It's ready in under half an hour, or can be made in a slow cooker"
  soup.appendChild(soupImage)
  soup.appendChild(soupText)

  //Rice Dish

  const rice = document.createElement("div")
  const riceImage = document.createElement("img")
  const riceText = document.createElement("p")

  rice.className = "dishes"
  riceImage.src = riceImgImported
  rice.textContent =
    "Encourage kids to get creative in the kitchen with our rainbow fried rice recipe – it's been designed to be easy for children to follow"
  rice.appendChild(riceImage)
  rice.appendChild(riceText)

  //Append dishes

  hero.appendChild(fish)
  hero.appendChild(pasta)
  hero.appendChild(soup)
  hero.appendChild(rice)
}

export function loadMenu() {
  setupLayout()
  setupMain()
}
