const submitBtn1=document.getElementById('submitBtn1')
const submitBtn2=document.getElementById('submitBtn2')
const resultsTable = document.getElementById('resultsTable')



const mult = function(a, b){
return ('£'+(Number(a)*Number(b)).toFixed(2));
}

const sum = function(a, b){
return ('£'+(Number(a)+Number(b)).toFixed(2));
}
const sum2 = function(a, b){
return (Number(a)+Number(b));
}

const rest2 = function(a, b){
return (Number(a)-Number(b));
}

const calculateTotal = function(){
const resultsTotal = document.getElementById('resultsTotal')
resultsTotal.innerHTML =""
if (resultsTable.rows["raf"]){
  resultsTotal.innerHTML =""
  const input1=document.getElementById('test1')
  const newLiTotal = document.createElement("p")
    newLiTotal.innerText = sum(input1.value*6.99,0);
    resultsTotal.append(newLiTotal)
}
if (resultsTable.rows["heirloom"]){
  resultsTotal.innerHTML =""
  const input2=document.getElementById('test2')
  const newLiTotal = document.createElement("p")
    newLiTotal.innerText = sum(0,input2.value*5.49 );
    resultsTotal.append(newLiTotal)
  }
  if (resultsTable.rows["raf"]&&resultsTable.rows["heirloom"]){
    resultsTotal.innerHTML =""
    const input1=document.getElementById('test1')
    const input2=document.getElementById('test2')
    const newLiTotal = document.createElement("p")
    newLiTotal.innerText = sum(input1.value*6.99,input2.value*5.49 );
    resultsTotal.append(newLiTotal)

  }
}


const submitHandler = function(event){
  // prevents form from reloading
  event.preventDefault()
  //clean ups results
  if (resultsTable.rows["raf"]){
  results1.innerHTML =""
  resultsTotal.innerHTML =""
  const input1=document.getElementById('test1')
  const newLi1 = document.createElement("p")
  newLi1.innerText = mult(input1.value,6.99 );
  results1.append(newLi1)
  const newLiTotal = document.createElement("p")
    newLiTotal.innerText = sum(input1.value*6.99,0);
    //submitBtn.append(newLi)
    resultsTotal.append(newLiTotal)

  }
  if (resultsTable.rows["heirloom"]){
  results2.innerHTML =""
  resultsTotal.innerHTML =""
  const input2=document.getElementById('test2')
  const newLi2 = document.createElement("p")
  newLi2.innerText = mult(input2.value,5.49 );
  results2.append(newLi2)
  const newLiTotal = document.createElement("p")
    newLiTotal.innerText = sum(0,input2.value*5.49 );
    //submitBtn.append(newLi)
    resultsTotal.append(newLiTotal)

  }
  if (resultsTable.rows["raf"]&&resultsTable.rows["heirloom"]){
    const input1=document.getElementById('test1')
  const input2=document.getElementById('test2')
    resultsTotal.innerHTML =""
    const newLiTotal = document.createElement("p")
    newLiTotal.innerText = sum(input1.value*6.99,input2.value*5.49 );
    resultsTotal.append(newLiTotal)

  }

  //console.log(event, event.target)
 //console.log(input.value)

//populates results again


}

