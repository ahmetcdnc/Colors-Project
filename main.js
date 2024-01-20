var index = 0;

function changeColors() {
  var colors = ["red", "blue", "orange", "yellow", "green", "purple"];

  //body'ye ulaştık. Colors içinde indexi 1 arttırarak dolaş ve rengi değiştir.
  document.getElementsByTagName("body")[0].style.backgroundColor =
    colors[index++];

  //Son elemana geldiğimizde indexi tekrar 0 ayarlayalım ki, index tekrar artabilsin ve renk değişmeye devam etsin.
  if (index > colors.length - 1) {
    index = 0;
  }
}

