const demoBox = document.getElementById("demoBox");

const marginSlider = document.getElementById("marginSlider");
const borderSlider = document.getElementById("borderSlider");
const paddingSlider = document.getElementById("paddingSlider");

const marginValue = document.getElementById("marginValue");
const borderValue = document.getElementById("borderValue");
const paddingValue = document.getElementById("paddingValue");


function updateBox() {
  demoBox.style.margin = marginSlider.value + "px";
  demoBox.style.border = borderSlider.value + "px solid orange";
  demoBox.style.padding = paddingSlider.value + "px";

  marginValue.textContent = marginSlider.value + "px";
  borderValue.textContent = borderSlider.value + "px";
  paddingValue.textContent = paddingSlider.value + "px";
}


marginSlider.addEventListener("input", updateBox);
borderSlider.addEventListener("input", updateBox);
paddingSlider.addEventListener("input", updateBox);