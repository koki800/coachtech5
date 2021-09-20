const target = document.getElementsByTagName("input");

const func = () => {
  const content = target[1].textContent;

  if (content == null) {
    document.getElementsById("tooltip").style.display = "block"
  };
};
target[1].addEventListener("mouseover", setTimeout(func(), 1000));

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
target[2].addEventListener("mouseover", setTimeout(func1(), 1000));

const func2 = () => {
  document.getElementsByClassName("tooltip").style.display = "none";
};
target[1, 2].addEventListener("mouseleave", setTimeout(func2(),1000));