function output() {
  let value1 = document.getElementById("notRead").value;
  let value2 = document.getElementById("read").value;
  let nate = `${((value1 * 100) / value2).toFixed(2)}%`;
  document.getElementById("demo").innerHTML = nate;
}
