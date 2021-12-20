function result() {
  var answer = document.getElementsByClassName("container").radio.value;
  var buttonmain = document.getElementById("startmain").innerHTML;
  if (answer == "developer") {
    function developer(){
      document.getElementById("main").innerHTML.style.visibility = "hidden"
    document.getElementById("Developer").innerHTML.style.visibility = "visible"
    }
    document.getElementById("starmain").addEventListener("click", developer);
  } 
}
