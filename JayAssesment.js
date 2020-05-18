var slideIndex = [1,1];  
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cart");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
} 

var ip1 = {name:"Iphone 6", brand:"Apple", description:"Phone",price:"$"+399};
var ip2 = {name:"Iphone 7", brand:"Apple", description:"Phone",price:"$"+549};
var ip3 = {name:"Iphone 8", brand:"Apple", description:"Phone",price:"$"+759};
var ip4 = {name:"Iphone 10", brand:"Apple", description:"Phone",price:"$"+999};
var ip5 = {name:"Iphone 11", brand:"Apple", description:"Phone",price:"$"+1099};

document.getElementById("ip1").innerHTML = ip1.name + "<br/>" + ip1.brand + "<br/>" + ip1.description + "<br/>" + ip1.price;
document.getElementById("ip2").innerHTML = ip2.name + "<br/>" + ip2.brand + "<br/>" + ip2.description + "<br/>" + ip2.price;
document.getElementById("ip3").innerHTML = ip3.name + "<br/>" + ip3.brand + "<br/>" + ip3.description + "<br/>" + ip3.price;
document.getElementById("ip4").innerHTML = ip4.name + "<br/>" + ip4.brand + "<br/>" + ip4.description + "<br/>" + ip4.price;
document.getElementById("ip5").innerHTML = ip5.name + "<br/>" + ip5.brand + "<br/>" + ip5.description + "<br/>" + ip5.price;

buy1 =document.getElementById("buy1") 
buy1.addEventListener("click", function(){
      var node = document.createElement("LI");
    var textnode = document.createTextNode("Brand:"+ip1.name+","+"Price:"+ip1.price);
 node.appendChild(textnode);
  document.getElementById("myUL").appendChild(node);
   alert("Your Order was Add to the Cart");
});
buy2 =document.getElementById("buy2") 
buy2.addEventListener("click", function(){
   var node = document.createElement("LI");
   var textnode = document.createTextNode("Brand:"+ip2.name+","+"Price:"+ip2.price);
   node.appendChild(textnode);
   document.getElementById("myUL").appendChild(node);
   alert("Your Order was Add to the Cart");
});
buy3 =document.getElementById("buy3") 
buy3.addEventListener("click", function(){
   var node = document.createElement("LI");
   var textnode = document.createTextNode("Brand:"+ip3.name+","+"Price:"+ip3.price);
   node.appendChild(textnode);
   document.getElementById("myUL").appendChild(node);
   alert("Your Order was Add to the Cart");s
});
buy4 =document.getElementById("buy4") 
buy4.addEventListener("click", function(){
   var node = document.createElement("LI");
   var textnode = document.createTextNode("Brand:"+ip4.name+","+"Price:"+ip4.price);
   node.appendChild(textnode);
   document.getElementById("myUL").appendChild(node);
   alert("Your Order was Add to the Cart");
});
buy5 =document.getElementById("buy5") 
buy5.addEventListener("click", function(){
   var node = document.createElement("LI");
   var textnode = document.createTextNode("Brand:"+ip5.name+","+"Price:"+ip5.price);
   node.appendChild(textnode);
   document.getElementById("myUL").appendChild(node);
   alert("Your Order was Add to the Cart");
});
