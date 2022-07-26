// prompt name
let hello = prompt("What's your name?:");
function isim() {
  document.getElementById("myName").innerHTML = hello;
}
isim();

/// writing date
let dateToday = new Date().toLocaleString();
function dateAndTime() {
  document.getElementById("date").innerHTML = dateToday;
}

setInterval(dateAndTime, 1000);

// button click and picture

function picture() {
  document.querySelector(".randomImg").src =
    "https://source.unsplash.com/random";
  document.querySelector(".randomWord").textContent = "Good Day";
}

// experience que
let exp = parseInt(prompt("How many years are you software development", 5));
console.log(exp);
function deney() {
  if (exp > 5) {
    //create element metode
    let photo = document.createElement("img");
    photo.src = "https://source.unsplash.com/random";
    photo.classList.add("myPhoto");
    document.querySelector(".clicker").appendChild(photo);
  } else if (exp < 5) {
    //click me
    document.querySelector(".clicker").addEventListener("click", clickk);
    let val = document.querySelector(".clicker");

    function clickk(e) {
      val.style.background = "black";
    }
  }
}
deney();
console.log(deney.toString);
