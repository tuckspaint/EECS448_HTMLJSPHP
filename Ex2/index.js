function prev() {
  var slide = document.getElementById("img");
  if (slide.name == "1") {
    slide.src = "num5.png";
    slide.name = "5";
  }
  else if (slide.name == "2") {
    slide.src = "num1.jpg";
    slide.name = "1";
  }
  else if (slide.name == "3") {
    slide.src = "num2.jpg";
    slide.name = "2";
  }
  else if (slide.name == "4") {
    slide.src = "num3.jpg";
    slide.name = "3";
  }
  else if (slide.name == "5") {
    slide.src = "num4.jpg";
    slide.name = "4";
  }
}

function next() {
  var slide = document.getElementById("img");
  if (slide.name == "1") {
    slide.src = "num2.jpg";
    slide.name = "2";
  }
  else if (slide.name == "2") {
    slide.src = "num3.jpg";
    slide.name = "3";
  }
  else if (slide.name == "3") {
    slide.src = "num4.jpg";
    slide.name = "4";
  }
  else if (slide.name == "4") {
    slide.src = "num5.png";
    slide.name = "5";
  }
  else if (slide.name == "5") {
    slide.src = "num1.jpg";
    slide.name = "1";
  }
}
