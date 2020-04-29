// name in the shares page:
var parameters = location.search.substring(1);
var temp = parameters.split("=");
var l = unescape(temp[1]);

if(l.toString()=="undefined"){
  l='Generic shares page'};
  document.getElementById("log").innerHTML = l;  
  document.getElementById("cierraModal").innerHTML = '&times; Enter an Order for: '+ l;  

const colourBtn1=document.getElementById('colourBtn1')
const colourBtn2=document.getElementById('colourBtn2')
const colourBtn3=document.getElementById('colourBtn3')



const submitHandlerChangeColour = function(event){
     // prevents form from reloading
     event.preventDefault()
     var str=""+window.location.href;
     if (str.includes("index"))
     window.location.href="./index.html";
     if (str.includes("shares"))
     window.location.href="./shares.html";
 
     console.log(str);

  }

  const submitHandlerChangeColour2 = function(event){
    // prevents form from reloading
    event.preventDefault()
    var str=""+window.location.href;
    if (str.includes("index"))
    window.location.href="./indexGreen.html";
    if (str.includes("shares"))
    window.location.href="./sharesGreen.html";

    console.log(str);

    }

    const submitHandlerChangeColour3 = function(event){
      // prevents form from reloading
      event.preventDefault()
      var str=""+window.location.href;
      if (str.includes("index"))
      window.location.href="./indexOrange.html";
      if (str.includes("shares"))
      window.location.href="./sharesOrange.html";
  
      console.log(str);
  
      }

  colourBtn1.onclick = submitHandlerChangeColour 
  colourBtn2.onclick = submitHandlerChangeColour2
  colourBtn3.onclick = submitHandlerChangeColour3



  // Get the Invest modal
var modal = document.getElementById("myModal");
// Get the button that opens the Invest modal
var btn = document.getElementById("investbutton");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the Invest modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the Invest modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the Invest modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}