const yourTotal = document.getElementById("yourTotal");
const total = document.getElementById("total");
const result = document.getElementById("result");

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  if (yourTotal.value === "" && total.value === "") {
    result.value = "الرجاء التأكد من الارقام المدخلة";
    setTimeout(() => {
      result.value = "";
      result.style.color = "#fff";
    }, 1000);
    result.style.color = "red";
  } else if (yourTotal.value === "") {
    yourTotal.value = (result.value * total.value) / 100;
    result.style.color = "#fff";
  } else {
    result.value = `${((yourTotal.value * 100) / total.value).toFixed(2)}%`;
    result.style.color = "#fff";
  }
});
