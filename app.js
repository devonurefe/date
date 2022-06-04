// prompt name
let hello = prompt("Adinizi girin:");
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
let element = document.getElementById("btn");
element.addEventListener("click", picture);
function picture() {
  for (let i = 0; i < 5; i++) {
    document.querySelector(".randomImg").src =
      "https://source.unsplash.com/random";
    console.log(element);
  }

  //create element metode
  // let photo = document.createElement("img");
  // photo.src = "https://source.unsplash.com/random";
  // document.querySelector(".randomImg").appendChild(photo);
  //console.log(photo);
}
