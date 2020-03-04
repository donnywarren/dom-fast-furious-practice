let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload = function (event) {

  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
      }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.

  document.getElementById("main-title").innerHTML = "Welcome to my website.";


  // Part 2
  // Select the body and change the background-color to a new color of your choice.


  document.querySelector("body").style.backgroundColor = "red";


  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.
  const parent = document.getElementById("favorite-things")
  const child = parent.lastElementChild;
  parent.removeChild(child);

  // Part 4
  // Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements

  const titles = document.querySelectorAll(".special-title");
  for (let i = 0; i < titles.length; i++) {
    titles[i].style.fontSize = "2rem";
  };

  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.

  myNodelist = document.getElementById("past-races");
  for (let j = 0; j < myNodelist.childElementCount; j++) {
    if (myNodelist.children[j].innerText === "Chicago") {
      myNodelist.children[j].remove();
    }
  }


  // Part 6
  // Let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.

  const newRace = document.createElement("li");
  const content = document.createTextNode("Seattle");
  newRace.appendChild(content);
  document.getElementById("past-races").appendChild(newRace);



  // Part 7
  // Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h1> with text, and a new <p> with some text. Make the new element consistent with the other posts. Think about what order you want to create the elements, and what order you want to append them in.

  const newElement = document.createElement("div");
  const newH1 = document.createElement("h1");
  const newP = document.createElement("p");
  newElement.classList.add("blog-post", "purple");
  newH1.innerHTML = "Don's New Post";
  newP.innerHTML = "Some kinda crazy ass story.";
  newElement.appendChild(newH1);
  newElement.appendChild(newP);
  document.querySelector(".main").appendChild(newElement);







}
