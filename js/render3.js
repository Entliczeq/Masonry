import { tvShows, tvShowsNow, tvShowsFuture } from "./imports/shows.js";

let html = ``;

const grid = document.querySelector("#grid");

// 4 digit id
function pad(n) {
  let s = "000" + (n + 1);
  return s.substr(s.length - 4);
}

// card render
function cardRender(shows) {
  // checking which subpage
  if (grid.classList.contains("finished")) {
    var thumbs = "finished";
    shows = tvShows;
  } else if (grid.classList.contains("now")) {
    var thumbs = "now";
    shows = tvShowsNow;
  } else if (grid.classList.contains("future")) {
    var thumbs = "future";
    shows = tvShowsFuture;
  }

  const len = shows.length;

  for (let i = 0; i < len; i++) {
    // rendering card
    html += `
        
        <div class="card">
            <img src="./thumbs/${thumbs}/id${pad(i)}.jpg" alt="${
      shows[i].title
    }" />
            <div class="c-content">
              <div class="c-top">
                <div class="c-title">${shows[i].title}</div>
                <div class="c-year">${shows[i].year}</div>
                <div class="c-par">
                    <div class="c-tagline">Summary</div>
                    <div class="c-desc">${shows[i].desc}</div>
                </div>
            </div>
            <div class="c-bottom">
                <div class="seasons">seasons: <span>${
                  shows[i].seasons
                }</span></div>
                <div class="episodes">episodes: <span>${
                  shows[i].episodes
                }</span></div>
                <span class="network"><img src="./network/${
                  shows[i].network
                }" /></span>
            </div>
          </div>
        </div>
        <!--./card-->
        
    `;
  }

  //adding cards to html
  grid.innerHTML = html;
}

cardRender();
