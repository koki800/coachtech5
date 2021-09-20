const target = document.getElementsByTagName("input")
target.addEventListener("mouseover", () => {
 document.getElementsByClassName("tooltip").style.display="block"
})
target.addEventListener("mouseleave", () => {
  document.getElementsByClassName("tooltip").style.display="none"
})