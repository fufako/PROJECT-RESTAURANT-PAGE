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

homeBtn.onclick = () => {
  content.innerHTML = ""
  loadHome()
}
menuBtn.onclick = () => {
  content.innerHTML = ""
  console.log("content should be cleared")
  loadMenu()
}
contactBtn.onclick = () => {
  content.innerHTML = ""
  loadContact()
}
