const colourBtn1=document.getElementById('colourBtn1')
const colourBtn2=document.getElementById('colourBtn2')



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

  colourBtn1.onclick = submitHandlerChangeColour 
  colourBtn2.onclick = submitHandlerChangeColour2