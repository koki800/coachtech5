const target = document.getElementsByTagName("input");

const func = () => {
  const content = target[1].textContent;

  if (content == null) {
    document.getElementsById("tooltip").style.display = "block"
  };
};
const setFunc = setTimeout(func, 1000);
target[1].addEventListener("mouseover",setFunc );

const func1 = () => {
  const content = target[2].textContent;

  if (content == null) {
    document.getElementsById("tooltip").style.display = "block"
  } else if (content.includes("@") == false) {
    document.getElementsById("tooltip2").style.display = "block";

    const span = document.getElementsById("tooltip2_text").firstChild;
    span.textContent = content;
  };
};
const setFunc1 = setTimeout(func1, 1000)
target[2].addEventListener("mouseover", setFunc1);

const func2 = () => {
  document.getElementsByClassName("tooltip").style.display = "none";
};
const setFunc2 = setTimeout(func2, 1000);
target[1, 2].addEventListener("mouseleave",setFunc2);