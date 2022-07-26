import addressImgImported from "./images/address.png"
import phoneImgImported from "./images/phone-call.png"
import openImgImported from "./images/open.png"
const main = document.createElement("div")
const hero = document.createElement("div")
const heroTitle = document.createElement("h2")

function setupLayout() {
  content.appendChild(main)
}
function setupMain() {
  main.appendChild(heroTitle)

  main.id = "main-menu"
  main.appendChild(hero)

  hero.id = "hero-contact"

  heroTitle.textContent = "Contact"
  heroTitle.id = "hero-title-menu"

  //Info divs

  const contactInfo = document.createElement("div")
  contactInfo.id = "contact-info"
  hero.appendChild(contactInfo)

  //Contact infos

  const address = document.createElement("p")
  const addressImg = document.createElement("img")
  addressImg.src = addressImgImported

  const openHours = document.createElement("p")
  const openImg = document.createElement("img")
  openImg.src = openImgImported

  const phone = document.createElement("p")
  const phoneImg = document.createElement("img")
  phoneImg.src = phoneImgImported

  //Fill contact infos

  address.textContent =
    "Cnr Hanlan St & The, Esplanade, Surfers Paradise QLD 4217, Australia"
  openHours.textContent = "Mon - Sun:  7:00 am - 11:00 pm"
  phone.textContent = "(111) - 228 4444"

  //Append contact infos
  contactInfo.appendChild(addressImg)
  contactInfo.appendChild(address)
  contactInfo.appendChild(openImg)
  contactInfo.appendChild(openHours)
  contactInfo.appendChild(phoneImg)
  contactInfo.appendChild(phone)
}

export function loadContact() {
  setupLayout()
  setupMain()
}
