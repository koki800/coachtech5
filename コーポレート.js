const target = document.getElementsByTagName("input");
target[1].addEventListener("mouseover", setTimeout(() => {
  const content = target[1].textContent;

  if (content == null) {
    document.getElementsById("tooltip").style.display = "block"
  };
},1000));
target[2].addEventListener("mouseover", setTimeout(() => {
  const content = target[2].textContent

  if (content = null) {
    document.getElementsById("tooltip").style.display = "block"
  }else if(content.includes("＠") == false){
    document.getElementsById("tooltip2").style.display = "block";

    const span = document.getElementsById("tooltip2_text").firstChild;
    const span.textContent = content;
  }
},1000))
target[1, 2].addEventListener("mouseleave", () => {
  document.getElementsByClassName("tooltip").style.display = "none";
});