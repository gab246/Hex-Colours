function changeColour(){
  let hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

  let hexCode = ""

  for(let i = 0; i <= 5; i++){
    let randomHex = Math.floor(Math.random() * hexNumbers.length);
    hexCode += hexNumbers[randomHex];
  }
  document.getElementById("hex-code").innerHTML = hexCode;
  document.getElementsByTagName("body")[0].style.background = "#" + hexCode;

}