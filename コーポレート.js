// ハンバーガーメニュー
// ドロワーメニュー

const target0 = document.getElementById("menu");
target0.addEventListener('click', () => {
  target0.classList.toggle('open');
  const drawer = document.getElementById("header_menu");
  drawer.classList.toggle('in');
});

// ツールチップ（お問い合わせページ）

const target = document.getElementsByTagName("input");

//ツールチップ出現

const func = (e) => {

    const content = e.target.value;

    if (content.length == 0) {
      document.getElementById("tooltip").style.display = "block";
      document.getElementById("tooltip").style.top = e.pageY + "px";
      document.getElementById("tooltip").style.left = e.pageX + "px";
    };
}
const setFunc = (e) => {
  setTimeout(func, 300,e)
};

for (num = 1; num < 3; num++) {
  target[num].addEventListener("mouseover", setFunc);
}


// ツールチップが消える

const func2 = () => {
  document.getElementById("tooltip").style.display = "none";
};
const setFunc2 = () => {
  setTimeout(func2, 300)
};
for (num = 1; num < 3; num++){
  target[num].addEventListener("mouseleave",setFunc2);
}
