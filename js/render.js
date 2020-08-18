import { tvShows, tvShowsNow, tvShowsFuture } from "./imports/shows.js";

// const grid = document.querySelector("#grid");

// When DOM loads, render the first 20 posts.

window.addEventListener("DOMContentLoaded", appendCards);


var grid = document.querySelector(".grid");
var msnry;

imagesLoaded(grid, () => {
  msnry = new Masonry(grid, {
    columnWidth: 300,
    itemSelector: ".card",
    fitWidth: true,
    horizontalOrder: true,
    gutter: 16,
  });
});

let c = 0;
const quantity = 14;

// checking which subpage
if (grid.classList.contains("finished")) {
  var thumbs = "finished";
  var s = tvShows;
} else if (grid.classList.contains("now")) {
  var thumbs = "now";
  var s = tvShowsNow;
} else if (grid.classList.contains("future")) {
  var thumbs = "future";
  var s = tvShowsFuture;
}

var appendButton = document.querySelector(".append-button");
function appendCards() {
  // create new item elements
  var elems = [];
  var fragment = document.createDocumentFragment();

  let i = 0;

  while (i < quantity && c < s.length) {
    let elem = getItemElement();
    fragment.appendChild(elem);
    elems.push(elem);
    i++;
    c++;
  }

  // append elements to container
  grid.appendChild(fragment);
  // add and lay out newly appended elements
  msnry.appended(elems);
}

// If scrolled to bottom, load the next 20 posts.
window.onscroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    appendCards();
  }
};

// create <div class="card"></div>
function getItemElement() {
  let elem = document.createElement("div");

  elem.innerHTML = `
      <img src="./thumbs/${thumbs}/id${s[c].id}.jpg" alt="${s[c].title}" />
            <div class="c-content">
              <div class="c-top">
                <div class="c-title">${s[c].title}</div>
                <div class="c-year">${s[c].year}</div>
                <div class="c-par">
                    <div class="c-tagline">Summary</div>
                    <div class="c-desc">${s[c].desc}</div>
                </div>
            </div>
            <div class="c-bottom">
                <div class="seasons">seasons: <span>${s[c].seasons}</span></div>
                <div class="episodes">episodes: <span>${s[c].episodes}</span></div>
                <span class="network"><img src="./network/${s[c].network}" /></span>
            </div>
          </div>
      `;
  elem.classList.add("card");

  return elem;
}
