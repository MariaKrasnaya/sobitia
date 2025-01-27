document.addEventListener("DOMContentLoaded", function() {

// чтобы при нажатии на кнопку выводилась плашка уведомление
let but = document.querySelector ("button");

but.addEventListener("click", function(){
  alert("Wow it is work")
});



let box = document.querySelectorAll(".box");

box.forEach(function(clickbox){
clickbox.addEventListener("click", function (){
if (clickbox.style.background === "lightblue") {
clickbox.style.background = "pink";
clickbox.style.marginLeft = "2vw";
console.log("pink")
}
else {
clickbox.style.background = "lightblue"
clickbox.style.marginLeft = "0vw"
console.log("pink")        
}
  
});
});



// переменные для кнопочек
let b1 = document.querySelector(".but1");
let b2 = document.querySelector(".but2");
let b3 = document.querySelector(".but3");

let sections = document.querySelectorAll(".section1, .section2, .section3");

function ShowSection(ourClass){
  sections.forEach(function(section){
    // условие дальше
    if(section.classList.contains(ourClass)){
      section.classList.add("block");
      section.classList.remove("none");
    }
    else{
      section.classList.add("none");
      section.classList.remove("block");
    }
  });
};

// чтобы активировать функцию ShowSection
b1.addEventListener("click", function(){
  ShowSection("section2")
});

b2.addEventListener("click", function(){
  ShowSection("section3")
});

b3.addEventListener("click", function(){
  ShowSection("section1")
});

});