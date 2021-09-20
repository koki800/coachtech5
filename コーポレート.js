const target = document.getElementsByTagName("input")
target[1].addEventListener("mouseover", () => {
  const content = target[1].textContent

  if (content = null) {
    document.getElementsByClassName("tooltip").style.display = "block"
  }
})
target[2].addEventListener("mouseover", () => {
  const content = target[2].textContent

  if (content = null) {
    document.getElementsByClassName("tooltip").style.display = "block"
  }else if(content.includes("＠") === false){
    document.getElementsByClassName("tooltip2").style.display = "block"
  }
})
target[1,2].addEventListener("mouseleave", () => {
  document.getElementsByClassName("tooltip").style.display="none"
})