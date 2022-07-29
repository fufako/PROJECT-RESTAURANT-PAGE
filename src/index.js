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

const headTitle = document.querySelector("#header-title")

headTitle.onclick = () => {
  content.innerHTML = ""
  loadHome()
}
homeBtn.onclick = () => {
  content.innerHTML = ""
  loadHome()
}
;[menuBtn, orderBtn].forEach((button) => {
  button.onclick = () => {
    content.innerHTML = ""
    loadMenu()
  }
})

contactBtn.onclick = () => {
  content.innerHTML = ""
  loadContact()
}
