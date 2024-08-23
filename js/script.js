let closeButton=document.querySelector(".close-button")
let openButton=document.querySelector(".open-button")
let smNav=document.querySelector(".sm-nav")
openButton.addEventListener("click",() => {
  smNav.style.display="flex"
  closeButton.style.display="flex"
  openButton.style.display="none"
})
closeButton.addEventListener("click",() => {
  smNav.style.display="none"
  closeButton.style.display="none"
  openButton.style.display="flex"
})
document.addEventListener("scroll",() => {
  smNav.style.display="none"
  closeButton.style.display="none"
  openButton.style.display="flex"
})
