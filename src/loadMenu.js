import fishImgImported from "./images/food1.png"
import pastaImgImported from "./images/food2.png"
import soupImgImported from "./images/food3.png"
import riceImgImported from "./images/food4.png"

function setupLayout(elem) {
  content.appendChild(elem)
}

function setupMain() {
  const main = document.createElement("div")
  const hero = document.createElement("div")
  const heroTitle = document.createElement("h2")
  main.id = "main-menu"
  main.appendChild(heroTitle)
  main.appendChild(hero)

  heroTitle.textContent = "Menu"
  heroTitle.id = "hero-title-menu"
  hero.id = "hero-menu"

  // Fish dish

  const fish = document.createElement("div")
  const fishTitle = document.createElement("h2")
  const fishImage = document.createElement("img")
  const fishText = document.createElement("p")

  fish.className = "dishes"
  fishImage.src = fishImgImported
  fishText.textContent =
    "Nestle leeks, potato and capers around salmon fillets to make this easy traybake for two. It's great as an midweek meal, or for a more romantic occasion"
  fishTitle.textContent = "Fish and chips"
  fish.appendChild(fishTitle)
  fish.appendChild(fishImage)
  fish.appendChild(fishText)

  //Pasta Dish

  const pasta = document.createElement("div")
  const pastaTitle = document.createElement("h2")
  const pastaImage = document.createElement("img")
  const pastaText = document.createElement("p")

  pasta.className = "dishes"
  pastaImage.src = pastaImgImported
  pastaText.textContent =
    "Sit back and tuck into a big bowl of pasta alla vodka, a creamy tomato pasta with – as you can guess – vodka, which balances out the intense flavours"
  pastaTitle.textContent = "Italian Pasta"
  pasta.appendChild(pastaTitle)
  pasta.appendChild(pastaImage)
  pasta.appendChild(pastaText)

  //Soup Dish

  const soup = document.createElement("div")
  const soupTitle = document.createElement("h2")
  const soupImage = document.createElement("img")
  const soupText = document.createElement("p")

  soup.className = "dishes"
  soupImage.src = soupImgImported
  soupText.textContent =
    "A delicious, spicy blend packed full of iron and low in fat to boot. It's ready in under half an hour, or can be made in a slow cooker"
  soupTitle.textContent = "German potato soup"
  soup.appendChild(soupTitle)
  soup.appendChild(soupImage)
  soup.appendChild(soupText)

  //Rice Dish

  const rice = document.createElement("div")
  const riceTitle = document.createElement("h2")
  const riceImage = document.createElement("img")
  const riceText = document.createElement("p")

  rice.className = "dishes"
  riceImage.src = riceImgImported
  riceText.textContent =
    "Encourage kids to get creative in the kitchen with our rainbow fried rice recipe – it's been designed to be easy for children to follow"
  riceTitle.textContent = "Rice with salmon"
  rice.appendChild(riceTitle)
  rice.appendChild(riceImage)
  rice.appendChild(riceText)

  //Append dishes

  hero.appendChild(fish)
  hero.appendChild(pasta)
  hero.appendChild(soup)
  hero.appendChild(rice)

  return main
}

export function loadMenu() {
  const main = setupMain()
  setupLayout(main)
}