const submitHandlerRaf = function(event){
  // prevents form from reloading
  event.preventDefault()
  //clean ups results
  //resultsTable.innerHTML =""
 
  //console.log(event, event.target)
 //console.log(input.value)

//populates results again


    if (!resultsTable.rows["raf"]){
      if (resultsTable.rows["resultsTotalRow"]){
      document.getElementById("resultsTable").removeChild(document.getElementById("resultsTotalRow"));  
      }
    const newCo1 = document.createElement("tr")
    newCo1.setAttribute("id", "raf");
    newCo1.innerHTML = "<td class=\"tdchart\"><img src=\"https://www.comenaranjas.com/images/stories/virtuemart/product/tomate-raf.jpg\" class=\"responsive_image_result\"></td><td class=\"inputpeqtd\">   <input id=\"menos1\" class=\"inputpeq\" type=\"submit\" value=\"-\" /> <form id=\"raf\">      <input type=\"number\" name=\"quantity\" min=\"1\" id=\"test1\"> </form>  <input id=\"mas1\"  class=\"inputpeq\" type=\"submit\" value=\"+\" /></td><td><div id=\"results1\">£6.99</div></td><td class=\"tdsecondbis\"><input id=\"deleteBtn1\" type=\"submit\" value=\"remove item\" /></td>"
    resultsTable.append(newCo1)
    const ColResult = document.createElement("tr")
    ColResult.setAttribute("id", "resultsTotalRow");
    ColResult.innerHTML = "<td class=\"tdTotal\" colspan=\"2\">TOTAL:</td><td class=\"tdTotal\"><div id=\"resultsTotal\"></div></td>"
    resultsTable.append(ColResult)
    const input1=document.getElementById('test1')
    input1.setAttribute("value", 1)
    input1.onclick = submitHandler 
    input1.onchange = submitHandler 
    const inputmas=document.getElementById('mas1')
    inputmas.onclick = submitHandlerSumaRaf 
    const inputmenos=document.getElementById('menos1')
    inputmenos.onclick = submitHandlerRestaRaf 
    const results1 = document.getElementById('results1')
    const deleteBtn1=document.getElementById('deleteBtn1')
    deleteBtn1.onclick = deleteHandler1

    const newLi1 = document.createElement("p")
    newLi1.innerText = mult(input1.value,6.99 )
    results1.innerHTML =""
    results1.append(newLi1)
    calculateTotal()
    }
    else{
      const input1=document.getElementById('test1')
      input1.setAttribute("value", sum2(input1.value,1))
      results1.innerHTML =""
      const newLi1 = document.createElement("p")
  newLi1.innerText = mult(input1.value,6.99 );
  results1.append(newLi1)
      calculateTotal()
      console.log("aqui")
    }
    console.log(resultsTable)
    

  }

  const submitHandlerHeirloom = function(event){
  // prevents form from reloading
  event.preventDefault()

//populates results again


    if (!resultsTable.rows["heirloom"]){
      if (resultsTable.rows["resultsTotalRow"]){
      document.getElementById("resultsTable").removeChild(document.getElementById("resultsTotalRow"));  
      }
    const newCo1 = document.createElement("tr")
    newCo1.setAttribute("id", "heirloom");
    newCo1.innerHTML = "<td class=\"tdchart\"><img src=\"https://foodandstyle.com/wp-content/uploads/2009/07/IMG_9851-Hierloom-tomato-750.jpg\" class=\"responsive_image_result\"></td><td class=\"inputpeqtd\"> <input id=\"menos2\"  class=\"inputpeq\" type=\"submit\" value=\"-\" /> <form id=\"heirloom\">      <input type=\"number\" name=\"quantity\" min=\"1\" id=\"test2\"></form><input id=\"mas2\" type=\"submit\"  class=\"inputpeq\" value=\"+\" /></td><td><div id=\"results2\">£5.49</div></td><td class=\"tdsecondbis\"><input id=\"deleteBtn2\" type=\"submit\" value=\"remove item\" /></td>"
    resultsTable.append(newCo1)
    const ColResult = document.createElement("tr")
    ColResult.setAttribute("id", "resultsTotalRow");
    ColResult.innerHTML = "<td class=\"tdTotal\" colspan=\"2\">TOTAL:</td><td class=\"tdTotal\"><div id=\"resultsTotal\"></div></td>"
    resultsTable.append(ColResult)

    const input2=document.getElementById('test2')
    input2.setAttribute("value", 1)
    input2.onclick = submitHandler 
    input2.onchange = submitHandler 
    const inputmas=document.getElementById('mas2')
    inputmas.onclick = submitHandlerSumaHeirloom 
    const inputmenos=document.getElementById('menos2')
    inputmenos.onclick = submitHandlerRestaHeirloom 
    const results2 = document.getElementById('results2')
    const deleteBtn2=document.getElementById('deleteBtn2')
    deleteBtn2.onclick = deleteHandler2 

    const newLi1 = document.createElement("p")
    newLi1.innerText = mult(input2.value,5.49 )
    results2.innerHTML =""
    results2.append(newLi1)
    
    calculateTotal()
    }
    else{
      const input2=document.getElementById('test2')
      input2.setAttribute("value", sum2(input2.value,1))
      results2.innerHTML =""
      const newLi1 = document.createElement("p")
  newLi1.innerText = mult(input2.value,5.49 );
  results2.append(newLi1)
      calculateTotal()
      console.log("aqui")
    }
    console.log(resultsTable)
    

  }

  const submitHandlerSumaRaf = function(event){
  // prevents form from reloading
  event.preventDefault()
  const input1=document.getElementById('test1')
      input1.setAttribute("value", sum2(input1.value,1))
      results1.innerHTML =""
      const newLi1 = document.createElement("p")
  newLi1.innerText = mult(input1.value,6.99 );
  results1.append(newLi1)

      calculateTotal()
 
    console.log(resultsTable)    

  }

  const submitHandlerRestaRaf = function(event){
  // prevents form from reloading
  event.preventDefault()
  const input1=document.getElementById('test1')
  if(input1.value>0){
      input1.setAttribute("value", rest2(input1.value,1))
      results1.innerHTML =""
      const newLi1 = document.createElement("p")
  newLi1.innerText = mult(input1.value,6.99 );
  results1.append(newLi1)
      calculateTotal()
  }
    console.log(resultsTable)    

  }
  

  const submitHandlerSumaHeirloom = function(event){
  // prevents form from reloading
  event.preventDefault()
  const input2=document.getElementById('test2')
      input2.setAttribute("value", sum2(input2.value,1))
      results2.innerHTML =""
      const newLi1 = document.createElement("p")
  newLi1.innerText = mult(input2.value,5.49 );
  results2.append(newLi1)
      calculateTotal()
 
    console.log(resultsTable)    

  }

  const submitHandlerRestaHeirloom = function(event){
  // prevents form from reloading
  event.preventDefault()
  const input2=document.getElementById('test2')
  if(input2.value>0){
      input2.setAttribute("value", rest2(input2.value,1))
      results2.innerHTML =""
      const newLi1 = document.createElement("p")
  newLi1.innerText = mult(input2.value,5.49 );
  results2.append(newLi1)
      calculateTotal()
  }
    console.log(resultsTable)    

  }

  const deleteHandler2 = function(event){
  // prevents form from reloading
  event.preventDefault()
    if (resultsTable.rows["heirloom"]){
      document.getElementById("resultsTable").removeChild(document.getElementById("heirloom"));  
    calculateTotal()
    }
    console.log(resultsTable)    

  }
  const deleteHandler1 = function(event){
  // prevents form from reloading
  event.preventDefault()
    if (resultsTable.rows["raf"]){
      document.getElementById("resultsTable").removeChild(document.getElementById("raf"));  
    calculateTotal()
    }
    console.log(resultsTable)    

  }



submitBtn1.onclick = submitHandlerRaf 
submitBtn2.onclick = submitHandlerHeirloom



//equivalent to
//submit.addEventListener("onclick", submitHandler)
