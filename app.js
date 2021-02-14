// movement animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker-image");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// moving animation event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 30; // pageX pageY gives x & y position of the cursor on the card
  let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// reset card when cursor leaves container
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //pop in
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});

// revert animation transition to none when mouse enters container
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  // pop out
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(150px) rotateZ(10deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
