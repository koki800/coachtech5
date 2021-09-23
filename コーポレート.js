const target = document.getElementsByTagName("input");

// 名前のツールチップ

const func = () => {
  const content = target[1].textContent;

  if (content.length == 0) {
    document.getElementById("tooltip").style.display = "block";
    document.getElementById("tooltip").style.top = e.clientY;
    document.getElementById("tooltip").style.left = e.clientX;
  };
};
const setFunc = (e) => {
  setTimeout(func, 1000)
};
target[1].addEventListener("mouseover",setFunc );

// メールアドレスのツールチップ

const func1 = () => {
  const content = target[2].textContent;

  if (content.length == 0) {
    document.getElementById("tooltip").style.display = "block";
    document.getElementById("tooltip").style.top = e.clientY;
    document.getElementById("tooltip").style.left = e.clientX;
  } else if (content.includes("@") == false) {
    document.getElementById("tooltip2").style.display = "block";
    document.getElementById("tooltip2").style.top = e.clientY;
    document.getElementById("tooltip2").style.left = e.clientX;
    const span = document.getElementById("tooltip2_text").firstChild;
    span.textContent = content;
  };
};
const setFunc1 = (e) => {
  setTimeout(func1, 1000)
}
target[2].addEventListener("mouseover", setFunc1);

// ツールチップが消える

const func2 = () => {
  document.getElementsByClassName("tooltip").style.display = "none";
};
const setFunc2 = () => {
  setTimeout(func2, 1000)
};
target[1, 2].addEventListener("mouseleave",setFunc2);