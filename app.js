// prompt name
let hello = prompt("What's your name?:");
function isim() {
  document.getElementById("myName").innerHTML = hello;
  return;
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

//click me
document.querySelector(".clicker").addEventListener("click", clickk);
let val = document.querySelector(".clicker");

function clickk(e) {
  val.style.background = "black";
}

//create element metode
let photo = document.createElement("img");
photo.src = "https://source.unsplash.com/random";
photo.classList.add("myPhoto");
document.querySelector(".clicker").appendChild(photo);
