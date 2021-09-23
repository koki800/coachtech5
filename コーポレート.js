const target = document.getElementsByTagName("input");

//ツールチップ出現

for (num = 1; num < 3; num++){
  const func = (e) => {
  const content = target[num].textContent;

  if (content.length == 0) {
    document.getElementById("tooltip").style.display = "block";
    document.getElementById("tooltip").style.top = e.pageY + "px";
    document.getElementById("tooltip").style.left = e.pageX + "px";
  };
};
const setFunc = (e) => {
  setTimeout(func, 300,e)
};
target[num].addEventListener("mouseover",setFunc);
}


// ツールチップが消える

const func2 = () => {
  document.getElementById("tooltip").style.display = "none";
};
const setFunc2 = () => {
  setTimeout(func2, 300)
};
target[1, 2].addEventListener("mouseleave",setFunc2);