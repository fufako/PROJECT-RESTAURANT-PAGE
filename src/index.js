import "./style.css"
import { loadHome } from "./loadHome"
import { loadPage } from "./loadPage"
import { loadMenu } from "./loadMenu"
import { loadContact } from "./loadContact"

loadPage()
loadHome()

const content = document.getElementById("content")

const homeBtn = document.getElementById("Home")
const menuBtn = document.getElementById("Menu")
const contactBtn = document.getElementById("Contact")
const orderBtn = document.querySelector("#order-button")

homeBtn.onclick = () => {
  content.innerHTML = ""
  loadHome()
}
;[menuBtn, orderBtn].forEach((button) => {
  button.onclick = () => {
    content.innerHTML = ""
    console.log("content should be cleared")
    loadMenu()
  }
})

contactBtn.onclick = () => {
  content.innerHTML = ""
  loadContact()
}
