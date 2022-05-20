// Make a div
const div = document.createElement("div");
// add a class of wrapper to it
div.classList.add("wrapper");
// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = /* html */ `
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
`;

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
div.innerHTML = ul;

// create an image
const img = document.createElement("img");
// set the source to an image
img.src = "https://source.unsplash.com/random/500";
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add("cute");
// add an alt of Cute Puppy
img.alt = "Cute";
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = /* html */ `
    <div>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </div>
`;

const ulElement = div.querySelector("ul");

// put this div before the unordered list from above

ulElement.insertAdjacentHTML("beforebegin", myHTML);

// add a class to the second paragraph called warning
const myDiv = div.firstElementChild;

myDiv.lastElementChild.classList.add("warning");
// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  const html = /* html */ `
  
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog Years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
    <button class="delete">&times Delete</button>
        </div>
    `;

  return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement("div");
cards.classList.add("cards");

// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard("pungki", 7, 200);

cardsHTML += generatePlayerCard("umbra", 10, 100);
cardsHTML += generatePlayerCard("kikit", 10, 100);
cardsHTML += generatePlayerCard("arlo", 10, 100);

// append those cards to the div
cards.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement("beforebegin", cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll(".delete");
// make out delete function
function handleDelete(e) {
  const cardButtonClicked = e.currentTarget;
  //   cardButtonClicked.parentElement.remove();
  cardButtonClicked.closest(".playerCard").remove();
}
// loop over them and attach a listener
buttons.forEach((button) => {
  button.addEventListener("click", handleDelete);
});
